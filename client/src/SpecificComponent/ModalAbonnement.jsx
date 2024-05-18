import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/userContext';
import axios from 'axios';
import '../Styles/ModalAbonnement.css';

const ModalAbonnement = () => {
  const { user } = useContext(UserContext);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/subscriptions/${user.id}`);
        setSubscription(response.data);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    };
  
    fetchSubscription();
  }, [user.id]);

  return (
    <div className="subscription">
      <h2>Subscription</h2>
      {subscription ? (
        <div>
          <p>Type: {subscription.type}</p>
          <p>Start Date: {subscription.startDate}</p>
          <p>End Date: {subscription.endDate}</p>
        </div>
      ) : (
        <p>No subscription found.</p>
      )}
    </div>
  );
};

export default ModalAbonnement;
