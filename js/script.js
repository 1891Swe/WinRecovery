// Global array to store all brands data
let allBrands = [];

// Function to initialize the application
function initializeApp() {
    // Populate filters
    updateFilters();
    
    // Initial render
    renderBrands(allBrands);
    
    // Add event listeners to filters
    document.getElementById('brandFilter').addEventListener('change', handleFilters);
    document.getElementById('clubTypeFilter').addEventListener('change', handleFilters);
}

// Function to update filter options
function updateFilters() {
    const brandFilter = document.getElementById('brandFilter');
    const clubTypeFilter = document.getElementById('clubTypeFilter');
    
    // Get unique brands
    const brands = [...new Set(allBrands.map(brand => brand.name))];
    
    // Get unique club types
    const clubTypes = [...new Set(allBrands.flatMap(brand => 
        brand.clubs.map(club => club.type)
    ))];
    
    // Populate brand filter
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
    
    // Populate club type filter
    clubTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        clubTypeFilter.appendChild(option);
    });
}

// Function to handle filter changes
function handleFilters() {
    const selectedBrand = document.getElementById('brandFilter').value;
    const selectedClubType = document.getElementById('clubTypeFilter').value;
    
    let filteredBrands = allBrands;
    
    // Filter by brand
    if (selectedBrand) {
        filteredBrands = filteredBrands.filter(brand => brand.name === selectedBrand);
    }
    
    // Filter by club type
    if (selectedClubType) {
        filteredBrands = filteredBrands.map(brand => ({
            ...brand,
            clubs: brand.clubs.filter(club => club.type === selectedClubType)
        })).filter(brand => brand.clubs.length > 0);
    }
    
    renderBrands(filteredBrands);
}

// Function to render brands
function renderBrands(brands) {
    const container = document.getElementById('brandsContainer');
    container.innerHTML = '';
    
    brands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        
        brandCard.innerHTML = `
            <h2>${brand.name}</h2>
            <ul class="club-list">
                ${brand.clubs.map(club => `
                    <li>
                        <strong>${club.type}:</strong> ${club.name}
                        ${club.price ? ` - $${club.price}` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
        
        container.appendChild(brandCard);
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
