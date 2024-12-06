import { NavListProps } from "@/types";
import Link from "next/link";
import React from "react";

const NavList = ({ link, title }: NavListProps) => {
  return (
    <li>
      <Link href={link} title={title}>
        {title}
      </Link>
    </li>
  );
};
export default NavList;
