const { Flexpay } = require('flexpay');

const flexpay = new Flexpay({
  webhookUrl: "VOTRE_URL_DE_WEBHOOK",
  apiKey: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzM3NzExMDg0LCJzdWIiOiI5MmExOTA5ZWIwMWE3ZGU3OGQwZmQwNTU0MDA3MWI1MiJ9.45Gkzm121LEeWkMGPRRxnzCQYJ4gWEoWx59l9521CaE",
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
