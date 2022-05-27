//import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  state={
    fullName: "full name",
    bio: "bio",
    profession: "profession",
    imgSrc: "https://pbs.twimg.com/profile_images/946103870991884288/j0rhhR8c.jpg",
    isShown: false,
    seconds: 0
  }
  handleClick=()=>{
    
    if(this.state.isShown===true)
    this.setState({isShown: false})
    else
    this.setState({isShown: true})
  }

componentDidMount(){
  setInterval(()=>{this.setState({seconds: this.state.seconds+1})},1000)
}

  render(){
    if( this.state.isShown === false){
  return (
    <>
      <header style={{height:'50px' , backgroundColor:'#282c34'}} class="text-center text-light fs-1 fw-bolder">
        {this.state.seconds} seconds have elapsed since mounting.
      </header>
        <button style={{marginLeft:'47%', marginTop:'10px'}} class="btn btn-primary" onClick={this.handleClick}>Show Profile</button>
    </>
  );}
  else{
    return (
      <>
      <header style={{height:'50px' , backgroundColor:'#282c34'}} class="text-center text-light fw-bolder">
        {this.state.seconds} seconds have elapsed since mounting.
      </header>
    <div style={{backgroundColor:'#ecf0f1'}} class= "row">
      <div style={{marginLeft:"20px"}} class="col-2 mt-3 mb-3">
       <img class=" ms-5" style={{width:'180px',height:'200px', borderRadius:'70%'}} src={this.state.imgSrc} alt="img"/>
      </div>
      <div style={{fontFamily:'calibri', fontSize:'20px'}} class="col-6 ps-0 ms-2 pt-4 mt-5 fs-5">
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Full Name:</b><span> {this.state.fullName}</span><br/>
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Bio:</b><span> {this.state.bio}</span><br/>
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Profession:</b><span> {this.state.profession}</span>
      </div>  
    </div>
    <div>
    <button style={{marginLeft:'47%', marginTop:'10px'}} class="btn btn-danger" onClick={this.handleClick}>Hide Profile</button>
    </div>
    </>
    );
  }
  
  }
}
export default App;
