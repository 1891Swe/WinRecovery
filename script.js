document.addEventListener('DOMContentLoaded', function() {
    // Global error handler
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('Global error:', message, 'at', source, ':', lineno);
        return false;
    };

    // Initialize window.golfData if it doesn't exist
    window.golfData = window.golfData || {};
    
    function initializeApp() {
        const allClubs = getAllClubs();
        console.log('Total clubs found:', allClubs.length);
        
        updateFilters(allClubs);
        renderBrands(allClubs);
        
        // Add event listeners to filters
        document.getElementById('brandFilter').addEventListener('change', handleFilters);
        document.getElementById('clubTypeFilter').addEventListener('change', handleFilters);
    }
    
    function getAllClubs() {
        let allClubs = [];
        for (const brand in window.golfData) {
            if (window.golfData.hasOwnProperty(brand) && Array.isArray(window.golfData[brand])) {
                allClubs = allClubs.concat(window.golfData[brand]);
            }
        }
        return allClubs;
    }
    
    function updateFilters(clubs) {
        const brandFilter = document.getElementById('brandFilter');
        const clubTypeFilter = document.getElementById('clubTypeFilter');
        
        // Get unique brands and types
        const brands = [...new Set(clubs.map(club => club.brand))];
        const types = [...new Set(clubs.map(club => club.type))];
        
        // Clear existing options
        brandFilter.innerHTML = '<option value="">All Brands</option>';
        clubTypeFilter.innerHTML = '<option value="">All Club Types</option>';
        
        // Add options
        brands.sort().forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
        
        types.sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            clubTypeFilter.appendChild(option);
        });
    }
    
    function handleFilters() {
        const selectedBrand = document.getElementById('brandFilter').value;
        const selectedType = document.getElementById('clubTypeFilter').value;
        
        let filteredClubs = getAllClubs();
        
        if (selectedBrand) {
            filteredClubs = filteredClubs.filter(club => club.brand === selectedBrand);
        }
        
        if (selectedType) {
            filteredClubs = filteredClubs.filter(club => club.type === selectedType);
        }
        
        renderBrands(filteredClubs);
    }
    
    function renderBrands(clubs) {
        const container = document.getElementById('brandsContainer');
        container.innerHTML = '';
        
        // Group clubs by brand
        const groupedByBrand = {};
        clubs.forEach(club => {
            if (!groupedByBrand[club.brand]) {
                groupedByBrand[club.brand] = [];
            }
            groupedByBrand[club.brand].push(club);
        });
        
        // Render each brand section
        Object.keys(groupedByBrand).sort().forEach(brand => {
            const brandClubs = groupedByBrand[brand];
            const brandSection = document.createElement('div');
            brandSection.className = 'brand-section';
            
            // Group clubs by type
            const clubsByType = {};
            brandClubs.forEach(club => {
                if (!clubsByType[club.type]) {
                    clubsByType[club.type] = [];
                }
                clubsByType[club.type].push(club);
            });
            
            // Create brand header
            const header = document.createElement('div');
            header.className = 'brand-header';
            header.innerHTML = `
                <h2>${brand}</h2>
                <span class="expand-icon">▼</span>
            `;
            
            // Create stats bar
            const statsBar = document.createElement('div');
            statsBar.className = 'stats-bar';
            statsBar.innerHTML = `
                <div class="stat-item">
                    <strong>Total Models:</strong> ${brandClubs.length}
                </div>
                <div class="stat-item">
                    <strong>Categories:</strong> ${Object.keys(clubsByType).length}
                </div>
            `;
            
            // Create content section
            const content = document.createElement('div');
            content.className = 'brand-content';
            
            // Create club categories
            const categoriesDiv = document.createElement('div');
            categoriesDiv.className = 'club-categories';
            
            Object.keys(clubsByType).sort().forEach(type => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'club-category';
                categoryDiv.innerHTML = `
                    <h3>${type}</h3>
                    <ul class="club-list">
                        ${clubsByType[type].map(club => `
                            <li>
                                <strong>${club.model}</strong>
                                <br>
                                <small>${club.description}</small>
                                ${club.price ? `<br><small>Price: ${club.price}</small>` : ''}
                                <br>
                                <small>${club.reviews}</small>
                            </li>
                        `).join('')}
                    </ul>
                `;
                categoriesDiv.appendChild(categoryDiv);
            });
            
            content.appendChild(categoriesDiv);
            
            // Add click handler for accordion
            header.addEventListener('click', () => {
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
            
            // Assemble the section
            brandSection.appendChild(header);
            brandSection.appendChild(statsBar);
            brandSection.appendChild(content);
            container.appendChild(brandSection);
        });
    }
    
    // Initialize after a short delay to ensure scripts are loaded
    setTimeout(initializeApp, 100);
});
