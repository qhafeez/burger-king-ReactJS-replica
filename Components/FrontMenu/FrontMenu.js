import React, {Component} from "react";
import * as classes from "./FrontMenu.module.css";
import { connect } from "react-redux";
import Aux from "../../HOC/Aux";
import MenuItem from "../MenuItem/MenuItem";
import * as actions from "../../store/actions/menuAction";




class FrontMenu extends Component{

		componentDidMount(){

			this.props.toggle(false);


		}

		componentWillUnmount(){

			this.props.toggle(true);

		}



		render(){

		return(

				<Aux>
					<section className={classes["food-category-container"]}>
						
						<h1>MENU</h1>
						<div className={classes['max1000']}>
							<div  className={classes["food-items-container"]}>

							{
								Object.keys(this.props.categories).map(item =>{

			
			
								return (
										
										<MenuItem main={true}  title={this.props.categories[item].title} category={this.props.categories[item].id} menuItemImage={this.props.categories[item].image}   menuItemName={item}  key={this.props.categories[item].id} />
										
									)




							}) 
							}

							
							</div>

						</div>
			

					</section>

					

				</Aux>





			)
	}
		


}



const mapStateToProps = state =>{

	return{
		categories:state.menu.navMenuItems,
		mainMenuStatus:state.menu.mainMenu
		// selectedCategory:state.menu.selected,
		// mealItems:state.meal.meals,
		// modalState:state.header.showModal
	}

}

const mapDispatchToProps = dispatch =>{

	return{
		toggle:(status)=>{dispatch(actions.mainMenuToggle(status))}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(FrontMenu);