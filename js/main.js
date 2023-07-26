const itemsInCart = [
    { id: 1, name: "Item 1 :", price: 10, quantity: 1, liked: false },
    { id: 2, name: "Item 2 :", price: 5, quantity: 1, liked: true },
    { id: 3, name: "Item 3 :", price: 20, quantity: 1, liked: false }
  ];
  
  // Function to render the cart items
  function renderCartItems() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
  
    let totalPrice = 0;
  
    itemsInCart.forEach(item => {
      const itemElement = document.createElement("li");
  
      // Adjust quantity buttons
      const plusButton = document.createElement("button");
      plusButton.innerText = "+";
      plusButton.addEventListener("click", () => {
        item.quantity++;
        renderCartItems();
      });
  
      const minusButton = document.createElement("button");
      minusButton.innerText = "-";
      minusButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          renderCartItems();
        }
      });
  
      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        const itemIndex = itemsInCart.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex !== -1) {
          itemsInCart.splice(itemIndex, 1);
          renderCartItems();
        }
      });
  
      // Like button
      const likeButton = document.createElement("button");
      likeButton.innertext = "jaime";
      likeButton.style.backgroundColor = item.liked ? "red" : "white";
      likeButton.addEventListener("click", () => {
        item.liked = !item.liked;
        renderCartItems();
      });
  
      // Item details
      const itemName = document.createElement("span");
      itemName.innerText = item.name;
  
      const itemPrice = document.createElement("span");
      itemPrice.innerText = `$${item.price * item.quantity}`;
  
      // Append elements to itemElement
      itemElement.appendChild(plusButton);
      itemElement.appendChild(minusButton);
      itemElement.appendChild(deleteButton);
      itemElement.appendChild(likeButton);
      itemElement.appendChild(itemName);
      itemElement.appendChild(itemPrice);
  
      cartItemsElement.appendChild(itemElement);
  
      totalPrice += item.price * item.quantity;
    });
  
    // Update total price
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = `$${totalPrice}`;
  }
  
  // Initial rendering
  renderCartItems();
