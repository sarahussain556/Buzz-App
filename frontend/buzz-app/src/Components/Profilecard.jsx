import React from 'react'
import "../Components/Card.css"
import Leftsidebar from './Leftsidebar'

function Profilecard() {
  return (
      <>
   
   
   <div className="card cardstyle">
   <img src="https://cdn.pixabay.com/photo/2022/04/11/09/32/glacier-7125359_960_720.jpg"class="coverimg" alt="No image"/>
   <img src="https://cdn.pixabay.com/photo/2022/03/30/15/52/gerbera-7101430_960_720.jpg" class="profileimg" alt="No image"/>
   <div class="card-body"><span><br></br></span>
   <h5 class="card-title mystyle">Username</h5>
   <h5 class="card-title mystyle">Newly recruit to TTN</h5>
   <h5 class="card-text mystyle"></h5>
   <p class="card-text mystyle">
       <strong>234 </strong><span>Views &nbsp;&nbsp;</span> 
       <span className='vertical'>&nbsp;&nbsp;</span>&nbsp;
        <strong>10 </strong><span>Posts</span> 
   </p>
    
   </div> <br></br> <br></br>
   <Leftsidebar/>
</div>

   </>
  )
}

export default Profilecard