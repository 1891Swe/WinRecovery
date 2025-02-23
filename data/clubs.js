document.addEventListener('DOMContentLoaded', function() {
    // Object to store all loaded brand data
    const allBrands = {};
    
    // Function to load brand data
    async function loadBrandData(brand) {
        const script = document.createElement('script');
        script.src = `js/brands/${brand}.js`;
        document.head.appendChild(script);
        
        // Wait for script to load
        return new Promise((resolve) => {
            script.onload = () => {
                resolve();
            };
        });
    }

    // Load initial brands
    const brandsToLoad = ['cobra', 'titleist', 'taylormade'];
    Promise.all(brandsToLoad.map(loadBrandData))
        .then(() => {
            // Initialize your display with all loaded data
            displayClubs();
        });
});
