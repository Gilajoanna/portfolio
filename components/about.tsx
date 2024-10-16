"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In june 2023 I graduated with a bachelor degree in{" "}
        <span className="font-medium">Frontend development</span>. I am since{" "}
        august 2023 working fulltime as an <span className="font-medium">iOS developer</span> 
        at Beining&Bogen.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. My core stack
        is{" "} <span className="underline">Swift, SwiftUI, UIKit and Core Data</span> for{" "}
        <span className="font-medium">
        mobile development.</span> For <span className="font-medium">web development </span> it is React,{" "}
        <span className="underline">Next.js, Node.js, and MongoDB.</span>{" "}
        I am also familiar with TypeScript, Flutter and Firebase as cloud service. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy music, working out, hiking{" "}
         and playing video games. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">yoga and pilates</span>. I'm also
        trying to discover my painting skills even more through some art projects at home.
      </p>
    </motion.section>
  );
}
