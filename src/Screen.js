import React, { Component } from 'react';
import './App.css';
import Songs from './Songs';
import Albums from './Albums';
import Artist from './Artist';
import Playlist from './Playlist';
import Game from './Game';

class Screen extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="screen">
                {this.props.props.showMainMenuScreen && this.props.props.selectedIndex <0 && <div>
                <span className="heading">IPod.js</span>
                <ul style={{listStyleType:'none',height:'100%'}}>
                    <li>Songs</li>
                    <li className="selected-option">Albums</li>
                    <li>Artists</li>
                    <li>Playlists</li>
                    <li>Games</li>
                </ul>
            </div> }
            { !this.props.props.showMainMenuScreen  &&  this.props.props.selectedIndex == 0 && <Songs></Songs> }
            { !this.props.props.showMainMenuScreen && this.props.props.selectedIndex == 1 && <Albums></Albums> }
            { !this.props.props.showMainMenuScreen && this.props.props.selectedIndex == 2 && <Artist></Artist> }
            { !this.props.props.showMainMenuScreen && this.props.props.selectedIndex == 3 && <Playlist></Playlist> }
            { !this.props.props.showMainMenuScreen && this.props.props.selectedIndex == 4 && <Game></Game>}
            <h1>
                {this.props.selectedIndex}
            </h1>
            </div>
            
        );
    }
}

export default Screen;