import React, { Component } from 'react';
import "./Login.css";
import Avatar from "./Formimg/avatar.svg";
import Bg from "./Formimg/bg.svg";
import Wavess from "./Formimg/wavess.jpg";
import SageLogo from "./Formimg/sageLogo.ico";

const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

class Logincomponent extends Component {
   
  render() {
      return (
    <div>
      <div >
        {/* <h1 className="head">Sage Training Institute</h1> */}
      
      <img class="wave" src={Wavess} />
      <div class="container1">
        <div class="img">
          <img src={Bg} />
        </div>
        <div class="login-content">
          <form action="" class="forms">
            <img src={Avatar} class="form-icon"/>
            <h2 class="title">Sign-In</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                {/* <h5>Username</h5> */}
                <input type="text" class="input" placeholder="Username" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                {/* <h5>Password</h5> */}
                <input type="password" class="input" placeholder="Password" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" class="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
 
</div>


);
}
}
export default Logincomponent;
