import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import {useState, useEffect} from 'react'

const Navbar = () => {

  const route= useRouter()
  const [activeLink, setActiveLink ] = useState('')
  const links = {
    home: "/",
    properties: "/properties",
    sell: "/Sellproperties",
    booking: "/Booking",
    slug: "/properties/[slug]"
  }

  const getLink = () => {
    const pathname = route.pathname
    console.log(pathname)
    if(pathname === "/"){
      setActiveLink(links.home)
    }
    else if(pathname === "/properties"){
      setActiveLink(links.properties)
    }
    else if(pathname === "/properties/[slug]"){
      setActiveLink(links.slug)
    }
    else if(pathname === "/Sellproperties"){
      setActiveLink(links.sell)
    }
    else if(pathname ==="/Booking"){
      setActiveLink(links.booking)
    }
  }

  useEffect(() => {
    getLink();
  });

    return ( 
        <nav className="navbar navbar-expand-lg sticky-top">

            <div className="container-fluid">
              <Link href="/"><a className="navbar-brand"><img className="navpicture" src="navlogo.png"/></a></Link>
              <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link href="/"><a className={`nav-link ${activeLink === links.home ? 'active': ''}`} aria-current="page" href="#">Home</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/properties"><a className={`nav-link ${activeLink === links.properties || activeLink === links.slug ? 'active': ''}`}>Properties</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sellproperties"><a className={`nav-link ${activeLink === links.sell ? 'active': ''}`}>Sell a Property</a></Link>
                  </li>
                  <li className="nav-item d-flex">
                    <Link href="/Booking"><a className={`nav-link ${activeLink === links.booking ? 'active': ''}`}>Book A Viewing</a></Link>
                  </li>
                </ul>
                
              </div>
            </div>

        </nav>
    );
}
 
export default Navbar;