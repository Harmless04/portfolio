"use client";
import React from 'react';
import SectionHeading from './section-heading';
import {motion} from "framer-motion";

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.175}}
        >
        <SectionHeading> About me</SectionHeading>
        <p className='mb-3  '>
        Hi everyone i'm an Under graduate student in Model Engineering College,Thrikakara pursuing{" "}
        <span className="font-medium">Computer science Engineering</span>, I decided to pursue my
        passion for programming after doing Bio-mathematics in my pre degree and delved into web development taking inspiration from my seniors and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Three.js
        </span>
        . I am also familiar with TypeScript and keen interest in cryptography. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">role as an intern</span> in a software development firm.
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching and playing football
        , watching anime, and playing video games. I also enjoy{" "}
        <span className="font-medium">learning && understanding new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">the history of metal bands</span>. I'm also a part 
        of an online book club on discord

        </p>

    </motion.section>
  )
}

