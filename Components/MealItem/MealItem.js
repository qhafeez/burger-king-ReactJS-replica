import React from "react";
import classes from "./MealItem.module.css";
import Aux from "../../HOC/Aux.js";

const MealItem = (props) =>{

	let removeButton=null;
	let nameStyle=null;
	let calorieStyle=null;

	if(props.populated){

		nameStyle={	width:'80%'}

		calorieStyle={	width:'20%'	}

		removeButton = (
				<div data-id={props.id} className={classes["remove-button"]} onClick={(event)=>{props.clicked(event)}}><span >X</span></div>
			);

	}

	return( 			
					<div className={classes['item-cont']}>
								
						<div  style={nameStyle} className={classes["item-name"]}>{removeButton}	{props.itemName}</div>
						<div style={calorieStyle} className={classes["item-calories"]}>{props.itemCalories}</div>
					</div>
			)

}

export default MealItem;