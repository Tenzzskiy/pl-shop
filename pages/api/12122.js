const nodemailer = require("nodemailer");
import { MAIN_URL, EMAIL_LOG, EMAIL_PASS } from "../../constants/contacts";
import priceToPretty from "../../helpers/priceToPretty";

export default function email(req, res) {
    const type = req.body.type;

    if (!type) {
        res.status(200).json({ success: false });
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
            to: "kazikhan.lezg@gmail.com",
            subject: `Заявка с сайта Фотозоны на 8 марта ${MAIN_URL}`,
            text: "Sent from website",
            html: "",
        };

        if (type === "phone") {
            mailData.html = `
            <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.person.phone}</i> Имя: <i style="color: red;">${req.body.person.name}</i>
            </h1>
          `;
        } else if (type  === "cart") {
            mailData.html = `
                <div style="padding-top: 10px; padding-bottom: 10px">
                    <h2>
                        Получен заказ на номер: <i style="color: red;">${req.body.person.phone}</i> Имя: <i style="color: red;">${req.body.person.name}</i>
                    </h2>
                    <ul>
                        <li><b>название:</b> ${req.body.card.title}</li>
                        <li><b>длительность:</b> ${req.body.card.time}</li>
                        <li><b>тип:</b> ${req.body.card.type}</li>
                        <li><b>сумма:</b> ${priceToPretty(req.body.card.totalSum)}</li>
                    </ul>
                </div>
            `;
        } else {
            res.status(200).json({ success: false });
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.log(err);
                res.status(200).json({ success: false });
            }
        });
    } catch {
        res.status(200).json({ success: false });
    }

    res.status(200).json({ success: true });
}
