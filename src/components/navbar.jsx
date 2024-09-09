import "./navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";


export function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
    if (darkMode) document.body.classList.remove('darkmode');
    else document.body.classList.add('darkmode');
  }

  function toggleMobileNav() {
    const nav = document.getElementById("navbar-nav");
    if (nav.getAttribute("data-status") === "open") {
      nav.setAttribute("data-status", "closed");
    } else {
      nav.setAttribute("data-status", "open");
    }
  }

  return (
    <header className="navbar flex-group flex-vertical-center flex-space">

      <div className="navbar-left flex-group flex-vertical-center">
        <button className="nav-button navbar-mobile-only" onClick={toggleMobileNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>

        <Link to="/" className="navbar-navtitle">wainroutes
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.154701 36 4.155">
            <path d="M 0 4 C 2 2 4 -3 6 2 C 8 3 8 0 9 1 C 10 2 11 1 12 2 C 13 3 14 2 15 1 C 16 0 18 -1 19 1 C 20 2 21 1 22 2 C 23 3 24 1 25 2 C 26 3 27 0 29 0 C 31 0 31 3 32 2 C 34 1 34.6667 3.3333 36 4 Z"/>
          </svg>
        </Link>
        <nav id="navbar-nav" className="navbar-nav flex-group">
          <Link className="navbar-navlink" to="/walks">walks</Link>
          <Link className="navbar-navlink" to="/mountains">mountains</Link>
          <Link className="navbar-navlink" to="/weather">weather</Link>
          <Link className="navbar-navlink" to="/travel">travel</Link>
          <p className="navbar-mobile-only font-cursive text-light">"no pain, no wain!" - LT</p>
        </nav>
      </div>

      <div className="navbar-right flex-group">
        <button className="nav-button nav-button-rotate">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>

    </header>
  )
}