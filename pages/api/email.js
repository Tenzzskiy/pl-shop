import {dataArray} from "../../components/dataArray/dataArray";

const nodemailer = require("nodemailer");
import {sendEmail} from "../../sources/utils/helpers";


export default function email(req, res) {


    const htmlLi = [];

    for (let index = 0; index < req.body.cards.length; index++){
        const li = `

            <li style="display: flex flex-direction: row; justify-content: center ; align-items: center;">
                <p style="color: #0b2650; ">Название: ${req.body.cards[index].title}</p>
                <p>Время: ${req.body.cards[index].time}</p>
                <p style="color: green">Стоимость: ${req.body.cards[index].changedPrice}</p> 
                 <p style="color: black; ">Количество: ${req.body.cards[index].count}</p>
                 <p style="color: blueviolet; ">Тип : ${
            req.body.cards[index].Switch === 1 ? req.body.cards[index].select1 : 
                req.body.cards[index].Switch === 2 ? req.body.cards[index].select2 : 'Только для светодиодных экранов'
        }</p>
            </li>
        `;
        htmlLi.push(li)
    }

    const html = ` 
               <ul>
                ${htmlLi.join("")}
            </ul>
    `
   const EMAIL_LOG = "info@arenda-plazm77.ru";
  const EMAIL_PASS = "PRt-yu0-r4d";
    // const EMAIL_LOG = 'begliy710@yandex.ru'
    // const EMAIL_PASS = 'Ten22101975'
    const type = req.body.type;

    if (!type) {
        res.status(200).json({success: false});
    }

    try {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.yandex.ru",
            auth: {
                user: EMAIL_LOG,
                pass: EMAIL_PASS,
            },
            secure: true,
        });

        const mailData = {
            from: EMAIL_LOG,
            to: "info@arenda-plazm77.ru",
            subject: `Заявка с сайта Аренда-Плазм77 `,
            text: "Sent from website",
            html: "",
        };

        if (type === "phone") {
            mailData.html = `
            <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone.phone}</i>   </h1>
              <h2>  способ связи с клиентом : <i style="color: blue">${req.body.phone.type} </i></h2>
              <h3>  В корзину ничего не было добавлено, заявка оставлена для рассчета </h3>
          `;
        } else if (type === "cart") {
            `
             
            `
            mailData.html =
                `
                  <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone.phone}</i>   </h1>
              <h2>  способ связи с клиентом : <i style="color: blue">${req.body.phone.type} </i></h2>
              <h3>  Итоговая стоимость : <i style="color: green">${req.body.totalPrice} ₽ </i></h3>
                
                `
                 + html
        } else {
            res.status(200).json({success: false});
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err.length > 0) {

                res.status(200).json({success: false});
            }

        });
    } catch {
        res.status(200).json({success: false});
    }
    res.status(200).json({success: true});
}

