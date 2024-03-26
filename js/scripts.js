class Pizza {
    constructor(pizza, size, quantity, toppings, crust, shape, deliveryType) {
        this.pizza = pizza;
        this.size = size;
        this.quantity = quantity;
        this.toppings = toppings;
        this.crust = crust;
        this.shape=shape;
        this.deliveryType = deliveryType;
    }

    // Method to display pizza order details
    displayOrder() {
        let printMessage = `Order Details:
        Pizza: ${this.pizza}
        Size: ${this.size}
        Quantity: ${this.quantity}
        Toppings: ${this.toppings.join(', ')}
        Crust: ${this.crust}
        Shape: ${this.shape}
        Delivery Type: ${this.deliveryType}`
        return printMessage;
    }
}

// Function to capture form values and create Pizza object
function orderPizza() {
    const pizza= document.getElementById('pizza').value;
    const pizzaSize = document.getElementById('pizzaSize').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const toppings = [];
    const toppingCheckboxes = document.getElementsByName('topping');
    toppingCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            toppings.push(checkbox.value);
        }
    });

    const crust = document.getElementById('crust').value;
    const shape = document.getElementById('shape').value;
    const deliveryType = document.getElementById('DeliveryType').value;

    // Create Pizza object
    const pizzaOrder = new Pizza(pizza,pizzaSize, quantity, toppings, crust, shape, deliveryType);

    // Display order details
    const pizzaDescription = document.getElementById('pizzaDescription');
    pizzaDescription.textContent = pizzaOrder.displayOrder();

    // Display student info
    var studentID = "1219275"; // Replace with your student ID
    var studentName = "ChingHoTong"; // Replace with your name
    var studentInfo = document.getElementById("studentInfo");
    studentInfo.innerHTML = "<strong>Student ID:</strong> " + studentID + "<br><strong>Name:</strong> " + studentName;
};

    
