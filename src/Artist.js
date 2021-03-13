import React, { Component } from 'react';
import artist from './Static_Folder/artist.png';

class Artist extends Component {
    render() {
        return (
            <div>
              
                <img src={artist}  height="250" width="250" />
            </div>
        );
    }
}

export default Artist;