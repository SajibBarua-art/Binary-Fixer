import React from 'react';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import CauseDetails from '../CauseDetails/CauseDetails';

const causes = [
    {
        id: "1",
        img: faUserTie,
        name: "Experienced Professionals",
        description: "We pride ourselves on being a professional computer repair facility"
    },
    {
        id: "2",
        img: faLaptopHouse,
        name: "Expert Technical Skills",
        description: "Our technical experts will get you honest, reliable and professional help"
    },
    {
        id: "3",
        img: faComments,
        name: "Trustworthy See Reviews",
        description: "Our business has been built on trust and customer satisfaction"
    },
    {
        id: "4",
        img: faHandshake,
        name: "Friendly Service",
        description: "Most of the services below are repaired within hours, and in most cases same day!"
    },
    {
        id: "5",
        img: faAward,
        name: "Excellent Reputation",
        description: "We have built our reputation on the attention to details and our loyal service to our customers"
    },
    {
        id: "6",
        img: faStethoscope,
        name: "Affordable Diagnosis",
        description: "We will diagnose your issues, provide you with options and give you a price for FREE!"
    }
]

const WhyChooseUs = () => {
    return (
        <div className='my-5 text-center p-4'>
                <h1>Why Choose <span className='brand-color'>Us</span> ?</h1>
                <p className='fs-5 mb-4'>There are many valid reasons why you should choose us to take care of your valuable device</p>
                <div className="d-flex flex-wrap justify-content-center" style={{margin: 'auto'}}>
                    {
                        causes.map(causeData => <CauseDetails key={causeData.id} causeData={causeData}></CauseDetails>)
                    }
                </div>
        </div>
    );
};

export default WhyChooseUs;