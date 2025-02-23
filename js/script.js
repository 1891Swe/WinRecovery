document.addEventListener('DOMContentLoaded', function() {
    const clubsDirectory = {};

    async function loadBrandClubs(brandName) {
        try {
            const response = await fetch(`data/brands/${brandName}.js`);
            const { default: clubsData } = await response.json();
            clubsDirectory[brandName.toLowerCase()] = clubsData;
            return clubsData;
        } catch (error) {
            console.error(`Error loading ${brandName} clubs data:`, error);
        }
    }

    function createClubCard(club) {
        const card = document.createElement('div');
        card.className = 'club-card';
        
        card.innerHTML = `
            <div class="club-header">
                <h3>${club.model}</h3>
                <span class="club-year">${club.year}</span>
            </div>
            <div class="club-info">
                <p class="club-description">${club.description}</p>
                <div class="club-footer">
                    <span class="club-reviews">${club.reviews}</span>
                    <a href="${club.url}" class="club-link" target="_blank">View Details</a>
                </div>
            </div>
        `;
        
        return card;
    }

    function displayBrandClubs(brandName, clubsData) {
        const container = document.getElementById('clubs-container');
        const brandSection = document.createElement('section');
        brandSection.className = 'brand-section';
        
        brandSection.innerHTML = `
            <h2 class="brand-name">${brandName}</h2>
            <div class="clubs-grid"></div>
        `;
        
        const clubsGrid = brandSection.querySelector('.clubs-grid');
        
        clubsData
            .sort((a, b) => b.year.localeCompare(a.year))
            .forEach(club => {
                clubsGrid.appendChild(createClubCard(club));
            });
        
        container.appendChild(brandSection);
    }

    // Load club brands
    const clubBrands = [
        'cobra',
        'taylormade',
        'titleist',
        'callaway',
        'ping',
        'mizuno',
        'cleveland',
        'wilson',
        'srixon',
        'pxg'
    ];

    // Load and display
    Promise.all(clubBrands.map(loadBrandClubs))
        .then(() => {
            Object.entries(clubsDirectory).forEach(([brandName, clubsData]) => {
                displayBrandClubs(brandName, clubsData);
            });
        })
        .catch(error => {
            console.error('Error initializing clubs directory:', error);
        });

    // Year filter
    document.getElementById('year-filter').addEventListener('change', function(e) {
        const selectedYear = e.target.value;
        const container = document.getElementById('clubs-container');
        container.innerHTML = '';
        
        Object.entries(clubsDirectory).forEach(([brandName, clubsData]) => {
            const filteredClubs = selectedYear 
                ? clubsData.filter(club => club.year === selectedYear)
                : clubsData;
            
            if (filteredClubs.length > 0) {
                displayBrandClubs(brandName, filteredClubs);
            }
        });
    });
});
