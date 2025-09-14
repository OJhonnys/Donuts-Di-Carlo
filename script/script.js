// Array with all donut objects, each has name, price and image path
const donuts = [
    {name: "chocolate", price: 5, img: "/img/donut-choco.png"},
    {name: "glazed", price: 5, img: "/img/donut-glazed.png"},
    {name: "vanilla", price: 5, img: "/img/donut-vanilla.png"},    
    {name: "nuttela", price: 5, img: "/img/donut-nutella.png"},
    {name: "boston", price: 5, img: "/img/donut-boston.png"},
    {name: "strawberry", price: 5, img: "/img/donut-strawberry.png"},    
    {name: "blueberry", price: 5, img: "/img/donut-blueberry.png"},
    {name: "apple", price: 5, img: "/img/donut-apple.png"},
    {name: "two chocolate", price: 5, img: "/img/donut-two-chocolate.png"},    
    {name: "pistachio", price: 5, img: "/img/donut-pistachio.png"},
    {name: "coconut", price: 5, img: "/img/donut-coconut.png"},
    {name: "sugar", price: 5, img: "/img/donut-sugar.png"},     
];

// Get the HTML container where we will add the donut cards
const container = document.getElementById("donutsContainer");

// Loop through each donut in the array
donuts.forEach(d => {
    // Create a new div element for each donut card
    const card = document.createElement("div");
    // Add the CSS class
    card.className = "donut-card";
    // Add the inner HTML content with price, image and name
    card.innerHTML = `
    <span class="price">$${d.price}</span>
    <img src="${d.img}" alt="${d.name} donut">
    <p><strong>${d.name}</strong><br><small>donut</small></p>
    `;
    // Add the card to the container in the page
    container.appendChild(card);
});