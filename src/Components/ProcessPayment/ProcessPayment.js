import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie1xdHeLq2vYL13VE9s6FtbqG3TzXG4elcdBTVoWmXjQSxJ4NgPPNrYYMguQ9z7onLIxet2RQPDj1nzntSUIi3l007uNL3KIF');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;