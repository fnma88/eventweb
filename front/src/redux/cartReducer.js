function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD":
      if (
        cart.length > 0 &&
        cart.some((ticket) => ticket.name === action.payload.name)
      ) {
        return cart.map((ticket) => {
          if (ticket.name === action.payload.name) {
            return {
              ...ticket,
              quantity: ticket.quantity + action.payload.quantity,
            };
          }
          return ticket;
        });
      }
      return [...cart, action.payload];

    case "DELETE":
      const newCart = cart.filter(
        (ticket) => ticket.name !== action.payload.name
      );
      return newCart;

    default:
      return cart;
  }
}

export default cartReducer;
