import React from "react";
import Footer from "./Footer";
import WelcomeMenu from "./WelcomeMenu";

function Welcome(){
    return(
        <div>
        <WelcomeMenu />
    
<div >
  <img 
    src="Employee-Management-System.png" 
    alt="Banner Image"
    class="w-full mt-1 h-auto object-cover rounded-lg shadow-md"
  />
</div>

      <Footer />
    </div>
    )
}
export default Welcome