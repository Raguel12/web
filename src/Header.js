import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import {Search } from '@mui/icons-material';
//import ContactsIcon from '@material-ui/icons/Contacts';

function Header() {
    return (
        
            <nav className="navheader" >
                
                <Link to="/"> 
                    <img className="header_logo" src= "https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text.png"/>
                </Link>
                  
                    <div className="headeroptions">
                        <Link to="/"> <span className="nav">Home</span></Link>  
                        <Link to="/other"> <Search className="nav">Other</Search></Link>
                        <Link to="/other"> <span className="nav">Other</span></Link>
                        <Link to="/other"> <Search className="nav">Other</Search></Link>
                        <Link to="/"> <span className="nav">Products</span></Link>  
                        
                    </div>
                
            </nav>       
        
    )
    }

export default Header