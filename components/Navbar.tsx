import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar fixed z-20 bg-base-100 text-[#C0CAF5]">
      <div className="flex-1 px-6">
        <a className="btn-ghost btn text-xl normal-case">alex</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/AboutMe"}>About</Link>
          </li>
          <li>
            <a>Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
