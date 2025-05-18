import React from "react";
import { Photos } from "./_components/Photos";
import { Hero } from "./_components/Hero";
import ContactUs from "./_components/contactUs";
import About from "./_components/About";
import { OurProduct } from "./_components/OurProduct";
//ss

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <OurProduct/>
      <Photos/>
      <ContactUs/>
    </main>
   
  );
}
