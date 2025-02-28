document.addEventListener('DOMContentLoaded', function() {
    // Initialize UI
    initializeFilters();
    renderBrands();
    
    // Add event listeners
    document.getElementById('brandFilter').addEventListener('change', renderBrands);
    document.getElementById('clubTypeFilter').addEventListener('change', renderBrands);
});

function initializeFilters() {
    const brandFilter = document.getElementById('brandFilter');
    const clubTypeFilter = document.getElementById('clubTypeFilter');
    
    // Clear existing options but keep the default "All" options
    while (brandFilter.options.length > 1) {
        brandFilter.remove(1);
    }
    
    while (clubTypeFilter.options.length > 1) {
        clubTypeFilter.remove(1);
    }
    
    // Get unique brands and club types
    const brands = new Set();
    const clubTypes = new Set();
    
    // Process each brand's data
    for (const brandKey in window.golfData) {
        const brandData = window.golfData[brandKey];
        
        // If brandData is an array (like in the cobra golf data)
        if (Array.isArray(brandData)) {
            brandData.forEach(club => {
                if (club && club.brand) {
                    brands.add(club.brand);
                }
                if (club && club.type) {
                    clubTypes.add(club.type);
                }
            });
        }
    }
    
    // Sort arrays alphabetically
    const sortedBrands = Array.from(brands).sort();
    const sortedClubTypes = Array.from(clubTypes).sort();
    
    // Populate brand filter
    sortedBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand.toLowerCase();
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
    
    // Populate club type filter
    sortedClubTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        clubTypeFilter.appendChild(option);
    });
}

function renderBrands() {
    const selectedBrand = document.getElementById('brandFilter').value.toLowerCase();
    const selectedClubType = document.getElementById('clubTypeFilter').value;
    const container = document.getElementById('brandsContainer');
    
    // Clear container
    container.innerHTML = '';
    
    // Group the clubs by brand
    const groupedByBrand = {};
    
    for (const brandKey in window.golfData) {
        const brandData = window.golfData[brandKey];
        
        // If brandData is an array (like in the cobra golf data)
        if (Array.isArray(brandData)) {
            brandData.forEach(club => {
                if (!club || !club.brand) return;
                
                const clubBrand = club.brand;
                const clubBrandLower = clubBrand.toLowerCase();
                
                // Apply brand filter if selected
                if (selectedBrand && clubBrandLower !== selectedBrand && selectedBrand !== "") {
                    return;
                }
                
                // Apply club type filter if selected
                if (selectedClubType && club.type !== selectedClubType && selectedClubType !== "") {
                    return;
                }
                
                // Initialize brand in grouped object if it doesn't exist
                if (!groupedByBrand[clubBrand]) {
                    groupedByBrand[clubBrand] = {
                        name: clubBrand,
                        clubs: []
                    };
                }
                
                // Add club to the brand
                groupedByBrand[clubBrand].clubs.push(club);
            });
        }
    }
    
    // Convert to array and sort by brand name
    const sortedBrands = Object.values(groupedByBrand).sort((a, b) => 
        a.name.localeCompare(b.name)
    );
    
    // Render each brand
    sortedBrands.forEach(brand => {
        const brandSection = createBrandSection(brand, selectedClubType);
        container.appendChild(brandSection);
    });
    
    // Show message if no results
    if (sortedBrands.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No matching golf clubs found.';
        container.appendChild(noResults);
    }
}

function createBrandSection(brand, selectedClubType) {
    const section = document.createElement('section');
    section.className = 'brand-section';
    
    // Create brand header
    const header = document.createElement('div');
    header.className = 'brand-header';
    header.innerHTML = `<h2>${brand.name}</h2>`;
    section.appendChild(header);
    
    // Group clubs by type
    const clubsByType = {};
    
    brand.clubs.forEach(club => {
        if (!club.type) return;
        
        // Apply club type filter if selected
        if (selectedClubType && club.type !== selectedClubType && selectedClubType !== "") {
            return;
        }
        
        if (!clubsByType[club.type]) {
            clubsByType[club.type] = [];
        }
        
        clubsByType[club.type].push(club);
    });
    
    // Sort club types
    const sortedTypes = Object.keys(clubsByType).sort();
    
    // Create club type sections
    sortedTypes.forEach(type => {
        const clubs = clubsByType[type];
        
        // Skip if no clubs for this type
        if (!clubs || clubs.length === 0) return;
        
        const typeSection = document.createElement('div');
        typeSection.className = 'club-type-section';
        
        // Add type header
        const typeHeader = document.createElement('h3');
        typeHeader.textContent = type;
        typeSection.appendChild(typeHeader);
        
        // Create club grid/list
        const clubList = document.createElement('div');
        clubList.className = 'club-grid';
        
        // Sort clubs by year (newest first) then by name
        const sortedClubs = clubs.sort((a, b) => {
            if (a.year !== b.year) {
                return b.year - a.year; // Newest first
            }
            return a.model.localeCompare(b.model);
        });
        
        // Add each club
        sortedClubs.forEach(club => {
            const clubCard = document.createElement('div');
            clubCard.className = 'club-card';
            
            // Create club content
            clubCard.innerHTML = `
                <h4 class="club-name">${club.model || 'Unknown Club'}</h4>
                <div class="club-details">
                    <p class="club-year">${club.year || ''}</p>
                    <p class="club-description">${club.description || ''}</p>
                </div>
                <a href="${club.url}" target="_blank" class="club-link">View Details</a>
            `;
            
            clubList.appendChild(clubCard);
        });
        
        typeSection.appendChild(clubList);
        section.appendChild(typeSection);
    });
    
    return section;
}
