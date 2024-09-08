import React from 'react'
import drawerImg from '../../Assets/Img/1.png'
import './Product.css'
import Navbar from '../../Components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faBucket, faShoppingCart,faBoltLightning,faStar as st} from '@fortawesome/free-solid-svg-icons'
import { faHeart,faStar} from '@fortawesome/free-regular-svg-icons'

function Product() {
  return (
    <div className='products'>
        <div className="product-details">
            <div className="product-images product-container">
                <div className="main-image">
                    <img src={drawerImg} alt="" />
                </div>
                <div className="small-images">
                    <img src={drawerImg} alt="" />
                    <img src={drawerImg} alt="" />
                    <img src={drawerImg} alt="" />
                </div>
            </div>
            <div className="product-content product-container">
                <div className="product-name">
                    <h4>Annibale Colombo Bed</h4>
                </div>
                <div className="rating">
                    <p>
                        <FontAwesomeIcon icon={st} className='rating-icon'/>
                        <FontAwesomeIcon icon={st} className='rating-icon'/>
                        <FontAwesomeIcon icon={st} className='rating-icon'/>
                        <FontAwesomeIcon icon={st} className='rating-icon'/>
                        <FontAwesomeIcon icon={faStar} className='rating-icon'/>
                    </p>
                </div>
                <div className="price">
                    <p className="offer-price">
                        $ 299.
                    </p>
                    <p>
                       <span className="mrp">$ 350</span> 9.48%
                    </p>
                </div>
                <div className="bcs">
                    <p><strong>Brand:</strong>Annibale Colombo</p>
                    <p><strong>Category:</strong>furniture </p>
                    <p><strong>Stock:</strong> 100</p>
                </div>
                <div className="about-product">
                    <div className="title">
                        <h4>About The Product</h4>
                    </div>
                    <div className="about">
                        <p>The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.</p>
                    </div>
                </div>
                <div className="product-btns">
                    <button className="productBtn"><FontAwesomeIcon icon={faShoppingCart} className='btn-icons' /> Add to Cart</button>
                    <button className="productBtn buy"><FontAwesomeIcon icon={faBoltLightning} className='btn-icons' /> Buy Now</button>
                    <button className="productBtn whish"><FontAwesomeIcon icon={faHeart} className='btn-icons' /> Add to Whishlist</button>
                </div>
            </div>
            <div className="product-review product-container">
                <div className="title">
                    <h4><strong>Reviews</strong></h4>
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dignissimos dolores maiores laboriosam natus odit repellat, modi doloribus debitis accusantium, sit odio placeat velit expedita dolorum. Culpa debitis ex impedit!
                    Provident temporibus, voluptatum dolore dolor illo doloribus harum ipsam deleniti architecto modi cumque. Cum accusantium distinctio assumenda. Nisi asperiores debitis iste praesentium dolorem, architecto amet, voluptatibus numquam ut voluptatum eligendi!
                    Praesentium, obcaecati suscipit! Natus reprehenderit eveniet magnam tempora facere suscipit labore architecto? In voluptates, ipsam rem, modi tempore magnam facilis deserunt ipsa veritatis, perferendis id reiciendis quibusdam consequatur obcaecati recusandae.
                    Ratione omnis maxime id. Ab, maiores. Enim fugit sed iure inventore ut, excepturi in! Pariatur dignissimos eveniet eum facilis? Minima iusto quibusdam maiores ducimus eveniet sunt magni officia blanditiis quae?
                    Explicabo veritatis ex, facere alias ipsum nisi cum, veniam quas dolor in magnam cumque iste impedit nihil eligendi quod sit numquam ad esse! Maxime aspernatur, id blanditiis labore in obcaecati!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product