"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  // comments in about.tsx
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/images/image.png"
              alt="Gila"
              width={200}
              height={200}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Gila.</span> I'm a{" "}
        <span className="font-bold">
          frontend-developer and an iOS-developer
        </span>{" "}
        with <span className="font-bold">1,5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">Javascript/Typescript</span> with React
        (Next.js) and <span className="underline">Swift</span> with both UIKit
        and SwiftUI.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 
      text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
         active:scale-105 transition"
        >
          Contact me here <BsArrowRight />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
         active:scale-105 border border-black/10 transition cursor-pointer"
          href="/CV2024.pdf"
          download
        >
          Download CV <HiDownload />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center
        gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]
        hover:text-gray-950
         active:scale-105 border border-black/10 transition cursor-pointer"
          href="https://www.linkedin.com/in/gila-johansson-3b0034101/"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center
        gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]
        hover:text-gray-950 active:scale-105 border border-black/10 transition cursor-pointer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
