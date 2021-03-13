import logo from './logo.svg';
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
        console.log(e);
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
              <img src="https://www.flaticon.com/svg/vstatic/svg/709/709533.svg?token=exp=1615451434~hmac=a4ce33cf252a006fe4127eba537ef4f2"  width="30px" height="30px" />
          </div>
          <div className="back-button">
            <img src="https://www.flaticon.com/svg/vstatic/svg/854/854183.svg?token=exp=1615451679~hmac=2b0fd753abfa81b2942efbfb1241ac84" width="30px" height="30px" />
          </div>
          <div className="play-pause">
            <img src="https://www.flaticon.com/svg/vstatic/svg/727/727245.svg?token=exp=1615451888~hmac=c4f3c440c73e46ccdcf3826631ca46c2" width="20px" height="20px" />
            <img src="https://www.flaticon.com/svg/vstatic/svg/151/151859.svg?token=exp=1615451937~hmac=7f7f9682a1f6e6f21afea237b4563e3e"width="20px" height="20px" />
          </div>
          <div id="inner-circle"></div>
        </div>
      </div>
      </div>
     
    );
  }
  
}

export default App;
