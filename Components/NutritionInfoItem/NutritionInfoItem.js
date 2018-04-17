import React from "react";
import classes from "./NutritionInfoItem.module.css";

const nutritionInfoItem = (props) =>{

	return (

		<div className={classes["ind-info"]}>
					<div className={classes["label"]}>
						<h5>{props.property}</h5>
					</div>
					<span className={classes["value"]}>
						<h5 className={classes["calories"]}>{props.value}</h5>
					</span>
				</div>

		)

}

export default nutritionInfoItem;