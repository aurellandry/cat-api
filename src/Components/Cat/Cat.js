import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import queryString from 'query-string';

function Cat() {
    const [cat, setCat] = useState({});
    const [imgUrl, setImgUrl] = useState("");
    let urlParams = queryString.parse(window.location.search);

    useEffect(() => {
        getCatByName();
    }, []);

    const getCatByName = () => {
        axios.get(`${config.apiUrl}/v1/images/search`, {
            params: {
                "breed_ids": urlParams.q
            },
            headers: {
                "x-api-key": config.apiKey
            }
        }).then(response => {
            setImgUrl(response.data[0].url);
            setCat(response.data[0]["breeds"][0]);
        });
    }
    return (
        <div className="col-md-4">
            <img src={imgUrl} alt={cat.name} height="600px" width="600px" ></img>

            <br/><br/>

            <p><strong>Nom : </strong> {cat.name}</p>

            <br/><br/>

            <p><strong>Origine : </strong> {cat.origin}</p>

            <br/><br/>

            <p><strong>Description : </strong> {cat.description}</p>

            <p><strong>Lien wikipedia : </strong> <a href={cat.wikipedia_url} target="_blank" rel="noreferrer">{cat.wikipedia_url}</a></p>

            <br/><br/>
        </div>
    );
}

export default Cat;