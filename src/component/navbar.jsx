import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {

    return (
        <header className="sticky top-0 z-50 border-b border-blue-200  ">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="#home" className="text-lg font-semibold ">
                    Trainer
                </a>

                <ul className="hidden items-center gap-6 sm:flex justify-center ">
                    
                    {/* {navItems.map((item) => (
                        <li>
                            <a className="text-sm font-medium" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))} */}


                    <li><a href={<Page1 />}>page 1</a></li>
                    <li><a href={<Page2 />}>page 2</a></li>

                </ul>
            </nav>
        </header>
    );
}