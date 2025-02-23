// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all the clubs data from the window.golfData object
    const allClubs = Object.values(window.golfData).flat();
    
    // Get unique brands
    const brands = [...new Set(allClubs.map(club => club.brand))];
    
    // Get unique club types
    const clubTypes = [...new Set(allClubs.map(club => club.type))];
    
    // Populate brand filter
    const brandFilter = document.getElementById('brandFilter');
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
    
    // Populate club type filter
    const clubTypeFilter = document.getElementById('clubTypeFilter');
    clubTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        clubTypeFilter.appendChild(option);
    });
    
    // Function to render clubs
    function renderClubs(clubs) {
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
        
        // Create brand cards
        Object.entries(groupedByBrand).forEach(([brand, brandClubs]) => {
            const brandCard = document.createElement('div');
            brandCard.className = 'brand-card';
            
            brandCard.innerHTML = `
                <h2>${brand}</h2>
                <ul class="club-list">
                    ${brandClubs.map(club => `
                        <li>
                            <strong>${club.model}</strong> (${club.type})
                            <br>
                            <small>${club.description}</small>
                            <br>
                            <small>Year: ${club.year} | ${club.reviews}</small>
                        </li>
                    `).join('')}
                </ul>
            `;
            
            container.appendChild(brandCard);
        });
    }
    
    // Function to handle filters
    function handleFilters() {
        const selectedBrand = brandFilter.value;
        const selectedType = clubTypeFilter.value;
        
        let filteredClubs = allClubs;
        
        if (selectedBrand) {
            filteredClubs = filteredClubs.filter(club => club.brand === selectedBrand);
        }
        
        if (selectedType) {
            filteredClubs = filteredClubs.filter(club => club.type === selectedType);
        }
        
        renderClubs(filteredClubs);
    }
    
    // Add event listeners to filters
    brandFilter.addEventListener('change', handleFilters);
    clubTypeFilter.addEventListener('change', handleFilters);
    
    // Initial render
    renderClubs(allClubs);
});
