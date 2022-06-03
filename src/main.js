import React from 'react';

// import Tile from './tile.js';
// import tiledetails from './components/tiledetails.json'

// const detail = tiledetails;

export default class Vplayer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         vurl: ''
    //     })
    // }
    // onClick(props) {
    //     this.setState({
    //         vurl: detail.url
    //     })
    // }
    // createTile(tile) {
    //     return <Tile 
    //     name={tile.name}
    //     />
    // }
    render() {
        return(
            <div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2qkYY3izNdc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                {/* <div id="tiles">
                    {detail.map(this.createTile)}
                </div> */}
            </div>
        )
    }
}