import React, { Component } from "react";
import classes from "./Menu.module.css";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Aux from "../../HOC/Aux";
import * as actions from "../../store/actions/menuAction";
import { withRouter, Link } from "react-router-dom";




import MenuItem from "../../Components/MenuItem/MenuItem";
import { connect } from "react-redux";

class Menu extends Component{

	componentWillMount(){

		
		// console.log(this.props.match);
		// this.setState({
		// 	category:categoryObject
		// })
		// this.props.history.push("/"+category);


	}


	componentWillReceiveProps(){

		// 	const category = this.props.match.params.id;

		// // this.props.onSelect(category);

		// const categoryObject = this.props.selectedCategoryItems[category];
		// console.log(this.props.match);
		// this.setState({
		// 	category:categoryObject
		// })

	}

	componentDidMount(){

	
		console.log(this.props.match);
	}



	// }

	

	state={

		category:null

			}


	// titleSelector = (selectedCategory) =>{

	// 	switch(selectedCategory){

	// 		case "chicken":

	// 			return this.props.categories.chicken.title;

	// 		case "burgers":

	// 			return this.state.categories.burgers.title;

	// 		case "salad":

	// 			return this.state.categories.salad.title;

	// 		default:
	// 			return;



	// 	}


	// }

		
	routingHandler = () =>{

		// this.props.history.push("/nutrition");
		// console.log(this.props);
	}

	selectMenuItem = (event) =>{

		// console.log("hello");

		// const itemname = event.currentTarget.dataset.id;

		// const menuItemsObjectCopy = {
		// 		...this.props.selectedCategoryItems[itemname]
		// 	}
		// 	menuItemsObjectCopy.name="hello";


		// // const singleItem = {
		// // 	...menuItemsObjectsCopy
		// // }
		
		// // console.log(singleItem);
		// console.log(menuItemsObjectCopy);
		// console.log(itemname);

		// this.props.onSelectItem(itemname);
		// this.routingHandler();
	}




	render(){

		

		// const title = 	this.titleSelector(this.props.selectedCategory, this.props.);			

			// const selected = this.props.selectedCategory;

		

		// console.log(menuItems);

		const category = this.props.match.params.id;

		// this.props.onSelect(category);

		const categoryObject = this.props.selectedCategoryItems[category];



		return(

				<Aux>
					<section className={classes["food-category-container"]}>
						
						<h1>{this.props.selectedCategoryTitle}</h1>
						<div className={classes['max1000']}>
							<div  className={classes["food-items-container"]}>

							{
								Object.keys(categoryObject.items).map(item =>{

			
			
								return (
										
										<MenuItem  title={categoryObject.items[item].name} category={categoryObject.items[item].category}  menuItemName={item} menuItemImage={categoryObject.items[item].image.small} key={item} />
										
									)




							}) 
							}

							
							</div>

						</div>
			

					</section>

					<Suggestions />

				</Aux>





			)



	}



}

const mapStateToProps = state =>{

	return{

		
		selectedCategoryItems:state.menu.categories,
		// selectedCategoryTitle:state.menu.categories[state.menu.selected].title,
		catItems:state.menu.categories,


	}

}

const mapDispatchToProps = dispatch =>{
	return{
		onSelect:(category)=>dispatch(actions.selectedCategorySelector(category))
	}
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));