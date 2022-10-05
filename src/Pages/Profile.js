import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";

function Profile(props){
    const id = props.match.params.id;
    const profile = props.profile;
    const user = profile.find(p => p._id === id);
    return(
        <div>
        <Navbar/>
        <h1>Profile Page</h1>
        <img src={user.image} />
        <h3>About Us: {user.about}</h3>
        <Footer/>
    </div>
    );
};

export default Profile;