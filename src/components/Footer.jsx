import React from "react";

function Footer(){
    return(
        <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-gray-700 pb-6">
         
          <div>
            <h2 className="text-4xl font-semibold text-white">Terrier</h2>
            <p className="text-gray-400 text-sm mt-2">
              Building reliable web solutions with passion 💻
            </p>
          </div>

          
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">About</a>
            <a href="#" className="hover:text-blue-400 transition">Services</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p>Email: <span className="text-blue-400">support@terrier.com</span></p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pune, India</p>
          </div>
        </div>

 =
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer

