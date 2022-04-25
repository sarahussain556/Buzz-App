import React from "react";
import "./Feed.css"
import Contacts from "../Components/Contacts"
import Profilecard from "../Components/Profilecard";
import Middle from "../Components/Middle";
// import Leftsidebar from "../Components/Leftsidebar";
// import NavigationBar from "../Components/Navbar";
// import { Dummyposts } from "../Components/Dummyposts";


const Feed = () => {
  return (
      <>
   
    <div className="feedlayout">
      <Profilecard/> 
     {/* <Leftsidebar/> */}
     {/* <h2>Middle</h2> */}
     <Middle/>
     <Contacts/>
     {/* <Suggestions/> */}
     </div>

      </>
  );
};

export default Feed;