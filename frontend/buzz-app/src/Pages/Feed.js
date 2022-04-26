import React from "react";
import "./Feed.css"
import Contacts from "../Components/Contacts"
import Profilecard from "../Components/Profilecard";
import Middle from "../Components/Middle";


const Feed = () => {
  return (
      <>
   
    <div className="feedlayout">
      <Profilecard/> 
     <Middle/>
     <Contacts/>
     </div>

      </>
  );
};

export default Feed;