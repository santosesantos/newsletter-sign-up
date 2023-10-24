"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import EmailForm from './components/EmailForm';
import ListItem from './components/ListItem';

export default function Home() {
  const [imgRsrc, setImgRsrc] = useState("./assets/illustration-sign-up-mobile.svg");
  useEffect(() => {
    window.innerWidth >= 640 ? setImgRsrc("./assets/illustration-sign-up-desktop.svg") : setImgRsrc("./assets/illustration-sign-up-mobile.svg");
  }, [window.innerWidth]);

  return (
    <>

      <main className="flex flex-col-reverse sm:flex-row gap-8
      w-screen h-screen sm:w-7/12 sm:h-fit
      sm:p-4 
      bg-white rounded-3xl">

        <div className="flex flex-col justify-center gap-4
          sm:w-[55%]
          p-4 sm:pl-8">
          <h1 className="text-[2.5rem] font-bold">Stay updated!</h1>

          <h2>Join 60,000+ product managers receiving monthly updates on:</h2>

          <ul className="flex flex-col gap-2">
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem>And much more!</ListItem>
          </ul>

          <EmailForm />
        </div>

        <img
          src={imgRsrc}
          className="w-full sm:w-[45%] sm:h-full sm:object-cover rounded-xl" />

      </main>

      <footer className="w-full
        p-2
        bg-white">
        <p className="text-[0.8rem]">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a className="text-blue-600" href="https://github.com/santosesantos" target="_blank">@santosesantos</a>.
        </p>
      </footer>
    </>
  );
}
