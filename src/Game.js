import React, { Component } from 'react';
import game from './Static_Folder/joystick.png';

class Game extends Component {
    render() {
        return (
            <div>
                
                <img src={game} height="250" width="250" />
            </div>
        );
    }
}

export default Game;