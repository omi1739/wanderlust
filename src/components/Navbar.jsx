import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav className='flex justify-between mt-3 '>
      <ul className='flex justify-between gap-3'>
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
            src={'/assets/Wanderlast.png'}
            alt="logo"
            width={150}
            height={150}
            />
        </div>

        <ul className='flex justify-between gap-3'>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>


    </nav>
  );
};

export default Navbar;
