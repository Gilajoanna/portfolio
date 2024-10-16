"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
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
    </section>
  );
}
