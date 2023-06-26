import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 px-6">
        <a className="btn btn-ghost normal-case text-xl">alex</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-6">
          <li>
            <a>Home</a>
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
              <ul className="p-2 bg-base-100">
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
