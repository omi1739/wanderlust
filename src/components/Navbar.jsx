import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/assets/Wanderlast.png'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/myBookings"}>My Bookings</Link>
        </li>
      </ul>

        <div className="">
            <Image 
            src={logo}
            alt="logo"
            width={100}
            height={100}
            />
        </div>

    </nav>
  );
};

export default Navbar;
