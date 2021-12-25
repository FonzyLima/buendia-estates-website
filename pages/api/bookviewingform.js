// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.CONTACT_FORM)
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  VIEWING REQUEST
  Name: ${body.yourName}
  Facebook: ${body.fbdetails}
  Email: ${body.email}
  Age: ${body.age}
  Gender: ${body.gender}
  Occupation: ${body.occupation}

  Preferred Location: ${body.prefLocation}
  Preferred Property Type: ${body.prefPropType}
  Budget: ${body.yourBudget}
  Preferred Schedule: ${body.prefSched}

  Additional Notes: ${body.addNotes}

  `;

  const data = {
    to: 'bahaybuendia@gmail.com',
    from: 'bahaybuendia@gmail.com',
    subject: '[WEBSITE: BOOK A VIEWING]',
    text: message,
  };

  mail.send(data);
  console.log(body);
  res.status(200).json({ name: 'pk' })
}
