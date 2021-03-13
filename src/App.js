import logo from './logo.svg';
import fastForward from './Static_Folder/fast-forward.svg';
import backward from './Static_Folder/backward.png';
import play from './Static_Folder/play-button-arrowhead.png';
import pause from './Static_Folder/pause.png';
import React, {Component}  from 'react';
import './App.css';
import ZingTouch from 'zingtouch';
import Screen from './Screen';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      currentlyChoosenItem:0,
      selectedIndex:-1,
      showMainMenuScreen:true,
    }
  }

  changeActivatedClass(){
    console.log("Hi i am here");
  }

  componentDidMount(){
    var currentAngle = 0;
    var i=0;
    var outerCircle = document.getElementById('outer-circle');
    var listElements = document.getElementsByTagName('li');
    var listLength = listElements.length;
    console.log(listLength);
    if(this.state.showMainMenuScreen){
      var activeRegion = ZingTouch.Region(outerCircle);
    activeRegion.bind(outerCircle,'rotate',(e)=>{
      currentAngle+=e.detail.distanceFromLast;
      if(currentAngle>60 && this.state.showMainMenuScreen){
        currentAngle = 0;
        if(listElements!=undefined && listElements){
          for(;i<listElements.length;i++){
            if(listElements[i].classList.contains('selected-option')){
              break;
            }
          }
          if(i==5){
            i=0;
          }
          if(i<listLength-1){
            listElements[i].classList.remove('selected-option');
            listElements[i+1].classList.add('selected-option');
            this.setState({
              currentlyChoosenItem:i+1
            })
          }
          else if(i==listLength-1){
            listElements[i].classList.remove('selected-option');
            listElements[0].classList.add('selected-option');
            this.setState({
              currentlyChoosenItem:0
            })
          }
        }
       
      }
    });
    var innerButtonArea = document.getElementById('inner-circle');
    var tapArea = ZingTouch.Region(innerButtonArea);
    tapArea.bind(innerButtonArea,'tap',(e)=>{
      console.log(e);
      this.setState({
        selectedIndex:this.state.currentlyChoosenItem,
        showMainMenuScreen:false
      })
    })
    }
      var menuDiv = document.getElementsByClassName('menu')[0];
      var menuRegion = ZingTouch.Region(menuDiv);
      menuRegion.bind(menuDiv,'tap',(e)=>{
        this.setState({
          selectedIndex:-1,
          showMainMenuScreen:true
        });
      })
    
    
    // listElements[this.state.selectedIndex].classList.add('selected-option');
  }
  // selectMenuItem = () =>{
  //   console.log(this.state);
  //   this.setState({
  //     selectedIndex:this.state.currentlyChoosenItem,
  //     showMainMenuScreen:false
  //   },()=>{
  //     console.log(this.state);
  //   });

  // }
  // showMainMenu = ()=>{
  //   console.log('Hey there');
  //   this.setState({
  //     selectedIndex:-1,
  //     showMainMenuScreen:true
  //   })
  // }
  render(){
    return (
      <div>
        <Screen id="screen" props={this.state} ></Screen>
         <div className="outer-div">
        <div id="outer-circle">
          <div className="menu">
            <span>Menu</span>
          </div>
          <div className="fast-forward-button">
              <img src={fastForward}  width="30px" height="30px" />
          </div>
          <div className="back-button">
            <img src={backward} width="30px" height="30px" />
          </div>
          <div className="play-pause">
            <img src={play} width="20px" height="20px" />
            <img src={pause}  width="20px" height="20px" />
          </div>
          <div id="inner-circle"></div>
        </div>
      </div>
      </div>
     
    );
  }
  
}

export default App;
