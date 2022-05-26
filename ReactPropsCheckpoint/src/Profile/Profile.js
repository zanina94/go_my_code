import PropTypes from 'prop-types';

const Profile = (props) =>{

  function handleName(){
    console.log(props.fullName);
    alert(props.fullName);
  }

  return (
    <div onMouseEnter={handleName} >
    <div style={{backgroundColor:'#dac5a1'}} class= "row mt-4">
      <div class="col-2 mt-3 mb-3">
       <img onMouseEnter={handleName} class=" ms-4" style={{width:'180px',height:'200px', borderRadius:'70%'}} src={props.children} alt="img"/>
      </div>
      <div style={{fontFamily:'cambria'}} class="col-6 ps-0 ms-2 pt-4 mt-5 fs-5">
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Full Name:</b><span> {props.fullName}</span><br/>
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Bio:</b><span> {props.bio}</span><br/>
          <b style={{color:"#2c7996", textDecoration:'underline'}}>Profession:</b><span> {props.profession}</span>
      </div>  
    </div>
    </div>

  ) 
}
Profile.defaultProps={
 fullName : "full name",
 bio : "bio",
 profession : "profession"
}

Profile.propTypes={ 
    fullName: PropTypes.string.isRequired,   
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}

export default Profile