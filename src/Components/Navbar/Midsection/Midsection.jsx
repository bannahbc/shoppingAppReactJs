import React, { useEffect, useState } from 'react'
import './Midsection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faDollarSign, faHeadset, faPercent, faTruck} from '@fortawesome/free-solid-svg-icons'


function Midsection() {
  //   const [apiData, setApiData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false); // Track loading state
  // const [error, setError] = useState(null); // Track potential errors

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true); // Set loading state to true before fetching
  //     setError(null); // Clear any previous errors

  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products/1');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const jsonData = await response.json();
  //       setApiData(jsonData);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false); 
  //       // Set loading state to false after fetching
  //     }
  //   };

  //   fetchData();
  // }, []); 
  // // Empty dependency array ensures fetching only on initial render

  // // Handle loading and error states conditionally
  // if (isLoading) {
  //   return <p>Loading data...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  return (
    
    <div className="mid-wrapper">

          <div className="mid-content">
            <div className="mid">
              <div className="mid-icon">

          <FontAwesomeIcon icon={faTruck}  className="icon"/>
              </div>
              <div className="mid-items">
                <h5>Delivery</h5>
                <p>all purpose</p>
              </div>
            </div>
            <div className="mid">
              <div className="mid-icon">

          <FontAwesomeIcon icon={faDollarSign}  className="icon"/>
              </div>
              <div className="mid-items">
                <h5>Delivery</h5>
                <p>all purpose</p>
              </div>
            </div>
            <div className="mid">
              <div className="mid-icon">
          <FontAwesomeIcon icon={faPercent} className="icon" />

              </div>
              <div className="mid-items">
                <h5>Delivery</h5>
                <p>all purpose</p>
              </div>
            </div>
            <div className="mid">
              <div className="mid-icon">
          <FontAwesomeIcon icon={faHeadset} className="icon" />

              </div>
              <div className="mid-items">
                <h5>Delivery</h5>
                <p>all purpose</p>
              </div>
            </div>
          </div>
           
        </div>
 
  )
}

export default Midsection