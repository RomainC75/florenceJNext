import React from "react";
import Image from "next/image";
import classes from './navbar.module.css'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.center+" bg-transparent flex w-5/6 justify-between z-10"}>
      <div></div>
      <div className="">
        <Image
            className=""
          src="/assets/signature-white.png"
          alt="signature"
          width={150}
          height={60}
        />
      </div>
      <div>
        <Link href="/#mail">
            <p>Message</p>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
