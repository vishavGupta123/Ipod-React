import React, { Component } from 'react';
import axios from 'axios';
import youtube from './youtube';
import YouTube from 'react-youtube';

class Songs extends Component {
    constructor()
    {
        super();
        this.state={
            allSongs:[],
            showList:true,
            youtubeId:''
        }
    }
    async componentDidMount(){
        const response = await youtube.get('/search',{
            params:{
                q:"Dua lipa"
            }
        });
        console.log(response.data);
        this.setState({
            allSongs:response.data.items
        })
    }
    handleClick=(id)=>{
        console.log(id);
        this.setState({
            showList:false,
            youtubeId:id.videoId
        },()=>{
            console.log(this.state);
        })
    }
    backButtonClick = ()=>{
        this.setState({
            showList:true,
            youtubeId:''
        },()=>{
            console.log(this.state);
        })
    }
    render() {
    const songs = this.state.allSongs;
        return (
            <div>
                {this.state.showList &&  <div style={{overflow:'scroll'}}>
                    {songs.map((song,key)=>
                        <div key={key} onClick={()=>this.handleClick(song.id)} style={{marginBottom:'20px',display:'flex',alignItems:'center',cursor:'pointer'}}>
                            <img src={song.snippet.thumbnails.medium.url} width="50px" height="50px" />
                            <span style={{fontSize:'large',fontWeight:'bold'}} >
                                {song.snippet.title}
                            </span>
                        </div>
                    )}
                </div> }
               {!this.state.showList && 
               <div>
                   <span onClick={this.backButtonClick} style={{margin:'20',cursor:'pointer'}} >Back</span>
                   <YouTube
                    videoId={this.state.youtubeId}
                    opts={{
                        height:'250',
                        width:'250',
                    }}
                />
               </div>
                
               }

            </div>
        );
    }
}

export default Songs;