import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Cat from "../Cat/Cat";
import states from '../../Store/States/states';
import config from '../../config';

function CatList(props) {
    const [catList, setCatList] = useState([]);
    useEffect(() => {
        getCats();

        return () => {
            setCats(catList);
        }
    }, [catList]);

    const setCats = (cats) => {
        const action = { type: states.SET_CATS, payload: cats }
        props.dispatch(action);
    }

    const getCats = () => {
        axios.get(`${config.apiUrl}/v1/breeds`, {
            params: {
                "limit": 10
            },
            headers: {
                "x-api-key": config.apiKey
            }
        }).then(response => {
            console.log(response.data);
            setCatList(response.data);
        });
    }

    return (
        <div className="row">
            {
                props.cats.map(cat =>
                    <Cat
                        id={cat.image.id}
                        cat={cat}
                        onClick={() => { return; }}
                    />
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cats: state.catsReducer.cats,
        favorites: state.favoritesReducer.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);