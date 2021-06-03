import React from 'react';

function Cat(props) {
    return (
        <div className="col-md-4">
            <img src={props.cat.image.url} alt={props.cat.name} height="600px" width="600px" ></img>
        </div>
    );
}

export default Cat;