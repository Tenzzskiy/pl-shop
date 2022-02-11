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

    return cart;
};


export async function sendEmail(cards,contactsInfo) {
    const POST_URL = '/api/email'


    const response = await fetch(POST_URL,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({type:"cart",cards:cards,phone:contactsInfo})
    })
    console.log('data',response.json())
}