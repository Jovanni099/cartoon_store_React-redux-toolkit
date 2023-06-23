import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import preloader from '../assets/images/preloader.svg';
import { Preloader } from '../common/Preloader';
import { CartoonItem } from '../components/CartoonItem/CartoonItem.jsx';
import './HomePage.less'

export const HomePage = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const resp = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
        const json = await resp.json();
        setData(json);
    }

    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <Preloader />
    }
    console.log(data);
    return (
        <div className='home-page'>
            {data.map(cartoon => {
                return <CartoonItem cartoon={cartoon} key={cartoon.id} />
            })}
        </div>
    )
}

let cartoon = {
    "title": "Spongebob Squarepants",
    "year": 1999,
    "creator": [
        "Stephen Hillenburg"
    ],
    "rating": "TV-Y",
    "genre": [
        "Comedy",
        "Family"
    ],
    "runtime_in_minutes": 23,
    "episodes": 272,
    "image": "https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7",
    "id": 1
};