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

const container = document.getElementById("donutsContainer");

donuts.forEach(d => {
    const card = document.createElement("div");
    card.className = "donut-card";
    card.innerHTML = `
    <span class="price">$${d.price}</span>
    <img src="${d.img}" alt="${d.name} donut">
    <p><strong>${d.name}</strong><br><small>donut</small></p>
    `;
    container.appendChild(card);
});