import React, { Component } from "react";
import classes from "./Header.module.css";
import headerBackgroundImage from "../../Assets/images/header-footer-m.png";
import bklogo from "../../Assets/images/bklogo.svg";
import icons from  "../../Assets/font/css/open-iconic.css";
import Aux from "../../HOC/Aux";
import Modal from "../../Components/Modal/Modal";
import MyMealSummary from "../../Components/MyMealSummary/MyMealSummary";

import * as actions from "../../store/actions/menuAction";
import * as headerActions from "../../store/actions/headerUIActions";
import { withRouter, Link } from "react-router-dom";


import {connect} from "react-redux";

class Header extends Component {


	componentDidMount(){

		console.log(typeof(this.props.match.url));
		
		
		

		if(window.innerWidth > 768){

			

		

				this.setState({

					menuOpen:true,
					subHeaderPresent:true,
					subMenuOpen:false

				});
			}

		

		window.addEventListener("resize", this.resizeHandler);

	}



	// shouldComponentUpdate(nextProps, nextState){
	// 	return nextProps.mealItems !== this.props.mealItems;
	// }

	// componentWillUpdate(){
	// 	console.log("yesssssss");
	// }

	state={

		subMenuOpen:false,
		menuOpen:false,
		subHeaderPresent:false,
		// showModal:this.props.modalState


	}

	closeModal = () =>{

		this.props.closeModal();
	}

	openModal = () =>{

	this.props.openModal();

	}

	menuToggle = () =>{
		console.log("menu toggle");

		this.setState(prevState =>({
			menuOpen: !prevState.menuOpen

		}));

	}

	subMenuToggle = () =>{

		this.setState(prevState=>({

			subMenuOpen:!prevState.subMenuOpen

		}));
		console.log("submenu toggle");

	}

	resizeHandler = () =>{

		if(window.innerWidth > 768){
			
			if(!this.state.menuOpen){
			
				this.setState({
					menuOpen:true,
					subHeaderPresent:true
				});
			}
		} else if(window.innerWidth < 768){

			this.setState({
				menuOpen:false,
				subHeaderPresent:false
			});			

		}

		

	}

	routing = (event) =>{

		const itemId=event.target.title;

		this.categorySelector(itemId);
		this.props.history.push("/"+itemId);

	}

	categorySelector= (id) =>{
		
		
		this.props.onSelect(id);
		

	}


	render(){

		const headerBackground={
			backgroundImage:"url(" + headerBackgroundImage + ")"
		}


const items = this.props.navMenuItems.map(item =>{

				return item.id ===this.props.selectedCategory ? 
							
						
							<li onClick={(event)=>this.routing(event)} className={classes["active"]} key={item.id} title={item.id} >{item.title}</li> : 
							<li onClick={(event)=>this.routing(event)} key={item.id} title={item.id}>{item.title} </li>
							

			})

		let subMenu = null;

		if(this.state.subMenuOpen){

			
			console.log(items);

			subMenu = (<ul className={classes["food-sub-menu"]}>
							
								{items}
							
						</ul>)

		} 




		let menu = null;

		if(this.state.menuOpen){

			menu = (

				<ul className={classes["mainNav"]}>
				
			
					<li >
					<div  className={classes["foodli"]}>
			<div className={classes["span-cont"]}>
				<span className={classes["desktop"]}>REAL GOOD</span>
				<span onClick={this.routing} className={[classes['both'], classes["homepage"]].join(" ")}>FOOD</span>

			</div><span onClick={this.subMenuToggle} className={[classes["subnav"], icons["oi"]].join(" ")} data-glyph="plus" >+</span>
				</div>
					<div className={classes["food-sub-men-container"]}>
							
						{subMenu}

					</div>

				</li>
				<li>
					<div className={[classes["span-cont"], classes["not-allowed"]].join(" ")}>
						<span className={classes["desktop"]}>GET FRESH</span>
						<span className={classes["both"]}>OFFERS</span>
					</div>
				</li>
				<li>
					<div className={[classes["span-cont"], classes["not-allowed"]].join(" ")}>
						<span className={classes["desktop"]}>YOUR BK</span>
						<span className={classes["both"]}>LOCATOR</span>
					</div>
				</li>
				<li>
					<div className={[classes["span-cont"], classes["not-allowed"]].join(" ")}>
						<span className={classes["desktop"]}>NEWSLETTTER</span>
						<span className={classes["both"]}>SIGN UP</span>
					</div>
				</li>
				<li className={classes["utility-menu"]}>

					<a href="#">About BK</a>
					<a href="#">Careers</a>
					<a href="#">Get the BK App</a>
					<a href="#">Contact BK</a>
					<a href="#">Food Quality</a>			

				</li>

				</ul>

				)

		}

let subHeader = null;

	if(this.props.subHeaderPresent){


		subHeader = (

				<header className={classes["secondary-header"]}>
						<div className={classes["max1000"]}>
							<div className={classes["secondary-nav-cont"]}>
								<ul className={classes["secondary-nav"]}>
									{items}
								</ul>
								
							</div>

						</div>
						
					</header>

			)

	}


		


		return(

				<Aux>
					<header style={headerBackground} className={classes['main-header']}>
						<div className={[classes['main-header-content'], classes['max1000']].join(" ")}>
							<div className={classes['logo-menu-btn-holder']}>
								<div className={classes['logo']}>
									<img src={bklogo} />
								</div>
								<div onClick={this.menuToggle} className={classes['mobile-menu']}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>

							<div className={classes["mainNavig"]}>
								{menu}
							</div>

						</div>
					</header>
					<header className={classes["meal-header"]}>
						<div className={classes["max1000"]}>
							<div className={classes["meal-container"]}>
								<div onClick={this.openModal} className={classes["meal-item-count"]}>
									<span>{this.props.mealItems.length > 0 ? this.props.mealItems.length : "0"}</span> Items in meal  &or;

								</div>
							</div>

						</div>
						
					</header>
					{this.state.subHeaderPresent? subHeader : null}

					


					<Modal show={this.props.modalState} modalClosed={this.closeModal}>

						<MyMealSummary  modalClosed={this.closeModal} />
					</Modal>
					</Aux>




			)


	}


}


const mapStateToProps = state =>{

	return{
		navMenuItems:state.menu.navMenuItems,
		selectedCategory:state.menu.selected,
		mealItems:state.meal.meals,
		modalState:state.header.showModal,
		subHeaderPresent:state.menu.mainMenu
	}

}

const mapDispatchToProps = dispatch =>{

	return{

		onSelect:(category)=>dispatch(actions.selectedCategorySelector(category)),
		closeModal:() =>dispatch(headerActions.closeModal()),
		openModal:() => dispatch(headerActions.openModal()),
		toggle:(status)=>{dispatch(actions.mainMenuToggle(status))}

	}


}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));