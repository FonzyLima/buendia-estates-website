import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg sticky-top">

            <div className="container-fluid">
              <a className="navbar-brand">Lourdene Buendia</a>
              <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link href="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/properties"><a className="nav-link">Properties</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sellproperties"><a className="nav-link">Sell a Property</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#contact-us"><a className="nav-link" href="#contact-us">Contact Us</a></Link>
                  </li>
                </ul>
                <li className="nav-item d-flex">
                    <Link href="/Booking"><a className="nav-link">Book A Viewing</a></Link>
                </li>
              </div>
            </div>

        </nav>
    );
}
 
export default Navbar;