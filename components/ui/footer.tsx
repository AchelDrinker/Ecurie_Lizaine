"use client"
import React from "react";
import Link from "next/link";
import Logo from './logo'


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Logo />
        <p className="text-slate-600">Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;