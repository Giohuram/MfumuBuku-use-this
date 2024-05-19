import React, { useState } from 'react';

const PaymentPage = () => {
  const [phone, setPhone] = useState('');
  const [reference, setReference] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    const amount = '10'; // Montant fixe de 10 USD
    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/pay'; // Construire l'URL de l'API backend
      const response = await fetch(apiUrl, { // Utiliser l'URL de l'API backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          phone,
          reference,
        }),
      });
      const result = await response.json();
      setPaymentStatus(result.isSuccessFull ? 'Success' : 'Failure');
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('Failure');
    }
  };
  

  const styles = {
    paymentPage: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      marginTop: '5rem'
    },
    header: {
      textAlign: 'center',
      color: '#32325d',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: '600',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#6b7c93',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccd0d2',
      borderRadius: '4px',
      fontSize: '16px',
      color: '#32325d',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#5f6d82',
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '12px',
      backgroundColor: '#DC7211',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#000000',
    },
    paymentStatus: {
      textAlign: 'center',
      marginTop: '20px',
      padding: '10px',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: '600',
    },
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
    },
    failure: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
    },
  };

  return (
    <div style={styles.paymentPage}>
      <h1 style={styles.header}>Abonnement</h1>
      <form onSubmit={handlePayment}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Montant (USD)</label>
          <input
            type="text"
            value="10"
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Numéro de téléphone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = styles.input.borderColor)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Référence de paiement</label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = styles.input.borderColor)}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Payer
        </button>
      </form>
      {paymentStatus && (
        <div
          style={{
            ...styles.paymentStatus,
            ...(paymentStatus === 'Success' ? styles.success : styles.failure),
          }}
        >
          {paymentStatus === 'Success'
            ? 'Paiement réussi!'
            : 'Échec du paiement. Veuillez réessayer.'}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
