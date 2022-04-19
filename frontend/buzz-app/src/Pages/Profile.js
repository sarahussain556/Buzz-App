import React from "react";
import "./Profile.css";
import {CardGroup, CardImg, Card, Button} from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        {/* profile section */}
        <div className="col-8  pt-4" >
        <CardGroup className="shadow " >
            <Card>
              <Card.Body className="p-0" >
                  <CardImg  variant="top" style = {{height: "16rem", width: "100%"}} src="./images/profilebg.jpg" />
                  <div  className="rounded float-left m-4" style={{transform:"translateY(-80px)"}}>
                      <img className="little-profile " src = "./images/nouser.jpg"/>
                      <div className="">
                <h2>username</h2>
                <h4> desciption</h4>
              </div>
              <div className> 
                <Button variant="primary">ADD FRIEND</Button>
                <Button style={{marginLeft:"1rem"}} variant="outline-danger">View Website</Button>
              </div>
                  </div>
          
              </Card.Body>
              <Card.Text>
              
              
              </Card.Text>
            </Card>
          </CardGroup>
     
        </div>
        <div className="col-4 pt-4">
          <div className="shadow p-2" style={{backgroundColor:"#fff", borderRadius:"10px"}}>
          <h4 className="m-2 "> Suggestions</h4>

          
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;