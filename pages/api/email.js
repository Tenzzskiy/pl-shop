import {dataArray} from "../../components/dataArray/dataArray";

const nodemailer = require("nodemailer");
import {sendEmail} from "../../sources/utils/helpers";


export default function email(req, res) {
    const title = req.body.cards.map((elem) => {
            return (
                `
           <li>
           <p>
        Название ${elem.title}
            </p>
           
            </li>
           `
            )
        }
    )

    const htmlLi = [];

    for (let index = 0; index < req.body.cards.length; index++){
        const li = `

            <li>
                <p>название: ${req.body.cards[index].title}</p>
                <p>Время: ${req.body.cards[index].time}</p>
                <p>Стоимсоть: ${req.body.cards[index].changedPrice}</p>  
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
            to: 'begliy710@yandex.ru',
            subject: `Заявка с сайта Фотозоны на 8 марта `,
            text: "Sent from website",
            html: "",
        };

        if (type === "phone") {
            mailData.html = `
         
          `;
        } else if (type === "cart") {
            `
             
            `
            mailData.html =
                `
                  <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone}</i>
            </h1>
                `
                 + html
        } else {
            res.status(200).json({success: false});
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err.length > 0) {

                res.status(200).json({success: false});
            }
            console.log('mail', mailData.html)
        });
    } catch {
        res.status(200).json({success: false});
    }
    res.status(200).json({success: true});
}

