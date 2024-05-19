'use client';

import Link from "next/link"
import React from 'react'
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'}
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center px-5">
      <Link href="/"><FaBug /></Link>
      <ul className="flex space-x-6">
        {links.map((link) => <li><Link key={link.href} href={link.href} className={classnames({
          'text-zinc-600': link.href === currentPath,
          'text-zinc-400': link.href !== currentPath,
          'hover:text-zinc-900 transition-colors': true
        })}>{link.label}</Link></li>)}
      </ul>
    </nav>
  )
}

export default NavBar