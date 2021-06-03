import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import states from '../../Store/States/states';
import config from '../../config';

function CatList(props) {
    const [catList, setCatList] = useState(props.cats);

    useEffect(() => {
        getCats();

        return () => {
            setCatList(catList);
        }
    }, []);

    const setCats = (cats) => {
        const action = { type: states.SET_CATS, payload: cats }
        props.dispatch(action);
    }

    const getCats = () => {
        axios.get(`${config.apiUrl}/v1/breeds`, {
            params: {
                "limit": 9
            },
            headers: {
                "x-api-key": config.apiKey
            }
        }).then(response => {
            setCats(response.data);
        });
    }

    return (
        <div className="row">
            {
                props.cats.map(cat =>
                    <div className="col-md-4" key={cat.name} style={{marginBottom: "30px"}}>
                        <a href={"/cat?q="+cat.id}>
                            <img src={cat.image.url} alt={cat.name} height="600px" width="600px" ></img>
                        </a>
                    </div>
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