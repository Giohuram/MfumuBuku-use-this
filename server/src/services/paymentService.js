const { Flexpay } = require('flexpay');

const flexpay = new Flexpay({
  webhookUrl: process.env.FLEXPAY_WEBHOOK_URL, // Assurez-vous d'ajouter également cette variable d'environnement
  apiKey: process.env.FLEXPAY_API_KEY,
  merchant: "ENCLASSE",
});

const pay = async ({ amount, currency, phone, reference }) => {
  if (amount !== '10') {
    throw new Error('Invalid amount. The subscription fee is 10 USD.');
  }

  try {
    await flexpay.pay({
      amount,
      currency,
      phone,
      reference,
    });
  } catch (error) {
    throw new Error('Payment failed');
  }
};

module.exports = {
  pay,
};
