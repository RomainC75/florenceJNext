import nodemailer from 'nodemailer'

const sendEmail = (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAILGMAIL,
      pass: process.env.EMAILGMAIL_PASS,
    },
  })

  transporter
    .sendMail({
      from: process.env.EMAILGMAIL,
      to: email,
      subject: subject,
      text: text,
      //   html: html,
    })
    .then((info) => console.log('-->email sent :-) !!', info))
    .catch((error) => console.log('-->nodemailer error : ', error))
}

export default sendEmail
