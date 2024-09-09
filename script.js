// Example fish data with prices and stock
const fishData = {
    tuna: {name: "Tuna / Kelawalla", description: "A firm textured fish...", pricePerKg: 1500, stock: 10, img: "images/tuna.jpg"},
    sailfish: {name: "Sailfish / Thalapath", description: "A versatile fish...", pricePerKg: 1800, stock: 5, img: "images/sailfish.jpg"},
    mackerel: {name: "Scad / Linna", description: "A small fish with...", pricePerKg: 1200, stock: 15, img: "images/mackerel.jpg"},
    sardine: {name: "Small Trevally / Paraw", description: "A rich flavored fish...", pricePerKg: 1000, stock: 8, img: "images/sardine.jpg"},
    snapper: {name: "Big Trevally / Paraw", description: "Popular for grilling...", pricePerKg: 1800, stock: 5, img: "images/snapper.jpg"},
    tilapia: {name: "Seer Fish / Thora", description: "A famous large fish...", pricePerKg: 2000, stock: 12, img: "images/tilapia.jpg"},
    catfish: {name: "Skipjack Tuna / Balaya", description: "Great for curries...", pricePerKg: 1500, stock: 6, img: "images/catfish.jpg"},
    grouper: {name: "Atawalla Fish", description: "Good for frying...", pricePerKg: 1600, stock: 7, img: "images/grouper.jpg"},
    bass: {name: "Crabs / Kakuluwa", description: "Excellent seafood choice...", pricePerKg: 2200, stock: 10, img: "images/bass.jpg"},
    halibut: {name: "Trenched Sardine / Hurulla", description: "Small fish rich in flavor...", pricePerKg: 1300, stock: 18, img: "images/halibut.jpg"},
    marlin: {name: "Sardine / Salaya", description: "Affordable and tasty...", pricePerKg: 800, stock: 20, img: "images/marlin.jpg"},
    barracuda: {name: "Jack Trevally / Surapara", description: "Great for BBQ...", pricePerKg: 1700, stock: 9, img: "images/barracuda.jpg"},
    cod: {name: "Large Prawns / L. Issa", description: "Perfect for special dishes...", pricePerKg: 2500, stock: 4, img: "images/cod.jpg"},
    trout: {name: "Small Prawns / S. Issa", description: "Perfect for appetizers...", pricePerKg: 2000, stock: 12, img: "images/trout.jpg"},
    yellowfin: {name: "Cuttlefish / Dalla", description: "Delicious and chewy...", pricePerKg: 1800, stock: 6, img: "images/yellowfin.jpg"}
};

// Load fish information based on the query parameter
function loadFishInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const fish = urlParams.get('fish');
    if (fishData[fish]) {
        document.getElementById('fish-image').src = fishData[fish].img;
        document.getElementById('fish-name').textContent = fishData[fish].name;
        document.getElementById('fish-description').textContent = fishData[fish].description;
        document.getElementById('price-value').textContent = fishData[fish].pricePerKg;
        document.getElementById('stock-status').textContent = fishData[fish].stock > 0 ? "In stock" : "Out of stock";
    }
}

// Update the price when the weight changes
function updatePrice() {
    const weight = document.getElementById('weight').value;
    const fish = new URLSearchParams(window.location.search).get('fish');
    const price = fishData[fish].pricePerKg * weight;
    document.getElementById('price-value').textContent = price;
}

// Proceed to the checkout form
function proceedToCheckout() {
    const fish = new URLSearchParams(window.location.search).get('fish');
    const weight = document.getElementById('weight').value;
    window.location.href = "checkout.html?fish=" + fish + "&weight=" + weight;
}

// Call the load function on page load
window.onload = loadFishInfo;
