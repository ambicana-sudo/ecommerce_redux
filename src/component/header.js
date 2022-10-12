import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
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
								<li><FontAwesomeIcon icon={faUser} /></li>
								<li><FontAwesomeIcon icon={faCartShopping} /></li>
								<li><FontAwesomeIcon icon={faHeart} /></li>
							</ul>
						</div>
					</header>
			</div>
		</div>
	)
}

export default Header