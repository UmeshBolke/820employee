import React from "react";
import { Link, NavLink } from "react-router-dom";

function WelcomeMenu(){
    return(
      <div>
      <nav className="flex items-center justify-between px-5 py-2.5 border-b border-gray-200 bg-blue-500 ">
        <div className="flex items-center">
          <span className="text-3xl font-extrabold text-white">Terrier</span>
        </div>

      

        <div className="flex gap-2">
           <Link to={"/welcome"} class="bg-yellow-400   text-black px-3 py-1 rounded-md   hover:bg-yellow-300 transition">Home</Link>
         <Link to={"/login"} class="bg-yellow-400   text-black px-3 py-1 rounded-md   hover:bg-yellow-300 transition">Login</Link>
        <Link to={"/register"} class="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300 transition">Register</Link>

        </div>
      </nav>
    </div>
    )
}
export default WelcomeMenu