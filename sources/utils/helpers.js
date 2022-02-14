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


export async function sendEmail(cards,contactsInfo,type,totalPrice) {
    const POST_URL = '/api/email'


    const response = await fetch(POST_URL,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({type:type,cards:cards,phone:contactsInfo,totalPrice:totalPrice})
    })

}
export const translit = (word) => {
    const converter = {
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'g',
        д: 'd',
        е: 'e',
        ё: 'e',
        ж: 'zh',
        з: 'z',
        и: 'i',
        й: 'y',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ф: 'f',
        х: 'h',
        ц: 'c',
        ч: 'ch',
        ш: 'sh',
        щ: 'sch',
        ь: '',
        ы: 'y',
        ъ: '',
        э: 'e',
        ю: 'yu',
        я: 'ya',
    };

    const lowerWord = word.toLowerCase();

    let answer = '';
    for (let i = 0; i < lowerWord.length; i += 1) {
        if (converter[lowerWord[i]] === undefined) {
            answer += lowerWord[i];
        } else {
            answer += converter[lowerWord[i]];
        }
    }

    answer = answer.replace(/[^-0-9a-z]/g, '-');
    answer = answer.replace(/[-]+/g, '-');
    answer = answer.replace(/^\\-|-$/g, '');
    return answer;
};