import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
//   const items = ["Dashboard", "Contracts", "Projects", "Change Password"];

  return (
    <>
      <div
        className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
        variants={variants}
      >
        {/* {items.map((item) => (
          <a
            href={`/${item}`}
            key={item}
            variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium"
          >
            {item}
          </a>
        ))} */}
        
        <Link to="/portal" variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium">Dashboard</Link>

        <Link to="/contract" variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium">Contracts</Link>

        <Link to="/addProject" variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium">Add Project</Link>

        <Link to="/projectEdit" variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium">Edit Projects</Link>

        <Link to="/changePass" variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-medium">Change Password</Link>
      </div>
    </>
  );
};

export default Links;
