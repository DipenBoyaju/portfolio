import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {
  const { name, email, description } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD,
    }
  })

  try {
    const mailOptions = {
      from: email,
      to: process.env.APP_USER,
      subject: `Query from ${name}`,
      // text: description,
      html: `<b>${email}<br/>${description}</b>`
    }

    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully');

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        name, email
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending email',
    });
  }
}