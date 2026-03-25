import {Link } from 'react-router-dom'

export default function Navrouter() {

    return (
        <header className="sticky top-0 z-50 border-b border-blue-200  ">
            <nav className="mx-auto max-w-6xl items-center justify-center px-4 py-3">

                <ul className="flex items-center justify-center gap-6 text-center">
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>


                </ul>
            </nav>
        </header>
    );
}