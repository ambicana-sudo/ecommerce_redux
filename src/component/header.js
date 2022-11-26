import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping,faUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import Search from './search/search';


const Header = ()=>{
	const auth = localStorage.getItem("user")
	const navigate = useNavigate()

	// Function for logout
	const userLogout = ()=>{
		localStorage.clear()
		navigate('/home')
	}

	const { cartItems, likedItems } = useSelector((state) => state.cart);
	// console.log(cartItems)

	return(
		<div className='header-section'>
			<div className="container">
				<header>
					<div className="logo"><h3>ONLINE SHOPPING</h3></div>

					<div className="navigation">
						<ul className="nav">
							<li>Men</li>
							<li>Women</li>
							<li>Kids</li>
							<li>Sale</li>
						</ul>
					</div>
					
					<div className="right_menu">
						<ul className="nav">
							<li><Search/></li>
							<li>
								<Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
								<span>{cartItems.length}</span>
							</li>
							<li>
								<Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
								<span>{likedItems.length}</span>
							</li>
							
							{auth ? 
								<>
									<li>
										<Link to="/home" onClick={()=> userLogout()}>Logout ({JSON.parse(auth).name})</Link>
									</li>
									<li className='profile'>
										<Link to='/profile'><FontAwesomeIcon icon={faUser} /></Link>
									</li>
								</> : 
								<li className='login'>
									<Link to='/'><FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
								</li>
							}
						</ul>
					</div>
				</header>
			</div>
		</div>
	)
}

export default Header