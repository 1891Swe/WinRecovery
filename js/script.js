document.addEventListener('DOMContentLoaded', function() {
    const brandFilter = document.getElementById('brandFilter');
    const typeFilter = document.getElementById('typeFilter');
    const clubList = document.getElementById('clubList');
    
    // Set current date
    document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

    // Populate filters
    const brands = [...new Set(clubsData.map(club => club.brand))];
    const types = [...new Set(clubsData.map(club => club.type))];

    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });

    function filterClubs() {
        const selectedBrand = brandFilter.value;
        const selectedType = typeFilter.value;

        const filteredClubs = clubsData.filter(club => {
            if (selectedBrand && selectedType) {
                return club.brand === selectedBrand && club.type === selectedType;
            } else if (selectedBrand) {
                return club.brand === selectedBrand;
            } else if (selectedType) {
                return club.type === selectedType;
            }
            return true;
        });

        displayClubs(filteredClubs);
    }

    function displayClubs(clubs) {
        clubList.innerHTML = '';
        
        clubs.forEach(club => {
            const card = document.createElement('div');
            card.className = 'club-card';
            card.innerHTML = `
                <h2>${club.brand}</h2>
                <p>${club.type}</p>
                <p>${club.description}</p>
                <a href="${club.url}" target="_blank" rel="noopener noreferrer">View Collection</a>
            `;
            clubList.appendChild(card);
        });
    }

    brandFilter.addEventListener('change', filterClubs);
    typeFilter.addEventListener('change', filterClubs);

    // Initial display
    displayClubs(clubsData);
});
