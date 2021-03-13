import React, { Component } from 'react';
import playlist from './Static_Folder/playlist.png';

class Playlist extends Component {
    render() {
        return (
            <div>
                
                <img src={playlist} width="250" height="250" />
            </div>
        );
    }
}

export default Playlist;