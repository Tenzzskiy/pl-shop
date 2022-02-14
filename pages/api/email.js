const nodemailer = require("nodemailer");



export default function email(req, res) {
    const EMAIL_LOG= 'begliy710@yandex.ru'
    const EMAIL_PASS = 'Ten22101975'
    const type = req.body.type;
    console.log('done',req.body)
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
            to: 'begliy710@yandex.ru',
            subject: `Заявка с сайта Фотозоны на 8 марта `,
            text: "Sent from website",
            html: "",
        };

        if (type === "phone") {
            mailData.html = `
            <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone}</i>
            </h1>
          `;
        } else if (type  === "cart") {
            console.log('cart',req.body.cards);
            mailData.html = `
                    <h2>
                            Получен заказ на номер: <i style="color: red;">${req.body.phone}</i> 
                    </h2>
            ${req.body.cards.map((elem) => {
                console.log('element',elem)
                return(
                    <div style="padding-top: 10px; padding-bottom: 10px">
                        
                    <ul>
                        <li><b>название:</b> ${elem.title}</li>
                        <li><b>длительность:</b> ${elem.time}</li>

                        <li><b>сумма:</b> ${elem.changedPrice}</li>
                    </ul>
                </div>
                )
                   
                }
            
            )}

`
        } else {
            res.status(200).json({ success: false });
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err.length > 0) {

                res.status(200).json({ success: false });
            }
            console.log('mail',mailData.html)
        });
    } catch {
        res.status(200).json({ success: false });
    }
    res.status(200).json({ success: true });
}
