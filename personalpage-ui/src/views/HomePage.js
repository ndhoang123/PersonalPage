import QuoteBox from '../components/QuoteBox';
import React, { useState, useEffect } from 'react';

function HomePage(){
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const result = await response.json();
            setData(result); // Assuming the server responds with JSON data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchData();
    }, []);

    console.log(data)

    return (
        <QuoteBox content={data}/>
    )
}

export default HomePage;