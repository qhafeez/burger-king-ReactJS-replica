import React from "react";
import classes from "./Suggestions.module.css";
import cookie from "../../Assets/images/cookie.jpg";
import fries from "../../Assets/images/fries.jpg";
import sprite from "../../Assets/images/sprite.jpg";


const suggestions =() =>{




	return(

			<section className={classes["suggestions"]}>
				<div className={classes["suggestions-heading-cont"]}>
					<h1>YOU MIGHT ALSO LIKE</h1>
					
				</div>

				<div className={classes["suggestion-items-cont"]}>
					<div className={classes["sugg-item"]}>
						<div>
							<img src={cookie} />
						</div>
						<span>Chocolate Chip Cookies</span>
					</div>
					<div className={classes["sugg-item"]}>
						<div>
							<img src={fries} />
						</div>
						<span>French Fries</span>
					</div>
					<div className={classes["sugg-item"]}>
						<div>
							<img src={sprite} />
						</div>
						<span>Sprite</span>
				</div>
				
			</div>
		

	</section>

		);


}

export default suggestions;