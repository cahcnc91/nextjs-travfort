const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const info = await transporter.sendMail({
        from: `${req.body.name} <${req.body.email}>`, // sender address
        to: "camilanierocosta@hotmail.com, travfort@ig.com.br", // list of receivers
        subject: "Orcamento Travfort", // Subject line
        text: req.body.message, // plain text body
        html: req.body.message, // html body
      });
      console.log("Message sent: %s", info.messageId);

      return res.json({ ok: true });
    } catch (err) {
      console.log(err);
      res.json({ ok: false });
    }
  } else {
    // Handle any other HTTP method
  }
};
