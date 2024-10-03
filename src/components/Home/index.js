import "./index.css";
import {Component} from "react";
import { FiUnlock } from "react-icons/fi";
import { PiMouseScrollBold } from "react-icons/pi";

class Home extends Component {
	render(){
		return (
			<>
				<div className="main-container">
					<nav className="navbar-container">
						<div>
						<h1 className="logo-name-card">Pop Rock Crystal</h1>
						</div>
						<div className="tabs-container">
						<div className="tabs-card-container">
							<p className="tab-item-card">Home</p>
							<p className="tab-item-card">Shop</p>
							<p className="tab-item-card">About</p>
						</div>
						<div>
							<FiUnlock className="icon-card" />
						</div>
						</div>
					</nav>
					<div className="home-welcome-card">
						<div className="welcomme-card">
							<p className="welcome-desc-styling">Welcome to</p>
							<h1 className="crystal-heading-card">Pop Rock Crystal Shop!</h1>
							<p className="crystal-desc-card">We offer a curated collection of natural stones, each with its 
								own unique energy and beauty. Whether you're seeking spiritual healing, enhancing your 
								meditation practice, or simply admiring the natural world, we have 
								something to suit your needs.
							</p>
							<div>
								<button type="button" className="shop-button">Shop Now</button>
								<button type="button" className="about-button">About Us</button>
							</div>
						</div>
						<div className="crystal-image-container">
							<img 
							alt="dimond"
							className="crystal-image-card"
							src="https://img.freepik.com/premium-photo/blue-crystal_996668-11389.jpg?w=740"
							 />
						</div>
					</div>
					<div className="scoll-down-card">
						<button type="button" className="scoll-button"> <PiMouseScrollBold className="scoll-icon" />Scoll Down</button>
					</div>
				</div>
			</>
		)   
	}
}
export default Home;