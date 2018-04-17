import React from "react";
import classes from "./MenuItem.module.css";
import {Link} from "react-router-dom";

const menuItem = (props) =>{


	let link = null;

	if (props.main===true){

		link = "/"+props.category;
	} else{

		link ="/nutrition/"+props.category+"/" + props.menuItemName;

	}



	return(
			
				<div onClick={props.clicked} className={classes['food-item']} key={props.menuItemName}  data-id={props.menuItemName} >
				<Link style={{textDecoration:"none", color:"black"}} to={link}>
					<div className={classes["inner"]}>
					<div className={classes["pic-and-title-container"]}>
							
						<div className={classes["pic-container"]}>
							<img src={props.menuItemImage} />
						</div>
						<div className={classes["title-container"]}>
							<span>{props.title}</span>
						</div>

					</div>
				</div>
				</Link>		
				</div>
			

			


		)


}

export default menuItem;