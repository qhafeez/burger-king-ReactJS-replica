import React, { Component } from "react";
import classes from "./Footer.module.css";
import FooterItem from "../../Components/FooterItem/FooterItem";
	

class Footer extends Component{


	componentDidMount(){

		this.resizeHandler();
		
		window.addEventListener("resize", this.resizeHandler);

	}

	state={

		footerItems:{
					
					bkcInfo:{
						name:"BKC INFO",
						subItems:[
							"About BK", 
							"Food Quality", 
							"Prepared to Order",
							"News & Press",
							"Investor Relations",
							"Franchising",
							"International"
							],
						visible:false
					},

					myBK:{
						name:"MY BK",
						subItems:[
							"BK App",
							"BK Delivers",
							"Gift Cards/ Crown Cards",
							"Reload Card",
							"Check Card Balance"
							],
						visible:false
					},

					careers:{
						name:"CAREERS",
						subItems:[
							"Bring It @ BKC",
							"Opportunities",
							"Locations",
							"What's New",
							"Apply"
						],
						visible:false
					},

					bkCares:{
						name:"BK CARES",
						subItems:[
							"Nutrition Information",
							"Allergens",
							"Privacy",
							"Responsbility",
							"BK McLamore Foundation",
							"Diversity"
						],
						visible:false
					}
			},

			wide:false
		}


		footerSubMenuToggle = (event, itemName) =>{

				

			

			const updatedFooterItems = {

				...this.state.footerItems
			};

			console.log(updatedFooterItems);

			const updatedSingleItem = {

				...this.state.footerItems[itemName]
			}
			console.log(updatedSingleItem.visible);
			updatedSingleItem.visible = !this.state.footerItems[itemName].visible; 


			updatedFooterItems[itemName] = updatedSingleItem;


			console.log(updatedSingleItem);
			console.log(updatedFooterItems);

			this.setState({

				footerItems: updatedFooterItems

			})
			

		}

		resizeHandler = () =>{

			const updatedFooterItems = {
				...this.state.footerItems
			}


			

			if(window.innerWidth > 768){

				for(let key in updatedFooterItems){

				updatedFooterItems[key].visible=true;
				this.setState({
					footerItems: updatedFooterItems
				})

			}
		} else{

			for(let key in updatedFooterItems){

				updatedFooterItems[key].visible=false;
				this.setState({
					footerItems: updatedFooterItems
				})

		}
	}
}
				

			 

		

	



	render() {

	


				const footerItemsArray =[];
			for (let key in this.state.footerItems){

				footerItemsArray.push({
					id:key,
					footerItem: this.state.footerItems[key]
				})

			}

		const items = (	
				<ul className={classes["footer-ul"]}>

			{	footerItemsArray.map(item =>{


					


				return <FooterItem key={item.id} 
						title={item.footerItem.name} 
						subItems={item.footerItem.subItems} 
						clicked={(event)=>{this.footerSubMenuToggle(event, item.id)}} 
						visible={item.footerItem.visible}
						wide={this.state.wide}/>

			})
		}
					</ul>

			)

			

			/* 
				*/
		


			return(

			<section className={classes["footer"]} >
			
							
										
						{items}

		

				<div className={classes["end-container"]}>
							
						<div className={classes["bk"]}>BURGER KING</div>
						<div className={classes["legal-stuff"]}>TM &amp; Copyright 2017 Burger King Corporation. All Rights Reserved.</div>
						<div className={classes["links"]}>
							<span>Policies</span>
							<span>Legal</span>
							<span>Contact Us</span>
							<span>Sitemap</span>
						</div>

						<div className={classes["back-to-top"]}>
								
							<a href="#"><span>BACK TO THE TOP</span></a>
						</div>
				</div>
				
			</section>

)




		}


}


export default Footer;

