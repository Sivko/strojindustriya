export async function POST(request: Request) {

  const {name, email, path, sqCalculate} = await request.json()
  console.log(name, email, path)

  try {
    const nodemailer = require('nodemailer');

    let testEmailAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    let result = await transporter.sendMail({
      from: '"Vlad" <limpopo113@yandex.ru>',
      to: 'strojindustriya-k@yandex.ru',
      subject: 'Заявка с сайта http://strojindustriya-k.ru/',
      // text: 'This message was sent from Node js server.',
      html:
        `Имя:  ${name}<br/>
         Email: ${email}<br/>
         Path: ${path}<br />
         Calculate: ${sqCalculate}м²
         `,
    });

    return Response.json("Ok")
  } catch (err) {
    console.log(err)
    return Response.json("err")
  }
}