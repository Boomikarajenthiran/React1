import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-400 p-10">

           <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h2 className="text-2xl font-black mb-5">
          Get In Touch
        </h2>

        <input className="w-full border p-3 rounded mb-2" type="text"placeholder="Enter your name"/>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded mb-4"
        />

        

        <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
          Send Message
        </button>

      </div>

    </div>
  );
};

export default Contact;