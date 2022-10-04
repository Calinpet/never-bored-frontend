import React from 'react';
import NAV from "./components/Nav";
import Footer from "./components/Footer";

function Profile(props){
    const id = props.match.params.id;
    const profile = props.profile;
    const user = profile.find(p => p._id === id);
    return(
        <div>
        <NAV/>
        <h1>Profile Page</h1>
        <img src={user.image} />
        <h3>About Us: {user.about}</h3>
        <Footer/>
    </div>
    );
};

export default Profile;