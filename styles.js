window.onload = function() {
    // Show the modal when the page loads
    const modal = document.getElementById("welcome-modal");
    modal.style.display = "block"; // Show modal

    // Handle Continue button click
    document.getElementById("continue-btn").onclick = function() {
        modal.style.display = "none"; // Hide modal and continue to the site
    };

    // Handle Cancel button click
    document.getElementById("cancel-btn").onclick = function() {
        modal.innerHTML = "<h2>Thank you for visiting!</h2>"; // Show thank you message
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after a short delay
        }, 2000); // 2 second delay before hiding
    };

    // Add a welcoming message
    const welcomeMessageDiv = document.getElementById("welcome-message");
    welcomeMessageDiv.innerHTML = "<h2>Welcome to Our Hotel! Enjoy your dining experience.</h2>";
    welcomeMessageDiv.style.textAlign = "center"; // Center the message
    welcomeMessageDiv.style.color = "#4CAF50"; // Change text color (green)
    welcomeMessageDiv.style.margin = "20px"; // Add some spacing

    // Load meals and orders when sections are shown
    displayMeals();
    displayOrder();
};

function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');

    // Hide all sections first
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Call display functions for respective sections
    if (sectionId === 'todays-meal') {
        displayMeals();
    }
    
    if (sectionId === 'order-section') {
        displayOrder();
    }
}

const foodItems = [
    { name: "Ice Cream", price: 200 },
    { name: "Pizza", price: 500 },
    { name: "Watermelon", price: 500 },
    { name: "Burger", price: 300 },
    { name: "Bananas", price: 50 },
    { name: "Apples", price: 100 },
    { name: "Oranges", price: 80 },
    { name: "Mangoes", price: 120 },
    { name: "Grapes", price: 150 },
    { name: "Pineapples", price: 200 },
    { name: "Strawberries", price: 250 },
    { name: "Peaches", price: 220 },
    { name: "Kiwi", price: 300 },
    { name: "Grilled Chicken", price: 400 },
    { name: "Beef Steak", price: 500 },
    { name: "Fish Fillet", price: 450 },
    { name: "Egg Omelette", price: 500 },
    { name: "Lamb Chops", price: 600 },
    { name: "Tofu Stir Fry", price: 350 },
    { name: "Pork Chops", price: 550 },
    { name: "Turkey Breast", price: 480 },
    { name: "Shrimp Scampi", price: 700 },
    { name: "Vegetable Platter", price: 250 }
];

function displayMeals() {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = ''; // Clear previous meals

    foodItems.forEach(item => {
        mealsDiv.innerHTML += `<p>${item.name} - KSh ${item.price}</p>`;
    });
}

function displayOrder() {
    const orderDiv = document.getElementById('order');
    orderDiv.innerHTML = ''; // Clear previous orders
    const checkboxes = document.querySelectorAll('#orderForm input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const price = checkbox.getAttribute('data-price');
        orderDiv.innerHTML += `<p>${checkbox.value} - KSh ${price}</p>`;
    });
}

function generateReceipt() {
    const receiptDiv = document.getElementById('receipt');
    receiptDiv.innerHTML = ''; // Clear previous receipt
    const checkboxes = document.querySelectorAll('#orderForm input[type="checkbox"]:checked');
    let total = 0;

    checkboxes.forEach(checkbox => {
        const price = parseInt(checkbox.getAttribute('data-price'));
        total += price;
        receiptDiv.innerHTML += `<p>${checkbox.value} - KSh ${price}</p>`;
    });

    receiptDiv.innerHTML += `<h3>Total: KSh ${total}</h3>`; // Show total price
}
