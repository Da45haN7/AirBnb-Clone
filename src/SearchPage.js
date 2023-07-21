import React from "react";
import "./searchpage.css"
import Button from '@mui/material/Button';
import SearchResult from "./SearchResult";

import { useState, useEffect } from "react";

export default function SearchPage(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=500&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&refine.country=United%20States&refine.city=Beverly%20Hills`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((actualData) => {
            setData(actualData.records);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          })
      }, [])

    return(
        <div className="searchPage">
            <div className='searchPage__info'>
                <p>62 stays · 26 July to 30 July · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                {data.map((content) => (
                    <SearchResult
                        Img={content.fields.xl_picture_url}
                        location={content.fields.street}
                        title={content.fields.name}
                        description={content.fields.description}
                        star={content.fields.review_scores_value}
                        total={content.fields.price}
                        city={content.city}
                    />
                ))}
            </div>
        </div>
    )
}