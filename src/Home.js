import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    <div className="home"> 
    
    <div className="homerow">
            <Product 
              id="12345"
              Name="555 Soap"
              price={"$$"+ 25.00}
              rating={6}
              image={"https://www.addisber.com/wp-content/uploads/2020/08/93-600x600.png"}
              />
            
    </div>
    
    </div>
  )
}

export default Home