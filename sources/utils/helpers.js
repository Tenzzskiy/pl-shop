export const getCartFromLocaleStorage = () => {
    let cart = [];

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('store')) {
            const store = JSON.parse(localStorage.getItem('store'));

            if (store.cart.itemsInCart && store.cart.itemsInCart.length) {
                cart = store.cart.itemsInCart;
            }
        }
    }

    return cart;
};