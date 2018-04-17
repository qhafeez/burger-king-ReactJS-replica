import React, { Component } from "react";
import classes from "./MyMealSummary.module.css";
import MealItem from "../MealItem/MealItem";
import * as mealActions from "../../store/actions/mealActions";
import {connect} from "react-redux";

class MyMealSummary extends Component{

	removeMealItem = (event) =>{

		const id = event.currentTarget.dataset.id;
		console.log(typeof(id));
		this.props.removeItem(id);


	}




render(){



	let mealItems = null;
	let totalCalories = 0;

	let totalTitleStyle, totalCaloriesStyle = null;

	if(this.props.mealItems.length <1){

		mealItems = <MealItem populated={false} itemName="No Items" itemCalories="0" />

	} else{

			 totalTitleStyle={width:"80%"};
			 totalCaloriesStyle={width:"20%"};

		 totalCalories = this.props.mealItems.map(item =>{

			return item.calories;

		}).reduce((total, currentItem) =>{

			return total + currentItem;

		});
		console.log(totalCalories);

		mealItems = this.props.mealItems.map(item =>{

			return <MealItem key={item.id} 
							 id={item.id} 
							 populated={true} 
							 itemName={item.name} 
							 itemCalories={item.calories}
							 clicked={this.removeMealItem}
							  />

		})

	}


	return(

			<div className={classes["summary-container"]}>
				<div className={classes["summary-header"]}>
					<div className={classes["my-meal"]}>MY MEAL</div>
					<div onClick={this.props.modalClosed} className={classes["close-button"]}>X</div>

				</div>
				<div className={classes["summary-body"]}>
					<div className={classes["instructions"]}></div>
					<div className={classes["column-titles"]}>
						<div className={classes["title"]}>Item</div>
						<div className={classes["title"]}>Calories</div>
					</div>
					<div className={classes["items"]}>
						

						{mealItems}


					</div>
					<div className={classes["total-cont"]}>
						<div style={totalTitleStyle} className={classes["total-item"]}>
							<span>Total</span>
						</div>
						<div style={totalCaloriesStyle} className={[classes["total"], classes["total-item"]].join(" ")}>
							{totalCalories}
						</div>

					</div>
				</div>
				<div className={classes["summary-footer"]}></div>



			</div>


		)
}



}


const mapStateToProps = state =>{

	return{

		mealItems:state.meal.meals

	}

}


const mapDispatchToProps = dispatch =>{

	return{

		removeItem: (id) => {dispatch(mealActions.removeItem(id))}

	}

}


export default connect(mapStateToProps, mapDispatchToProps)(MyMealSummary);