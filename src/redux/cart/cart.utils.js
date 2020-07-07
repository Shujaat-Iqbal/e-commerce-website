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
                ? { ...item, quantity: item.quantity +1 }
                : item
    );
  } else {
    // Initial case of new item where quantity will be one
    return [ ...cartItems, { ...itemToBeAdded, quantity: 1 } ];
  }
}
