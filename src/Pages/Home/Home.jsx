import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import hero from '../../Assets/Img/hero.png'
import Midsection from '../../Components/Navbar/Midsection/Midsection'
import Cards from '../../Components/Navbar/Cards/Cards'

export default function Home(){
    return <div className="home">
    <section className="hero-section">
        <div className="hero-wrapper">
            <div className="hero-content container">
                <div className="hero">
                    <div className="hero-items">
                        <p>Starting @<span>$799</span></p>
                        <h3>The best notebook collection 2024</h3>
                        <h5>Exclusive offer -10% off this week</h5>
                        <button>Shop Now</button>
                    </div>
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    </section>
    <section className="mid-section">
        <Midsection/>
    </section>
    <section className="card-section">
        <Cards/>
    </section>
    </div>
}