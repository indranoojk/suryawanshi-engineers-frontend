import {motion} from 'framer-motion';
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { useState } from "react";


const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    Transition: {
      type: "spring",
      stiffness: 20,
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    Transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 40,
    }
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <motion.div animate={open ? "open" : "closed"} className="sidebar flex flex-col items-center justify-center bg-black text-white">
        <motion.div variants={variants} className="bg z-[999] fixed top-24 left-0 bottom-0 w-[250px] bg-black">
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
