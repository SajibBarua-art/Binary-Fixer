import React from 'react';

const AboutUs = () => {
    return (
        <div className="my-4" id = "aboutus">
            <h2 className='ms-4'>About <span className="brand-color">Us</span>:</h2>

            <div className="bg-gray-style">
                <h4 className='mb-4'>Your Local Computer Specialist Servicing</h4>
                <p className='fs-5'>Computer Repair is dedicated to providing the best customer service and computer repair available to you. When your Laptop, PC or Mac needs repairing, you won’t have to worry for long! Our technicians are skilled in dealing with all computers and gadgets whether you need home or business computer repairs.</p>
                <ul className='fs-4 fw-bold'>
                    <li>Microsoft Windows PC Computer Repair</li>
                    <li>Apple iMac and Macbook Computer Repair</li>
                    <li>Data Recovery</li>
                    <li>Viruses, Spyware, Adware and Ransom-ware Removal</li>
                    <li>Cracked and Broken Laptop Screen Replacements</li>
                    <li>Charging Issues, Charging Ports Repairs and Replacements</li>
                    <li>Tune Ups, Hardware Repair, Installations</li>
                    <li>Printer Set Ups / Troubleshooting</li>
                </ul>
            </div>

        </div>
    );
};

export default AboutUs;