import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const axios = require('axios').default;

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            img: imageURL,
            price: data.price
        };

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    alert('Your submit service is added to the shop.')
                }
            })
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '627706977070f1459448d21e74150c37');
        imageData.append('image', event.target.files[0]);

        setLoadingSpinner(true);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setIMageURL(response.data.data.display_url);
                setLoadingSpinner(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <h1 className='my-3 ml-2 component-color'>Add a service:</h1>
            <div className='form-card'>
                <h2 className='text-center brand-color mb-4'>Give all service information below</h2>
                <form className='d-flex justify-content-center flex-wrap form-style' onSubmit={handleSubmit(onSubmit)}>
                    <input className='m-2' name="name" defaultValue="Service Name" {...register("name")} />
                    <br />
                    <input className='m-2' name="price" defaultValue="Service Price" {...register("price")} />
                    <br />
                    <div className='choose-image add-image-box m-2'>
                        <h5 className='p-2'>Add a Image file below: </h5>
                        <input {...register("picture")} type="file" name="picture" onChange={handleImageUpload} />
                    </div>
                    <br />
                    {
                        loadingSpinner && <div className="d-flex justify-content-center m-2">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        </div>
                    }
                    <br />
                    <input style={{height: '50px'}} className='btn btn-success m-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;