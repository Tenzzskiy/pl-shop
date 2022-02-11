const nodemailer = require("nodemailer");



export default function email(req, res) {
    const EMAIL_LOG= 't3nzzskiy0@yandex.ru'
    const EMAIL_PASS = 'Ten22101975'
    const type = req.body.type;
    console.log('done',req.body)
    // if (!type) {
    //     res.status(200).json({ success: false });
    // }

    try {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: EMAIL_LOG,
                pass: EMAIL_PASS,
            },
            secure: true,
        });

        const mailData = {
            from: EMAIL_LOG,
            to: "t3nzzskiy0@yandex.ru",
            subject: `Заявка с сайта Фотозоны на 8 марта `,
            text: "Sent from website",
            html: "1111111111",
        };

        // if (type === "phone") {
        //     mailData.html = `
        //     <h1 style="padding-top: 10px; padding-bottom: 10px">
        //         Получен заказ на номер: <i style="color: red;">${req.body.phone}</i>
        //     </h1>
        //   `;
        // } else if (type  === "cart") {
        //     console.log('cart',req.body);
        //     mailData.html = `
        //
        //     <h1>
        //        213123213123
        //     </h1>`
        // } else {
        //     // res.status(200).json({ success: false });
        // }

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
