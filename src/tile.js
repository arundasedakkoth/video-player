import React from 'react';
import ReactDOM from 'react';

function Tile(props) {
    return(
        <div>
            <img src={props.img} alt={props.name}></img>
            <h4>{props.title}</h4>
            <p>
                <span>{props.name}</span>
                <span>{props.views} views</span>
                <span>{props.created}</span></p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Tile />
    </div>,
    document.getElementById("tiles")
)

export default Tile