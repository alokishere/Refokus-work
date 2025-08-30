import React, { useState } from "react";
import Product from "./Product";
import { cubicBezier, motion } from "motion/react";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      btn: true,
      case: true,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      btn: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
      btn: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      btn: true,
      case: false,
    },
  ];

  const [Pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-20 relative">
      {products.map((item, index) => (
        <Product key={index} products={item} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: Pos, x: "-50%" }}
          animate={{ y: Pos + "rem" }}
          transition={{ transition: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-[25rem] rounded-md h-[20rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -Pos + "rem" }}
            className="w-full h-full bg-amber-50"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="videos/Arqitel project video 4_3.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -Pos + "rem" }}
            className="w-full h-full bg-amber-100"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="videos/Cula_promo_new_4_3.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -Pos + "rem" }}
            className="w-full h-full bg-amber-200"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="videos/Maniv-Compressed.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -Pos + "rem" }}
            className="w-full h-full bg-amber-300"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="videos/TTR project video 4_3_H.264.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -Pos + "rem" }}
            className="w-full h-full bg-amber-400"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="videos/webflow-education-promo.mp4"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
