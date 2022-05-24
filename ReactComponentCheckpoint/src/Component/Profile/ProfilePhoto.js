import profilePhoto from "../../imageInSrc.jpg"

 const ProfilePhoto = () => {
    return(
        <>
         <img  style={{width:'150px', height:'180px'}} src={profilePhoto} alt="photoProfile"/>
        </>
    )
}
export default ProfilePhoto;