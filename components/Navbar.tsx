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
            <a href="/">Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <details>
              <summary>English</summary>
              <ul className="bg-base-100 p-2">
                <li>
                  <a>Indonesian</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
