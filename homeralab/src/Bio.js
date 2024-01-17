import React from "react";

function Bio({ id }) {
    
    return (
        <div className="bio" id={id}>
            <img src="/face.jpg" alt="My face" className="portrait"></img>
            <p> I am a senior at Bowdoin College, originally from South Portland, ME. 
                I am interested in full stack development and web design. 
                I enjoy film photography and playing and watching basketball.</p>
        </div>
    );
}

export default Bio;