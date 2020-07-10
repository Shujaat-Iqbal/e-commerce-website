/**
 * Handles quantity field for cart items
 * @param {any[]} cartItems
 * @param {any} itemToBeAdded
 * @returns {any[]} cartItems to be added in store
 */
export const addItemToCart = (cartItems, itemToBeAdded) => {
  // Checks if item already exists in cart items
  const isExistingItem = cartItems.find(
    item => item.id === itemToBeAdded.id
  );

  if (isExistingItem) {
    // if item already exists in cartItems array then add its quantity
    return cartItems.map(
      item => item.id === itemToBeAdded.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
    );
  } else {
    // Initial case of new item where quantity will be one
    return [ ...cartItems, { ...itemToBeAdded, quantity: 1 } ];
  }
}

/**
 * Decrements quantity field for cart items
 * @param {any[]} cartItems
 * @param {any} itemToBeRemoved
 * @returns {any[]} cartItems to be added in store
 */
export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  // Checks if item already exists in cart items
  const existingItem = cartItems.find(
    item => item.id === itemToBeRemoved.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(
      item => item.id !== itemToBeRemoved.id
    )
  }

  // Decrement the quantity of existingItem
  return cartItems.map(
    item => item.id === itemToBeRemoved.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
  );
}
