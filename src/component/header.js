import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import {useState} from 'react'
import {Link} from "react-router-dom"
import Search from './search';


const Header = ()=>{
	const { count } = useSelector((state) => state.count);
	const [wishCount, setWishCout] = useState({count})

	console.log(wishCount)

	// useEffect(()=>{
	// 	fetch('http://localhost:3000/wishlist')
	// 	.then(res => {
	// 		return res.json()
	// 	})
	// 	.then(data => {
	// 		setWishCout(data)
	// 	})
	// },[])

	return(
		<div className='header-section'>
			<div className="container">
				<header>
					<div className="logo">Logo</div>

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
							<li><FontAwesomeIcon icon={faUser} /></li>
							<li>
								<Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
								<span>{count}</span>
							</li>
							<li>
								<Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
								<span>{count}</span>
							</li>
						</ul>
					</div>
				</header>
			</div>
		</div>
	)
}

export default Header