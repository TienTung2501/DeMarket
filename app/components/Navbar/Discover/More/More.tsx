import React, { useState } from "react";
import { Usable, useEffect } from "react";
import Link from "next/link";

//import internal
const More = () => {
  const more = [
    { name: "Mint", link: "/pages/mintpage" },
    { name: "Guide", link: "/pages/guidepage" },
    { name: "About", link: "/pages/aboutpage" },
  ];

  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {more.map((el, i) => (
          <li key={i + 1}>
            <Link className="dropdown-item" href={`${el.link}`}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default More;
