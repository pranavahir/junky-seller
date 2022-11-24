const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ahir.pranav9@gmail.com',
           pass: 'jprgyhekivcxczrl'
       }
   });

const SendMail = async(email,html) => {
    const mailOptions = {
        from: 'ahir.pranav9@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'OTP From Waste Management', // Subject line
        html: html// plain text body
      };
     const sendmail = await transporter.sendMail(mailOptions);
}
module.exports = {
    SendMail
}