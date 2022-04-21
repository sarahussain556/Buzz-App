import React from "react";
import "./Feed.css"
import Suggestions from "../Components/Suggestions";
import Leftsidebar from "../Components/Leftsidebar";
// import Leftsidebar from "../Components/Leftsidebar";
// import Profilecard from "../Components/Profilecard";
// import NavigationBar from "../Components/Navbar";
// import { Dummyposts } from "../Components/Dummyposts";


const Feed = () => {
  return (
      <>
   
   {/* <Profilecard/>
      <h2> This is feed section</h2>
      <Leftsidebar/>
     <div>
       <img src="/images/nightsky.jpg" alt="image" />
     </div> */}
    <div className="feedlayout">
     <Leftsidebar/>
     <h2>Middle</h2>
     <Suggestions/>
     </div>

      </>
  );
};

export default Feed;