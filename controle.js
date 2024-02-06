document.addEventListener("DOMContentLoaded", function() {
    const hoodiesContainer = document.getElementById("hoodies");

    // Sample hoodie data
    const hoodies = [
        { name: "500 days of summer", price: 29.99, image: "img1.png" },
        { name: "Gray Hoodie", price: 24.99, image: "download.png" },
        { name: "Blue Hoodie", price: 34.99, image: "blue_hoodie.jpg" }
    ];

    // Function to display hoodies
    function displayHoodies() {
        hoodies.forEach(hoodie => {
            const hoodieDiv = document.createElement("div");
            hoodieDiv.classList.add("hoodie");
            hoodieDiv.innerHTML = `
                <img src="${hoodie.image}" alt="${hoodie.name}">
                <h3>${hoodie.name}</h3>
                <p>$${hoodie.price.toFixed(2)}</p>
                <button onclick="addToCart('${hoodie.name}', ${hoodie.price})">Add to Cart</button>
            `;
            hoodiesContainer.appendChild(hoodieDiv);
        });
    }
    displayHoodies();
});

function addToCart(name, price) {
    alert(`Added ${name} to cart. Price: $${price.toFixed(2)}`);
}
