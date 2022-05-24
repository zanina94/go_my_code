 import Address from "./Component/Profile/Address";
 import ProfilePhoto from "./Component/Profile/ProfilePhoto";
 import FullName from "./Component/Profile/FullName";

// import image from "./imageInSrc.jpg"
// import "./style.css"

function App() { 
  // let imageStyle={
  //   width:'800px',
  //   height:'600px'
  // }
  return (
    <>
    <span class="row">
    <span style={{ marginLeft:'20px', marginTop:'20px'}} class="col-2 pe-0">
      <ProfilePhoto/>
      </span>
      <span class="col-5 p-0">
      <span style={{ marginTop:'20px'}} class="row">
      <FullName/>
      </span>
      <span style={{ marginTop:'10px'}} class="row">
      <Address/>
      </span>
      </span>
      </span>
    
    </>
  )  
}

export default App
