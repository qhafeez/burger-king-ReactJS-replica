import React from "react";
import classes from "./Checkbox.module.css";


const checkbox =(props) =>{

	let inputItem = null;

	if(props.inputType === "checkbox"){

		inputItem = (<input onChange={props.changed} 
							key={props.id} 
							type="checkbox"  
							value={props.id}  defaultChecked/>
					);

	} else {


		inputItem = (<input onChange={props.changed} 
							key={props.id} 
							type="radio" 
							name="options" 
							value={props.id} checked={props.selectedStatus}/>
					);
	}


	return (

			<div key={props.id}className={classes["checkbox-container"]}>
				
				<label  htmlFor={props.id}>
					{inputItem}
					</label>    {props.ingredientName}
				</div>
				

		)


}

export default checkbox;