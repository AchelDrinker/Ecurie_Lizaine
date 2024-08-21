"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => setShowPopup(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
  
    if (formElement) {
      const fullname = formElement.fullname.value;
      const email = formElement.email.value;
      const subject = formElement.subject.value;
      const message = formElement.message.value;
  
      try {
        const response = await fetch('/api/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname,
                email,
                subject,
                message,
            }),
        });
  
        if (response.ok) {
          console.log("Email envoyé avec succès !");
          formElement.reset();
          setShowPopup(true);
        } else {
            console.log("Erreur lors de l'envoi de l'email");
        }
      } catch (error) {
          console.error("Une erreur s'est produite lors de l'envoi de l'email", error);
      }
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-3 relative pb-12"
    >
      {/* Pop-up */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#121212] p-10 flex flex-col items-center relative rounded-lg">
            <img src="/images/email_sent.png" alt="email_sent" width={64} className="mb-4"/>
            <h2 className="text-center text-white">Ton email a été envoyé</h2>
            <div className="flex justify-center mt-4">
              <button 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 hover:bg-slate-200 text-white"
                onClick={closePopup}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
      
        
      <div className="z-10"></div>       
        
        <div className="z-10">
          <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
              <label
                htmlFor="fullname"
                className="text-black block mb-2 text-sm font-medium"
              >
                Ton nom
              </label>
              <input
                type="text"
                id="fullname"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Ice du Canal"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Ton email
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="lamascotte@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Objet
              </label>
              <input
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Juste un petit message..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Salut, je voulais te demander ..."
              />
            </div>
            <button
            type="submit"
            className="text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-r from-indigo-500 via-blue-900 to-indigo-500 hover:opacity-75 transition duration-200 ease-in-out text-center"
          >
            Envoi
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;