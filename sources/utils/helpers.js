export const getCartFromLocaleStorage = () => {
    let cart = [];

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('store')) {
            const store = JSON.parse(localStorage.getItem('store'));

            if (store && store.length) {
                cart = store;
            }
        }
    }
    console.log(cart)
    return cart;
};