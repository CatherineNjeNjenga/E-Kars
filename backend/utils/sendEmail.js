const nodemailer = require("nodemailer");
const Transport = require('nodemailer-brevo-transport');

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport(new Transport({
    apiKey: process.env.BREVO_API_KEY
    // service: process.env.EMAIL_SERVICE,
    // port: process.env.EMAIL_PORT,
    // secure: process.env.EMAIL_STATUS,
    // auth: {
      // user: process.env.EMAIL_USERNAME,
      // pass: process.env.EMAIL_PASSWORD,
    // },
  }));

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
