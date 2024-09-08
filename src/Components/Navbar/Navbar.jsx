import React, { useRef, useState,useEffect} from "react";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faSun, faMoon} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping,faMagnifyingGlass,faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import { wind } from "fontawesome";
import { Link } from "react-router-dom";
export default function Navbar(){
        const menuRef = useRef(null);
       
        const [clicked,setClicked] = useState(false)
    //     useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             setClicked(false);
    //         }
    //     };

    //     // Add event listener to the document
    //     document.addEventListener("mousedown", handleClickOutside);

    //     // Cleanup event listener
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [menuRef]);
        // const handleResize = () => {
        //     if (!clicked && window.innerWidth >= 854) { // Adjust the breakpoint as needed
        //       setClicked(!clicked);
        //     }else{
        //         setClicked(false)
        //     }
        //   };
        
        //   useEffect(() => {
        //     console.log(!clicked && window.innerWidth >= 854)
        //     window.addEventListener("resize", handleResize);
        //     return () => {
        //       window.removeEventListener("resize", handleResize);
        //     };
        //   }, []);
    return <div className="navbars">
        <div className="navbar-wrapper">
            <div className="navbar-content sticky">
                <div className="left-nav">
                <div className="nav-logo">
                    <h4>Shopping App</h4>
                </div>
                <div className="searchBar">
                    
                <form className="d-flex" role="search">
        <input className="form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success btn-sm" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </form>

                </div>
                </div>
                <div className="right-nav" ref={menuRef}>

                        <ul className={`nav-list ${clicked?'open':''}`}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Products</Link></li>
                        <li><Link to={'/category'}>categories</Link></li>
                        <li><a><FontAwesomeIcon icon={faUser} /> Login</a></li>
                        <li><a><FontAwesomeIcon icon={faCartShopping} /></a></li>
                        <li className="sun"><a><FontAwesomeIcon icon={faSun} /></a></li>
                        <li className="moon"><a><FontAwesomeIcon icon={faMoon} /></a></li>
                    </ul>

                </div>
                    <div className="menu">
                        <div id="menuBar" onClick={()=>{setClicked(!clicked)}}>
                            <FontAwesomeIcon icon={clicked? faClose:faBars} />
                        </div>
                        {/* <div id="closeBtn">
                            <FontAwesomeIcon icon={faClose} />
                        </div> */}
                    </div>
            </div>
        </div>
    </div>
}