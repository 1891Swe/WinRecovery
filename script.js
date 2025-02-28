// Main script to display golf clubs
document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements
    const brandFiltersContainer = document.getElementById('brandFilters');
    const clubTypeFiltersContainer = document.getElementById('clubTypeFilters');
    const brandsContainer = document.getElementById('brandsContainer');
    
    // Initialize available club types set
    const clubTypes = new Set();
    
    // Function to get all selected checkbox values from a container
    function getSelectedCheckboxValues(container) {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(checkbox => checkbox.value);
    }
    
    // Function to display clubs based on filters
    function displayClubs() {
        // Get selected filter values
        const selectedBrands = getSelectedCheckboxValues(brandFiltersContainer);
        const selectedTypes = getSelectedCheckboxValues(clubTypeFiltersContainer);
        
        // Clear the container
        brandsContainer.innerHTML = '';
        
        // Track if we found any matches
        let foundMatches = false;
        
        // Process each brand
        for (const brand in window.golfData) {
            // Skip if brand filter is applied and doesn't match
            if (selectedBrands.length > 0 && !selectedBrands.includes(brand)) continue;
            
            const brandData = window.golfData[brand];
            if (!brandData || !brandData.length) continue;
            
            // Get brand name from the first item
            const brandName = brandData[0].brand;
            
            // Group clubs by type
            const clubsByType = {};
            
            // Filter and group clubs
            brandData.forEach(club => {
                // Add to club types set for filter options
                clubTypes.add(club.type);
                
                // Skip if club type filter is applied and doesn't match
                if (selectedTypes.length > 0 && !selectedTypes.includes(club.type)) return;
                
                // Initialize array for this club type if it doesn't exist
                if (!clubsByType[club.type]) {
                    clubsByType[club.type] = [];
                }
                
                // Add club to its type group
                clubsByType[club.type].push(club);
            });
            
            // Skip brand if no clubs match the filter
            if (Object.keys(clubsByType).length === 0) continue;
            
            // Create brand section
            const brandSection = document.createElement('div');
            brandSection.className = 'brand-section';
            
            // Add brand header
            const brandHeader = document.createElement('div');
            brandHeader.className = 'brand-header';
            brandHeader.innerHTML = `<h2>${brandName}</h2>`;
            brandSection.appendChild(brandHeader);
            
            // Process each club type
            Object.keys(clubsByType).sort().forEach(type => {
                // Create club type section
                const typeSection = document.createElement('div');
                typeSection.className = 'club-type-section';
                typeSection.innerHTML = `<h3>${type}</h3>`;
                
                // Create club grid
                const clubGrid = document.createElement('div');
                clubGrid.className = 'club-grid';
                
                // Add clubs to grid
                clubsByType[type].forEach(club => {
                    const clubCard = document.createElement('div');
                    clubCard.className = 'club-card';
                    
                    clubCard.innerHTML = `
                        <h4 class="club-name">${club.model}</h4>
                        <div class="club-details">
                            <p class="club-year">${club.year}</p>
                            <p class="club-description">${club.description}</p>
                        </div>
                        <a href="${club.url}" target="_blank" class="club-link">View Details</a>
                    `;
                    
                    clubGrid.appendChild(clubCard);
                });
                
                // Add club grid to type section
                typeSection.appendChild(clubGrid);
                
                // Add type section to brand section
                brandSection.appendChild(typeSection);
                
                // We found matches
                foundMatches = true;
            });
            
            // Add brand section to main container
            brandsContainer.appendChild(brandSection);
        }
        
        // Display "no results" message if no matches found
        if (!foundMatches) {
            brandsContainer.innerHTML = '<div class="no-results">No golf clubs match your selected filters. Please try different criteria.</div>';
        }
    }
    
    // Function to populate club type checkboxes
    function populateClubTypeFilters() {
        // Get all available club types from the data
        Object.values(window.golfData).forEach(brandData => {
            brandData.forEach(club => {
                clubTypes.add(club.type);
            });
        });
        
        // Clear existing options
        clubTypeFiltersContainer.innerHTML = '';
        
        // Add a checkbox for each club type
        Array.from(clubTypes).sort().forEach(type => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = type;
            checkbox.checked = true; // Default to checked
            checkbox.addEventListener('change', displayClubs);
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${type}`));
            
            clubTypeFiltersContainer.appendChild(label);
        });
    }
    
    // Add event listeners to brand filters
    const brandCheckboxes = brandFiltersContainer.querySelectorAll('input[type="checkbox"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', displayClubs);
    });
    
    // Wait for brand data to be fully loaded then populate filters and display clubs
    // Use a small timeout to ensure all brand data is loaded
    setTimeout(() => {
        populateClubTypeFilters();
        displayClubs();
    }, 100);
});
