"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  // to track the visibility of the section we are using the useInView hook. The ref is used to track the visibility of the section and inView is a boolean that tells us if the section is in view or not.
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Since we do not want to set state when rendering we need to use the hook useEffect to synchronize the active section with the current section in view.
  // If invView is true we set the active section to "About".
  // We also check if the time of the last click is more than 1 second ago. This is to prevent the active section from stopping by all links in between when the user clicks on a link.
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
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
        august 2023 working fulltime as an{" "}
        <span className="font-medium">iOS developer</span>
        at Beining&Bogen.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. My core stack is{" "}
        <span className="underline">
          Swift, SwiftUI, UIKit, Firebase and Core Data
        </span>{" "}
        for <span className="font-medium">mobile development.</span> For{" "}
        <span className="font-medium">web development </span> it is Javascript{" "}
        and Typescript with React,{" "}
        <span className="underline">Next.js, Node.js, and MongoDB.</span> I am
        also familiar with Kotlin for Android development and Dart for Flutter.{" "}
        <span className="font-medium">
          I am always looking to learn new technologies.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy music,
        working out, hiking and playing video games. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">yoga and pilates</span>. I'm also
        trying to discover my painting skills even more through some art
        projects at home.
      </p>
    </motion.section>
  );
}
