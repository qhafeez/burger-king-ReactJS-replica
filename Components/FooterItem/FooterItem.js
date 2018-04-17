import React from "react";
import classes from "./FooterItem.module.css";

const footerItem = (props) =>{

	const style = props.visible ? {display:"block"} : {display:"none"};

	const listItems = props.subItems.map(item =>{

		return <li  key={item}>{item}</li>
	})

	return(

			<li className={classes["footer-ul-li"]}>
				<h4 id="bkc-info" className={classes["footer-links"]}>
					<span>{props.title}</span><span onClick={props.clicked} className={classes["footer-subnav"]} data-glyph="plus">+</span>
				</h4>
				<div style={style} className={classes["footer-sub-ul-container"]}>
					<ul    className={classes["footer-sub-ul"]}>
						
							{listItems}
							
						
					</ul>
				</div>

			</li>



		);


}

export default footerItem;