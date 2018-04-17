import React, { Component } from "react";
import classes from "./NutritionInfo.module.css";

import { connect } from "react-redux";
import * as actions from "../../store/actions/menuAction";
import * as mealActions from "../../store/actions/mealActions";
import * as headerActions from "../../store/actions/headerUIActions";

import { Redirect, withRouter } from "react-router-dom";

import fbIcon from "../../Assets/images/shareIcons/fb-icon.png";
import twitterIcon from "../../Assets/images/shareIcons/twitter-icon.png";
import igIcon from "../../Assets/images/shareIcons/ig-icon.png";
import Checkbox from "../../Components/Checkbox/Checkbox";
import NutritionInfoItem from "../../Components/NutritionInfoItem/NutritionInfoItem";


class NutritionInfo extends Component{


	componentWillMount(){

		

		const itemCategory = this.props.match.params.category;
		const itemName = this.props.match.params.item;

		this.props.onSelect(itemCategory);

		const selectedCategoryItems = this.props.allItems[itemCategory];
		// const selectedCategory

		this.props.onSelectItem(itemName);

	}

	// componentDidMount(){

	// 	const itemName = this.itemName();
	// 	const calories=this.totalCalories();
	// 	const fatGrams = this.totalFatGrams();
	// 	const satFatGrams= this.totalSatFatGrams();
	// 	const transFatGrams = this.totalTransFatGrams();
	// 	const cholesterolMg =  this.totalCholesterolMg();
	// 	const sodiumMg = this.totalSodiumMg();
	// 	const carbsGrams = this.totalCarbGrams();
	// 	const fiberGrams = this.totalFiberGrams();
	// 	const proteinGrams = this.totalProteinGrams();
	// 	const sugarGrams = this.totalSugarGrams();
		

	// 	this.setState({

	// 		item:{
				
	// 			['Calories']:calories,
	// 			['Fat']:fatGrams,
	// 			["Saturated Fat"]:satFatGrams,
	// 			["Trans Fat"]:transFatGrams,
	// 			["Cholesterol"]:cholesterolMg,
	// 			["Sodium"]:sodiumMg,
	// 			["Carbs"]:carbsGrams,
	// 			["Fiber"]:fiberGrams,
	// 			["Sugar"]:sugarGrams,
	// 			["Protein"]:proteinGrams,
	// 			name:itemName
	// 		}

	// 	})


	// }

	


// 	componentWillReceiveProps(){

// 		if(this.nextProps !== this.props){

// 			const itemName = this.itemName();
// 			const calories=this.totalCalories();
// 			const fatGrams = this.totalFatGrams();
// 			const satFatGrams= this.totalSatFatGrams();
// 			const transFatGrams = this.totalTransFatGrams();
// 			const cholesterolMg =  this.totalCholesterolMg();
// 			const sodiumMg = this.totalSodiumMg();
// 			const carbsGrams = this.totalCarbGrams();
// 			const fiberGrams = this.totalFiberGrams();
// 			const proteinGrams = this.totalProteinGrams();
// 			const sugarGrams = this.totalSugarGrams();
		

// 		this.setState({

// 			item:{
				
// 				['Calories']:calories,
// 				['Fat']:fatGrams,
// 				["Saturated Fat"]:satFatGrams,
// 				["Trans Fat"]:transFatGrams,
// 				["Cholesterol"]:cholesterolMg,
// 				["Sodium"]:sodiumMg,
// 				["Carbs"]:carbsGrams,
// 				["Fiber"]:fiberGrams,
// 				["Sugar"]:sugarGrams,
// 				["Protein"]:proteinGrams,
// 				name:itemName,
				
// 			}

// 		})


// 		}

// 	}



// 	state={

// 		item:{
				
// 				['Calories']:null,
// 				['Fat']:null,
// 				["Saturated Fat"]:null,
// 				["Trans Fat"]:null,
// 				["Cholesterol"]:null,
// 				["Sodium"]:null,
// 				["Carbs"]:null,
// 				["Fiber"]:null,
// 				["Sugar"]:null,
// 				["Protein"]:null,
// 				name:null,
// 	}


// }

itemName = () =>{

	return this.props.selectedItem.name;

}

totalCalories = () =>{

	const totalCalories = (this.totalFatGrams()*9) + (this.totalCarbGrams()*4) + (this.totalProteinGrams()*4);
	console.log(totalCalories);

	// this.setState({
	// 	item:{
	// 		...this.state.item,
	// 		totalCalories:totalCalories
	// 	}

			//this rounds the number up to the nearest 10
	return Math.ceil(totalCalories/10)*10;
	


}

totalFatGrams = () => {

	const totalFat = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsFat:null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalFat);
	// this.setState({
	// 	item:{
	// 		...this.state.item,
	// 		gramsFat:totalFat
	// 	}
	// });
	return Math.ceil(totalFat);

}

totalSatFatGrams = () => {

	const totalSatFat = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsSatFat:null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalSatFat);
	return totalSatFat;

}

totalTransFatGrams = () => {

	const totalTransFat = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsTransFat:null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalTransFat);
	return totalTransFat;

}

totalCholesterolMg = () => {

	const totalCholesterol = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.mgCholesterol:null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalCholesterol);
	return totalCholesterol;

}

totalSodiumMg = () => {

	const totalSodium = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.mgSodium:null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalSodium);
	return totalSodium;

}




totalCarbGrams = () =>{

	const totalCarbs = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsCarbs :null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalCarbs);
	// this.setState({
	// 	item:{
	// 		...this.state.item,
	// 		gramsCarbs:totalCarbs
	// 	}
	// });
	return Math.ceil(totalCarbs);


}

totalFiberGrams = () =>{

		const totalFiber = Object.keys(this.props.selectedItem.ingredients).map(item =>{

			return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsFiber :null;

			}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalFiber);
	return totalFiber;


}

totalSugarGrams = () =>{

		const totalSugar = Object.keys(this.props.selectedItem.ingredients).map(item =>{

			return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsSugar :null;

			}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalSugar);
	return totalSugar;


}

totalProteinGrams = ()=>{

	const totalProtein = Object.keys(this.props.selectedItem.ingredients).map(item =>{

	return this.props.selectedItem.ingredients[item].included ? this.props.selectedItem.ingredients[item].info.gramsProtein :null;

	}).reduce((accumulator, currentValue)=>{

		return accumulator + currentValue;

	});

	console.log(totalProtein);
	// this.setState({
	// 	item:{
	// 		...this.state.item,
	// 		gramsProtein:totalProtein
	// 	}
	// })
	return Math.ceil(totalProtein);

}


checkboxHandler = (event) =>{

	const ingredient = event.target.value;

	this.props.includeExcludeIngredient(ingredient);
	console.log(ingredient);

}

addItem = () =>{

	const id = new Date().getTime();

	const itemToAdd = {
		name:this.props.selectedItem.name,
		calories:this.totalCalories(),
		id: id
	}

	console.log(itemToAdd);

	this.props.addItem(itemToAdd);


}



	render(){


		let aaa = <Redirect to="/" />;


			const selectedItemInfo={
			 Calories:this.totalCalories(),
			 Fat: this.totalFatGrams(),
			 satFatGrams: this.totalSatFatGrams(),
			 transFatGrams: this.totalTransFatGrams(),
			 Cholesterol :  this.totalCholesterolMg(),
			 Sodium:this.totalSodiumMg(),
			 Carbohydrates:this.totalCarbGrams(),
			 Fiber:this.totalFiberGrams(),
			 Protein:this.totalProteinGrams(),
			 Sugar:this.totalSugarGrams()
			}

			

			
		if(this.props.selectedItem){
			const typeOfInput = this.props.selectedItem.type;

			const checkboxItems = Object.keys(this.props.selectedItem.ingredients).map(item=>{
				console.log(item);
				return <Checkbox selectedStatus={this.props.selectedItem.ingredients[item].included} inputType={typeOfInput}  id={item} ingredientName={this.props.selectedItem.ingredients[item].name}  changed={this.checkboxHandler} />

			});


			const nutritionInfoItems = Object.keys(selectedItemInfo).map(item=>{

				console.log(item);

				return <NutritionInfoItem  property={item} value={selectedItemInfo[item]} />

			});

			aaa =	(<section className={classes["selected-menu-item-container"]}>
				
	<div className={classes["inner-container"]} className={classes["max1000"]}>
	<section className={classes["chicken-jumbotron"]}>
		<div className={classes["chicken-jumbo-container"]}>
		<div className={classes["chicken-heading"]}>
			<div>
			<h1>{this.props.selectedItem.name}</h1>
			<h2>So good, we've been serving it since 1979.</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incclassNameclassNameunt ut labore et dolore magna aliqua. 
			</p>
		</div>
		</div>
		<div className={classes["chicken-picture"]}>
			<div>
			<img className={classes["current-item-pic"]} src={this.props.selectedItem.image.big} />
			</div>
		</div>
		</div>
	</section>

	
		
	
		<div className={classes["share-cont"]}>
			<div className={classes["share-blurb"]}>
				SHARE SOMETHING TASTY
			</div>
			<div className={classes["social-container"]}>

				<a href=""><img src={fbIcon} /></a>
				<a href=""><img src={twitterIcon} /></a>
				<a href=""><img src={igIcon} /></a>
				
			</div>
		</div>
	
	<section className={classes["mobile-chicken-blurb-and-share"]}>
			<div className={classes["share-cont-mobile"]}>
			<div className={classes["share-blurb"]}>
				SHARE SOMETHING TASTY
			</div>
			<div className={classes["social-container-mobile"]}>

				<a href=""><img src={fbIcon} /></a>
				<a href=""><img src={twitterIcon} /></a>
				<a href=""><img src={igIcon} /></a>
				
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incclassNameclassNameunt ut labore et dolore magna aliqua. 
			</p>
		</div>


	</section>
	
	<section className={classes["nutrition-info"]}>
		<div className={classes["nutrition-title-container"]}>
			<h1>NUTRITION INFORMATION</h1>
			<span className={classes["nutr-reveal-close"]} className={classes["oi"]} data-glyph={classes["minus"]}></span>
		</div>


		<div className={classes["nutrition-and-customize-cont"]}>
		<div className={classes["customizer-container"]}>
			<div className={classes["cust-heading-cont"]}>
				<h4>CUSTOMIZE WITH PREMIUM INGREDIENTS</h4>
			</div>
			<div className={classes["selection-container"]}>

				{checkboxItems}
						

			</div>

			
			<div className={classes["meal-button-container"]}>
				<button onClick={this.addItem} className={classes["add-to-meal"]}>ADD TO MY MEAL</button>
				<button onClick={this.props.openModal} className={classes["show-my-meal"]}>SHOW MY MEAL</button>
			</div>

		</div>
		<div className={classes["nutrition-info-container"]}>
				

			<div className={classes["nutr-grp"]}>
				{[nutritionInfoItems[0], nutritionInfoItems[1], nutritionInfoItems[2]]}
			</div>
				
			<div className={classes["nutr-grp"]} >
				{[nutritionInfoItems[3], nutritionInfoItems[4], nutritionInfoItems[5]]}	
			</div>
				
			<div className={classes["nutr-grp"]}>
				{[nutritionInfoItems[6], nutritionInfoItems[7], nutritionInfoItems[8]]}			
			</div>
			<div className={classes["nutr-grp"]}>
				{[nutritionInfoItems[9]]}			
			</div>
		</div>
	</div>

		<div className={classes["allergy-container"]}>
			<div className={classes["allergy-div"]}>
				<span>Allergens:</span> Egg, Milk, Soy, Wheat
			</div>
			<div className={classes["download-nutr-info"]}>
				<span>Download our Full Menu </span> to view all nutrition information.
			</div>
			<div className={classes["availability"]}>Not all products shown are available in every restaurant. Price and participation will vary. Note: Certain activities provclassNameed via this website may be covered by U.S. Patent 6,585,516</div>

		</div>
				
				

					


		
	</section>







</div>

</section>);


		}



		return( aaa	)

	}


}

const mapStateToProps = state =>{

	return{

		selectedItem:state.menu.selectedItem,
		allItems:state.menu.categories

	}

}

const mapDispatchToProps = dispatch =>{

	return{

		onSelect:(category)=>dispatch(actions.selectedCategorySelector(category)),
		includeExcludeIngredient: (ingredient) =>{dispatch(actions.includeExcludeIngredient(ingredient))},
		addItem:(item)=>{dispatch(mealActions.addItem(item))},
		openModal:() =>{dispatch(headerActions.openModal())},
		onSelectItem: (item) =>{dispatch(actions.selectedMenuItemSelector(item))}
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(NutritionInfo);