import React from "react";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import hero_img from "../public/hero_img.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's Mithil Hassan",
      "Interactive Frontend Web Developer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="rounded-full mx-auto"
        height={256}
        width={256}
        objectFit="cover"
        objectPosition="top"
        src={hero_img}
        alt="#"
      />
      <div className="z-20">
        <h2 className="text-sm md:text-lg uppercase text-[#808080] pb-2 tracking-[8px] sm:tracking-[15px]">
          Fullstack Developer
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
