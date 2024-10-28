import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/products", name: "Products" },
    { id: 3, path: "/products/:id", name: "Products" },
    { id: 4, path: "/cart", name: "Cart" },
    { id: 5, path: "/checkout", name: "Checkout" },
  ];

  return (
    <nav className='bg-yellow-300 text-black px-4'>
      <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">
        {open ? <RiMenu2Fill /> : <IoMdClose />}
      </div>
      <ul
        className={`md:flex absolute bg-yellow-300 md:static text-black text-xl font-bold p-4 duration-1000 justify-center ${
          open ? "-top-96 left-10" : "top-8 left-10 rounded-lg"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
