const { Flexpay } = require('flexpay');

const flexpay = new Flexpay({
  webhookUrl: 'http://localhost:3005/api/webhook',
  apiKey: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzM3NzExMDg0LCJzdWIiOiI5MmExOTA5ZWIwMWE3ZGU3OGQwZmQwNTU0MDA3MWI1MiJ9.45Gkzm121LEeWkMGPRRxnzCQYJ4gWEoWx59l9521CaE',
  merchant: 'ENCLASSE',
});

exports.pay = async (req, res) => {
  const { amount, phone, reference } = req.body;

  // Vérifier que le montant est de 10 USD
  if (amount !== '10') {
    return res.status(400).json({ isSuccessFull: false, message: 'Le montant de l\'abonnement doit être de 10 USD.' });
  }

  try {
    const payment = await flexpay.pay({
      amount: amount.toString(),
      currency: 'USD',
      phone,
      reference,
    });
    res.json({ isSuccessFull: payment.isSuccessFull });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ isSuccessFull: false });
  }
};

exports.webhook = (req, res) => {
  const paymentResult = Flexpay.parse(req.body);
  console.log('Paiement :', paymentResult.isSuccessFull);
  res.sendStatus(200);
};
