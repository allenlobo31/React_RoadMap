import React, { useState } from "react";

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

                <ul className="hidden items-center gap-6 sm:flex ">
                    
                    {navItems.map((item) => (
                        <li>
                            <a className="text-sm font-medium" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}


                    {/* <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li> */}



                </ul>
            </nav>
        </header>
    );
}