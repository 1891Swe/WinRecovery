// Main script.js
document.addEventListener('DOMContentLoaded', function() {
    // Object to store all loaded brand data
    const brandDirectory = {};

    // Function to load brand data
    async function loadBrandData(brandName) {
        try {
            const response = await fetch(`data/brands/${brandName}.js`);
            const data = await response.json();
            brandDirectory[brandName] = data;
            return data;
        } catch (error) {
            console.error(`Error loading ${brandName} data:`, error);
        }
    }

    // Function to display brands in the directory
    function displayBrands() {
        const container = document.getElementById('brand-directory');
        
        Object.values(brandDirectory).forEach(brand => {
            const brandCard = createBrandCard(brand);
            container.appendChild(brandCard);
        });
    }

    // Create individual brand cards
    function createBrandCard(brand) {
        const card = document.createElement('div');
        card.className = 'brand-card';
        
        card.innerHTML = `
            <div class="brand-header">
                <h2>${brand.name}</h2>
                <img src="${brand.logo}" alt="${brand.name} logo" class="brand-logo">
            </div>
            <div class="brand-info">
                <p class="brand-description">${brand.description}</p>
                <div class="brand-details">
                    <p><strong>Founded:</strong> ${brand.founded}</p>
                    <p><strong>Headquarters:</strong> ${brand.headquarters}</p>
                    <p><strong>Signature Products:</strong> ${brand.signatureProducts.join(', ')}</p>
                </div>
                <a href="${brand.website}" class="brand-link" target="_blank">Visit Website</a>
            </div>
        `;
        
        return card;
    }

    // Load all brands and initialize display
    const topBrands = [
        'titleist',
        'taylormade',
        'callaway',
        'ping',
        'cobra',
        'mizuno',
        'cleveland',
        'wilson',
        'srixon',
        'odyssey',
        'pxg',
        'bridgestone',
        'adams',
        'tour-edge',
        'xxio'
    ];

    // Load all brand data and display
    Promise.all(topBrands.map(loadBrandData))
        .then(() => {
            displayBrands();
        })
        .catch(error => {
            console.error('Error initializing brand directory:', error);
        });
});
