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
    
    // Get unique brands and club types
    const brands = [];
    const clubTypes = [];
    
    // Process each brand's data
    for (const brandKey in window.golfData) {
        const brand = window.golfData[brandKey];
        
        // Add brand to brands array if not already included
        if (!brands.includes(brand.name)) {
            brands.push(brand.name);
        }
        
        // Add club types if not already included
        brand.clubTypes.forEach(type => {
            if (!clubTypes.includes(type.name)) {
                clubTypes.push(type.name);
            }
        });
    }
    
    // Sort arrays alphabetically
    brands.sort();
    clubTypes.sort();
    
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

function renderBrands() {
    const selectedBrand = document.getElementById('brandFilter').value;
    const selectedClubType = document.getElementById('clubTypeFilter').value;
    const container = document.getElementById('brandsContainer');
    
    // Clear container
    container.innerHTML = '';
    
    // Filter and sort brands
    const filteredBrands = Object.values(window.golfData).filter(brand => {
        // Apply brand filter if selected
        if (selectedBrand && brand.name !== selectedBrand) {
            return false;
        }
        
        // Apply club type filter if selected
        if (selectedClubType) {
            return brand.clubTypes.some(type => type.name === selectedClubType);
        }
        
        return true;
    });
    
    // Sort brands alphabetically by name
    filteredBrands.sort((a, b) => a.name.localeCompare(b.name));
    
    // Render each brand
    filteredBrands.forEach(brand => {
        const brandCard = createBrandCard(brand, selectedClubType);
        container.appendChild(brandCard);
    });
    
    // Show message if no results
    if (filteredBrands.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No matching golf clubs found.';
        container.appendChild(noResults);
    }
}

function createBrandCard(brand, selectedClubType) {
    const card = document.createElement('div');
    card.className = 'brand-card';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'brand-header';
    header.innerHTML = `<h2>${brand.name}</h2>`;
    card.appendChild(header);
    
    // Create stats
    const stats = document.createElement('div');
    stats.className = 'brand-stats';
    
    // Filter club types if selected
    let clubTypes = brand.clubTypes;
    if (selectedClubType) {
        clubTypes = clubTypes.filter(type => type.name === selectedClubType);
    }
    
    // Calculate total clubs across all types
    const totalClubs = clubTypes.reduce((sum, type) => sum + type.clubs.length, 0);
    
    stats.innerHTML = `
        <div class="stat-item">
            <div class="stat-number">${clubTypes.length}</div>
            <div class="stat-label">Club Types</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${totalClubs}</div>
            <div class="stat-label">Total Models</div>
        </div>
    `;
    card.appendChild(stats);
    
    // Create content
    const content = document.createElement('div');
    content.className = 'brand-content';
    
    // Add each club type
    clubTypes.forEach(type => {
        const clubTypeEl = document.createElement('div');
        clubTypeEl.className = 'club-type';
        
        clubTypeEl.innerHTML = `<h3>${type.name}</h3>`;
        
        const clubList = document.createElement('ul');
        clubList.className = 'club-list';
        
        // Add each club
        type.clubs.slice(0, 3).forEach(club => {
            const clubItem = document.createElement('li');
            clubItem.className = 'club-item';
            
            clubItem.innerHTML = `
                <div class="club-name">${club.name}</div>
                <div class="club-description">${club.description || ''}</div>
                <div class="club-meta">
                    ${club.year ? 'Released: ' + club.year : ''}
                    ${club.price ? ' • Price: $' + club.price : ''}
                </div>
            `;
            
            clubList.appendChild(clubItem);
        });
        
        clubTypeEl.appendChild(clubList);
        
        // Add "View All" link if there are more than 3 clubs
        if (type.clubs.length > 3) {
            const viewAll = document.createElement('a');
            viewAll.className = 'view-all';
            viewAll.href = '#';
            viewAll.textContent = `View All ${type.clubs.length} Models`;
            viewAll.addEventListener('click', function(e) {
                e.preventDefault();
                alert(`Viewing all ${type.clubs.length} ${type.name} models for ${brand.name}`);
            });
            
            clubTypeEl.appendChild(viewAll);
        }
        
        content.appendChild(clubTypeEl);
    });
    
    card.appendChild(content);
    
    return card;
}
