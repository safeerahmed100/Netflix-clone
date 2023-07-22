import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar(){
     const [show,handleShow]=useState(false);

     const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }

     };

     useEffect(()=>{
     window.addEventListener("scroll",transitionNavbar);
        return()=>
        window.removeEventListener('scroll',transitionNavbar);
});
        
    return(
    <div className={`nav ${show && "nav_black"}`}>
    < div className='nav_icon'>
        <img  className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix logo'></img>

    </div>
    <div className='nav_user'>
        <img className='nav_user_img' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user'></img>

    </div>
    </div> 
    

)}

export default Navbar;