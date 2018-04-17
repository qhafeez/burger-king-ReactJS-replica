import * as actions from "../actions/menuAction";


//chicken images
import baconCheeseCrispy from "../../Assets/images/chicken/small/bacon-cheese-crispy-chicken-sm.jpg";
import baconCheeseCrispyLg from "../../Assets/images/chicken/big/bacon-cheese-crispy-chicken-lg.png";

import bbqBaconCrispy from "../../Assets/images/chicken/small/bbq-bacon-crispy-chicken-sm.jpg";
import bbqBaconCrispyLg from "../../Assets/images/chicken/big/bbq-bacon-crispy-chicken-lg.png";


import bigFishSandwich from "../../Assets/images/chicken/small/big-fish-sandwich-sm.jpg";
import bigFishSandwichLg from "../../Assets/images/chicken/big/big-fish-sandwich-lg.png";


import chickenJr from "../../Assets/images/chicken/small/chicken-jr-sm.jpg";
import chickenJrLg from "../../Assets/images/chicken/big/chicken-jr-lg.png";


import crispyChicken from "../../Assets/images/chicken/small/crispy-chicken-sm.jpg";
import crispyChickenLg from "../../Assets/images/chicken/big/crispy-chicken-lg.png";


import grilledChicken from "../../Assets/images/chicken/small/grilled-chicken-sm.jpg";
import grilledChickenLg from "../../Assets/images/chicken/big/grilled-chicken-lg.png";


import originalChicken from "../../Assets/images/chicken/small/original-chicken-sm.jpg";
import originalChickenLg from "../../Assets/images/chicken/big/original-chicken-lg.png";


import rodeoCrispyChicken from "../../Assets/images/chicken/small/rodeo-crispy-chicken-sm.jpg";
import rodeoCrispyChickenLg from "../../Assets/images/chicken/big/rodeo-crispy-chicken-lg.png";


import spicyChickenJr from "../../Assets/images/chicken/small/spicy-chicken-jr-sm.jpg";
import spicyChickenJrLg from "../../Assets/images/chicken/big/spicy-chicken-jr-lg.png";

//burger images
import doubleQtrLbKing from "../../Assets/images/burgers/small/double-qtr-sm.png";
import doubleQtrLbKingLg from "../../Assets/images/burgers/big/double-qtr-lg.png";


import whopper from "../../Assets/images/burgers/small/whopper-sm.jpg";
import whopperLg from "../../Assets/images/burgers/big/whopper-lg.png";


import qtrPoundKing from "../../Assets/images/burgers/small/qtr-lb-sm.jpg";
import qtrPoundKingLg from "../../Assets/images/burgers/big/qtr-lb-lg.png";


import bbqBaconWhopper from "../../Assets/images/burgers/small/bbq-bacon-whopper-sm.jpg";
import bbqBaconWhopperLg from "../../Assets/images/burgers/big/bbq-bacon-whopper-lg.png";


import doubleWhopper from "../../Assets/images/burgers/small/double-whopper-sm.jpg";
import doubleWhopperLg from "../../Assets/images/burgers/big/double-whopper-lg.png";


import whopperJr from "../../Assets/images/burgers/small/whopper-jr-sm.jpg";
import whopperJrLg from "../../Assets/images/burgers/big/whopper-jr-lg.png";


import hamburger from "../../Assets/images/burgers/small/hamburger-sm.png";
import hamburgerLg from "../../Assets/images/burgers/big/hamburger-lg.png";


import cheeseburger from "../../Assets/images/burgers/small/cheeseburger-sm.png";
import cheeseburgerLg from "../../Assets/images/burgers/big/cheeseburger-lg.png";


import doubleCheeseburger from "../../Assets/images/burgers/small/double-cheeseburger-sm.png";
import doubleCheeseburgerLg from "../../Assets/images/burgers/big/double-cheeseburger-lg.png";


//salad
import chickenClub from "../../Assets/images/salad/small/chicken-club-sm.jpg";
import chickenClubLg from "../../Assets/images/salad/big/chicken-club-lg.png";


import chickenGarden from "../../Assets/images/salad/small/chicken-garden-sm.jpg";
import chickenGardenLg from "../../Assets/images/salad/big/chicken-garden-lg.png";


import gardenSide from "../../Assets/images/salad/small/garden-side-sm.jpg";
import gardenSideLg from "../../Assets/images/salad/big/garden-side-lg.png";


import veggieBurger from "../../Assets/images/salad/small/veggie-burger-sm.png";
import veggieBurgerLg from "../../Assets/images/salad/big/veggie-burger-lg.png";

//beverages
import frozenCoke from "../../Assets/images/beverages/small/frozen-coke-sm.jpg";
import frozenCokeLg from "../../Assets/images/beverages/big/frozen-coke-lg.png";


//breakfast
import fullyLoadedBiscuit from "../../Assets/images/breakfast/small/fully-loaded-sm.jpg";
import fullyLoadedBiscuitLg from "../../Assets/images/breakfast/big/fully-loaded-lg.png";

//sides
import cheesyTots from "../../Assets/images/sides/small/cheesy-tots-sm.png";
import cheesyTotsLg from "../../Assets/images/sides/big/cheesy-tots-lg.png";

//sweets
import twixPie from "../../Assets/images/sweets/small/twix-pie-sm.jpg";
import twixPieLg from "../../Assets/images/sweets/big/twix-pie-lg.png";

//value
import nuggets from "../../Assets/images/value/small/nuggets-sm.jpg"
import nuggetsLg from "../../Assets/images/value/big/nuggets-lg.png"

//kingJrMeals
import jamwich from "../../Assets/images/kingjrmeal/small/jamwich-sm.jpg";
import jamwichLg from "../../Assets/images/kingjrmeal/big/jamwich-lg.png";

//coffee
import coffee from "../../Assets/images/coffee/small/coffee-sm.jpg";
import coffeeLg from "../../Assets/images/coffee/big/coffee-lg.png";




const initialState = {

	mainMenu:true,


	navMenuItems:[

			{
				id:"burgers",
				title:"BURGERS",
				image: whopper
			},
			{
				id:"chicken",
				title:"CHICKEN & MORE",
				image:originalChicken
			},
			{
				id:"salad",
				title:"SALADS & VEGGIES",
				image:chickenClub
			},
			{
				id:"beverages",
				title:"BEVERAGES",
				image:frozenCoke
			},
			{
				id:"breakfast",
				title:"BREAKFAST",
				image:fullyLoadedBiscuit
			},
			{
				id:"sides",
				title:"SIDES",
				image:cheesyTots
			},
			{
				id:"sweets",
				title:"SWEETS",
				image:twixPie
			},
			{
				id:"value",
				title:"VALUE MENU",
				image:nuggets
			},
			{
				id:"kingjr",
				title:"KING JR MEALS",
				image:jamwich
			},
			{
				id:"coffee",
				title:"COFFEE & FRAPPES",
				image:coffee
			}

			



	],
	categories:{
				chicken:{
						title:"Chicken & More",

						items:{
							RodeoCrispyChicken:{
								name:"Rodeo Crispy Chicken",
								category:"chicken",
								image:{
										small:rodeoCrispyChicken,
										big:rodeoCrispyChickenLg
									},
									type:"checkbox",
									ingredients:{
										onionRings:{
											name:"Onion Rings",
											info:{
												gramsFat:4.5,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:240,
												gramsCarbs:12,
												gramsFiber:0.5,
												gramsSugar:1,
												gramsProtein:1
											},
											included:true

										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:7,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:360,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:4
											},
											included:true
										},
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true
										},
										bbqSauce:{
											name:"BBQ Sauce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:110,
												gramsCarbs:6,
												gramsFiber:0,
												gramsSugar:6,
												gramsProtein:0
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:24,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:180,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										potatoBun:{
											name:"Potato Bun",
											info:{
												gramsFat:3,
												gramsSatFat:0.5,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:330,
												gramsCarbs:37,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:6
											},
											included:true
										},
										bacon:{
											name:"Bacon",
											info:{
												gramsFat:8,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:20,
												mgSodium:450,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:5
											},
											included:true
										}
									}
							},
							BbqBaconCrispyChickenSandwich:{
								name:"BBQ Bacon Crispy Chicken Sandwich",
								category:"chicken",
								image:{
										small:bbqBaconCrispy,
										big:bbqBaconCrispyLg
									},
									type:"checkbox",
									ingredients:{
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true

										},
										bbqSauce:{
											name:"BBQ Sauce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:110,
												gramsCarbs:6,
												gramsFiber:0,
												gramsSugar:6,
												gramsProtein:0
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:24,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:180,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										potatoBun:{
											name:"Potato Bun",
											info:{
												gramsFat:3,
												gramsSatFat:0.5,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:330,
												gramsCarbs:37,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:6
											},
											included:true
										},
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},									
										bacon:{
											name:"Bacon",
											info:{
												gramsFat:8,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:20,
												mgSodium:450,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:5
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							},
							CrispyChickenSandiwch:{
								name:"Crispy Chicken Sandwich",
								category:"chicken",
								image:{
									small:crispyChicken,
									big:crispyChickenLg
								},
								type:"checkbox",
								ingredients:{
										
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:24,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:180,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										potatoBun:{
											name:"Potato Bun",
											info:{
												gramsFat:3,
												gramsSatFat:0.5,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:330,
												gramsCarbs:37,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:6
											},
											included:true
										},
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},									
										
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							},				
							BaconCheeseCrispyChickenSandwich:{
								name:"Bacon & Cheese Crispy Chicken Sandwich",
								category:"chicken",
								image:{
									small:baconCheeseCrispy,
									big:baconCheeseCrispyLg
								},
								type:"checkbox",
								ingredients:{
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:7,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:360,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:4
											},
											included:true
										},
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:24,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:180,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										potatoBun:{
											name:"Potato Bun",
											info:{
												gramsFat:3,
												gramsSatFat:0.5,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:330,
												gramsCarbs:37,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:6
											},
											included:true
										},
										bacon:{
											name:"Bacon",
											info:{
												gramsFat:4,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:230,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:3
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										}
									}
							},
							GrilledChickenSandwich:{
								name:"Grilled Chicken Sandwich",
								category:"chicken",
								image:{
									small:grilledChicken,
									big:grilledChickenLg
								},
								type:"checkbox",
								ingredients:{
										
										grilledChickenFilet:{
											name:"Grilled Chicken Filet",
											info:{
												gramsFat:14,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:50,
												mgSodium:560,
												gramsCarbs:16,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:16
											},
											included:true
										},
										potatoBun:{
											name:"Potato Bun",
											info:{
												gramsFat:2.5,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:360,
												gramsCarbs:38,
												gramsFiber:1,
												gramsSugar:5,
												gramsProtein:6
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:12,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:5,
												mgSodium:90,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										
										
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},									
										
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							},
							OriginalChickenSandwich:{
								name:"Original Chicken Sandwich",
								category:"chicken",
								image:{
									small:originalChicken,
									big:originalChickenLg
								},
								type:"checkbox",
								ingredients:{
										
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:13,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:60,
												mgSodium:580,
												gramsCarbs:9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:21
											},
											included:true
										},
										toastedHoagieBun:{
											name:"Toasted Hoagie Bun",
											info:{
												gramsFat:3,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:38,
												gramsFiber:2,
												gramsSugar:4,
												gramsProtein:7
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:24,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:180,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							},
							BigFishSandwich:{
								name:"Big Fish Sandwich",
								category:"chicken",
								image:{
									small:bigFishSandwich,
									big:bigFishSandwichLg
								},
								type:"checkbox",
								ingredients:{
										
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:30,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										briocheBun:{
											name:"Brioche Style Bun",
											info:{
												gramsFat:2.5,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:310,
												gramsCarbs:33,
												gramsFiber:1,
												gramsSugar:5,
												gramsProtein:5
											},
											included:true
										},
										tartarSauce:{
											name:"Tartar Sauce",
											info:{
												gramsFat:18,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:210,
												gramsCarbs:2,
												gramsFiber:0,
												gramsSugar:2,
												gramsProtein:0
											},
											included:true
										},
																			
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										premiumAlaskanFishPatty:{
											name:"Premium Alaskan Fish Patty",
											info:{
												gramsFat:7,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:630,
												gramsCarbs:15,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:10
											},
											included:true
										}

									}
							},
							ChickenJr:{
								name:"Chicken Jr.",
								category:"chicken",
								image:{
									small:chickenJr,
									big:chickenJrLg
								},
								type:"checkbox",
								ingredients:{
										
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:11,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:20,
												mgSodium:440,
												gramsCarbs:11,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:7
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:18,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:140,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							},
							SpicyChickenJr:{
								name:"Spicy Chicken Jr.",
								category:"chicken",
								image:{
									small:spicyChickenJr,
									big:spicyChickenJrLg
								},
								type:"checkbox",
								ingredients:{
										
										crispyChickenPatty:{
											name:"Crispy Chicken Patty",
											info:{
												gramsFat:11,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:20,
												mgSodium:440,
												gramsCarbs:11,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:7
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										},
										creamySpicySauce:{
											name:"Creamy Spicy Sauce",
											info:{
												gramsFat:9,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:100,
												gramsCarbs:3,
												gramsFiber:0,
												gramsSugar:1,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
									}
							}
						}
					},

				burgers:{
						
						title:"Flame Grilled Burgers",

						items:{	
							doubleQuarterPounderKing:{
								name:"Double Quarter Pounder King",
								category:"burgers",
								image:{
									small:doubleQtrLbKing,
									big:doubleQtrLbKingLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										whopperPatty2:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										mustard:{
											name:"Mustard",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:115,
												gramsCarbs:0.9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:13,
												gramsSatFat:8,
												gramsTransFat:0.5,
												mgCholesterol:45,
												mgSodium:710,
												gramsCarbs:3,
												gramsFiber:0,
												gramsSugar:0.5,
												gramsProtein:9
											},
											included:true
										},
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:4,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:42,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:7
											},
											included:true
										}
									}
							},
							whopper:{
								name:"Whopper Sandwich",
								category:"burgers",
								image:{
									small:whopper,
									big:whopperLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:18,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:140,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:4,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:42,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:7
											},
											included:true
										}
									} 
							},
							quarterPoundKing:{
								name:"Quarter Pound King",
								category:"burgers",
								image:{
									small:qtrPoundKing,
									big:qtrPoundKingLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										mustard:{
											name:"Mustard",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:115,
												gramsCarbs:0.9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:7,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:360,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:4
											},
											included:true
										},
																
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:4,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:42,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:7
											},
											included:true
										}
									}
							},
							bbqBaconWhopper:{
								name:"BBQ Bacon Whopper Sandwich",
								category:"burgers",
								image:{
									small:bbqBaconWhopper,
									big:bbqBaconWhopperLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										bbqSauce:{
											name:"BBQ Sauce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:110,
												gramsCarbs:6,
												gramsFiber:0,
												gramsSugar:6,
												gramsProtein:0
											},
											included:true
										},
										
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:7,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:360,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:4
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
																
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:4,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:42,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:7
											},
											included:true
										},
										bacon:{
											name:"Bacon",
											info:{
												gramsFat:8,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:20,
												mgSodium:450,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:5
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										}
									}

									},
							
							doubleWhopper:{
								name:"Double Whopper Sandwich",
								category:"burgers",
								image:{
									small:doubleWhopper,
									big:doubleWhopperLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										whopperPatty2:{
											name:"WHOPPER Beef Patty",
											info:{
												gramsFat:18,
												gramsSatFat:8,
												gramsTransFat:1,
												mgCholesterol:80,
												mgSodium:70,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:20
											},
											included:true
										},
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:18,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:140,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:4,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:410,
												gramsCarbs:42,
												gramsFiber:1,
												gramsSugar:6,
												gramsProtein:7
											},
											included:true
										}
									} 
							},
							whopperJr:{
								name:"Whopper Jr. Sandwich",
								category:"burgers",
								image:{
									small:whopper,
									big:whopperLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"Beef Patty",
											info:{
												gramsFat:8,
												gramsSatFat:3.5,
												gramsTransFat:0.5,
												mgCholesterol:35,
												mgSodium:30,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:9
											},
											included:true
										},
										
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:8,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:4,
												mgSodium:60,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:2,
												gramsFiber:0,
												gramsSugar:2,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										}
									} 

							},
							hamburger:{
								name:"Hamburger",
								category:"burgers",
								image:{
									small:hamburger,
									big:hamburgerLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"Beef Patty",
											info:{
												gramsFat:8,
												gramsSatFat:3.5,
												gramsTransFat:0.5,
												mgCholesterol:35,
												mgSodium:30,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:9
											},
											included:true
										},
										mustard:{
											name:"Mustard",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:115,
												gramsCarbs:0.9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										}
									} 
							},
							cheeseburger:{
								name:"Cheeseburger",
								category:"burgers",
								image:{
									small:cheeseburger,
									big:cheeseburger
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"Beef Patty",
											info:{
												gramsFat:8,
												gramsSatFat:3.5,
												gramsTransFat:0.5,
												mgCholesterol:35,
												mgSodium:30,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:9
											},
											included:true
										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:3.5,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:180,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:2
											},
											included:true
										},
										mustard:{
											name:"Mustard",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:115,
												gramsCarbs:0.9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										}
									} 
							},
							doubleCheeseburger:{
								name:"Double Cheeseburger",
								category:"burgers",
								image:{
									small:doubleCheeseburger,
									big:doubleCheeseburgerLg
								},
								type:"checkbox",
								ingredients:{
										
										whopperPatty1:{
											name:"Beef Patty",
											info:{
												gramsFat:16,
												gramsSatFat:7,
												gramsTransFat:1,
												mgCholesterol:70,
												mgSodium:60,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:17
											},
											included:true
										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:3.5,
												gramsSatFat:2,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:180,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:2
											},
											included:true
										},
										mustard:{
											name:"Mustard",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:115,
												gramsCarbs:0.9,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:4,
												gramsFiber:0,
												gramsSugar:3,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										}
									} 
							}
						}

					},
				
				salad:{

					title:"Salad & Veggies",

					items:{
						chickenGarden:{
							name:"Chicken Garden Salad",
							category:"salad",
							image:{
								small:chickenGarden,
								big:chickenGardenLg
							},
							type:"radio",
							ingredients:{
										
										grill:{
											name:"Grill",
											info:{
												gramsFat:33,
												gramsSatFat:9,
												gramsTransFat:0,
												mgCholesterol:120,
												mgSodium:1210,
												gramsCarbs:17,
												gramsFiber:7,
												gramsSugar:5,
												gramsProtein:40
											},
											included:true
										},
										crisp:{
											name:"Crisp",
											info:{
												gramsFat:42,
												gramsSatFat:10,
												gramsTransFat:0,
												mgCholesterol:90,
												mgSodium:1370,
												gramsCarbs:33,
												gramsFiber:3,
												gramsSugar:5,
												gramsProtein:26
											},
											included:false
										}
									}
						},
						chickenClub:{
							name:"Chicken Club Salad",
							category:"salad",
							image:{
								small:chickenClub,
								big:chickenClubLg
							},
							type:"radio",
							ingredients:{
										
										grill:{
											name:"Grill",
											info:{
												gramsFat:41,
												gramsSatFat:12,
												gramsTransFat:0,
												mgCholesterol:140,
												mgSodium:1660,
												gramsCarbs:18,
												gramsFiber:7,
												gramsSugar:6,
												gramsProtein:46
											},
											included:true
										},
										crisp:{
											name:"Crisp",
											info:{
												gramsFat:51,
												gramsSatFat:13,
												gramsTransFat:0,
												mgCholesterol:110,
												mgSodium:1820,
												gramsCarbs:33,
												gramsFiber:3,
												gramsSugar:6,
												gramsProtein:32
											},
											included:false
										}
									}
						},
						veggieBurger:{
							name:"MorningStar Veggie Burger",
							category:"salad",
							image:{
								small:veggieBurger,
								big:veggieBurgerLg
							},
							type:"checkbox",
							ingredients:{
										
										veggiePatty:{
											name:"MorningStar Farms Veggie Patty",
											info:{
												gramsFat:6,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:540,
												gramsCarbs:13,
												gramsFiber:3,
												gramsSugar:2,
												gramsProtein:17
											},
											included:true
										},
										
										mayo:{
											name:"Mayonnaise",
											info:{
												gramsFat:9,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:4,
												mgSodium:60,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										onions:{
											name:"Onions",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										ketchup:{
											name:"Ketchup",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:135,
												gramsCarbs:2,
												gramsFiber:0,
												gramsSugar:2,
												gramsProtein:0
											},
											included:true
										},
										pickles:{
											name:"Pickles",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:55,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sesameSeedBun:{
											name:"Sesame Seed Bun",
											info:{
												gramsFat:2,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:200,
												gramsCarbs:23,
												gramsFiber:0.5,
												gramsSugar:4,
												gramsProtein:4
											},
											included:true
										}
									} 
						},
						gardenSide:{
							name:"Garden Side Salad",
							category:"salad",
							image:{
								small:gardenSide,
								big:gardenSideLg
							},
							type:"checkbox",
							ingredients:{
										
										shreddedCheese:{
											name:"Shredded Cheese",
											info:{
												gramsFat:4,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:10,
												mgSodium:90,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:3
											},
											included:true
										},
										lettuce:{
											name:"Lettuce",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:5,
												gramsCarbs:2,
												gramsFiber:0.5,
												gramsSugar:1,
												gramsProtein:1
											},
											included:true
										},
										tomatoes:{
											name:"Tomatoes",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										}
									}
						}
					}

				},
				beverages:{
					title:"Beverages",
					type:"radio",
					items:{
						frozenCoke:{
							name:"Coke ICEE",
							category:"beverages",
							image:{
								small:frozenCoke,
								big:frozenCokeLg
							},
							ingredients:{
										
										twelve:{
											name:"12",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:10,
												gramsCarbs:30,
												gramsFiber:0,
												gramsSugar:30,
												gramsProtein:0
											},
											included:true
										},
										sixteen:{
											name:"16",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:10,
												gramsCarbs:40,
												gramsFiber:0,
												gramsSugar:40,
												gramsProtein:0
											},
											included:false
										},
										twenty:{
											name:"20",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:10,
												gramsCarbs:60,
												gramsFiber:0,
												gramsSugar:60,
												gramsProtein:0
											},
											included:false
										},
										thirty:{
											name:"30",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:10,
												gramsCarbs:80,
												gramsFiber:0,
												gramsSugar:80,
												gramsProtein:0
											},
											included:false
										}

									}
						}
					}
				},
				breakfast:{
					title:"Breakfast",
					
					items:{

						fullyLoadedBiscuit:{
							name:"Fully Loaded Biscuit",
							category:"breakfast",
							image:{
								small:fullyLoadedBiscuit,
								big:fullyLoadedBiscuitLg
							},
							type:"checkbox",
							ingredients:{
										
										buttermilkBiscuit:{
											name:"Buttermilk Biscuit",
											info:{
												gramsFat:13,
												gramsSatFat:8,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:710,
												gramsCarbs:27,
												gramsFiber:0.5,
												gramsSugar:2,
												gramsProtein:4
											},
											included:true
										},
										eggs:{
											name:"Eggs",
											info:{
												gramsFat:4,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:150,
												mgSodium:210,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:6
											},
											included:true
										},
										bacon:{
											name:"Bacon",
											info:{
												gramsFat:3,
												gramsSatFat:1,
												gramsTransFat:0,
												mgCholesterol:5,
												mgSodium:150,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:2
											},
											included:true
										},
										sausage:{
											name:"Sausage",
											info:{
												gramsFat:15,
												gramsSatFat:5,
												gramsTransFat:0,
												mgCholesterol:35,
												mgSodium:320,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:7
											},
											included:true
										},
										ham:{
											name:"Ham",
											info:{
												gramsFat:1,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:15,
												mgSodium:420,
												gramsCarbs:0.5,
												gramsFiber:0,
												gramsSugar:0.5,
												gramsProtein:5
											},
											included:true
										},
										americanCheese:{
											name:"American Cheese",
											info:{
												gramsFat:7,
												gramsSatFat:4,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:360,
												gramsCarbs:1,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:4
											},
											included:true
										}

									}
						}

					}
				},
				sides:{
					title:"Sides",
					
					items:{

						cheesyTots:{
							name:"Cheesy Tots",
							category:"sides",
							image:{
								small:cheesyTots,
								big:cheesyTotsLg
							},
							type:"checkbox",
							ingredients:{
										
										cheesyTots:{
											name:"Cheesy Tots",
											info:{
												gramsFat:15,
												gramsSatFat:4.5,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:780,
												gramsCarbs:34,
												gramsFiber:3,
												gramsSugar:0.5,
												gramsProtein:9
											},
											included:true
										}
									}
						}

					}
				},
				sweets:{
					title:"Sweets",
					type:"checkbox",
					items:{
						twixPie:{
							name:"Twix Pie",
							category:"sweets",
							image:{
								small:twixPie,
								big:twixPieLg
							},
							
							ingredients:{
										
										twixPir:{
											name:"Pie made with TWIX",
											info:{
												gramsFat:20,
												gramsSatFat:13,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:330,
												gramsCarbs:45,
												gramsFiber:0.5,
												gramsSugar:30,
												gramsProtein:4
											},
											included:true
										}
									}

						}
					}

				},
				value:{
					title:"Value",
					type:"radio",
					items:{

						nuggets:{
							name:"Nuggets",
							category:"value",
							image:{
								small:nuggets,
								big:nuggetsLg
							},
						
								ingredients:{
										
										four:{
											name:"4",
											info:{
												gramsFat:11,
												gramsSatFat:1.5,
												gramsTransFat:0,
												mgCholesterol:25,
												mgSodium:310,
												gramsCarbs:11,
												gramsFiber:0.5,
												gramsSugar:0,
												gramsProtein:8
											},
											included:true
										},
										six:{
											name:"6",
											info:{
												gramsFat:16,
												gramsSatFat:2.5,
												gramsTransFat:0,
												mgCholesterol:35,
												mgSodium:470,
												gramsCarbs:16,
												gramsFiber:1,
												gramsSugar:0,
												gramsProtein:12
											},
											included:false
										},
										ten:{
											name:"10",
											info:{
												gramsFat:27,
												gramsSatFat:4.5,
												gramsTransFat:0,
												mgCholesterol:55,
												mgSodium:780,
												gramsCarbs:27,
												gramsFiber:2,
												gramsSugar:0,
												gramsProtein:20
											},
											included:false
										},
										twenty:{
											name:"20",
											info:{
												gramsFat:54,
												gramsSatFat:9,
												gramsTransFat:0,
												mgCholesterol:115,
												mgSodium:1570,
												gramsCarbs:53,
												gramsFiber:3,
												gramsSugar:0.5,
												gramsProtein:39
											},
											included:false
										}

									}			
								}
							}
					},
				
				kingjr:{
					title:"King Jr. Meals",

					type:"checkbox",
					items:{
						jamwich:{
							name:"Jamwich",
							category:"kingjr",
							image:{
								small:jamwich,
								big:jamwichLg
							},
						
						ingredients:{
										
										jamwich:{
											name:"PB&J Jamwich",
											info:{
												gramsFat:16,
												gramsSatFat:3,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:290,
												gramsCarbs:33,
												gramsFiber:4,
												gramsSugar:11,
												gramsProtein:11
											},
											included:true
										}
									}
								}
					}
				},
				coffee:{
					title:"Coffee & Frappes",
					type:"radio",
					items:{

						coffee:{
							name:"Coffee",
							category:"coffee",
							image:{
								small:coffee,
								big:coffeeLg
							},
							ingredients:{
										
										twelve:{
											name:"12",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:true
										},
										sixteen:{
											name:"16",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:false
										},
										twenty:{
											name:"20",
											info:{
												gramsFat:0,
												gramsSatFat:0,
												gramsTransFat:0,
												mgCholesterol:0,
												mgSodium:0,
												gramsCarbs:0,
												gramsFiber:0,
												gramsSugar:0,
												gramsProtein:0
											},
											included:false
										}
									}
						}
					}
				



				}
			},

			selected:"burgers",
			selectedItem:null


}



const reducer = ( state = initialState, action) =>{

	switch(action.type){

		case "MAIN_MENU_TOGGLE":

			
			return{

				...state,
				mainMenu:action.status

			}

		case "SELECTED_CATEGORY_SELECTOR":

			sessionStorage.setItem("selectedCategory", action.selectedCategory);
			console.log("reducer");
			return{

				...state,
				selected:action.selectedCategory

			}

		case "SELECTED_MENU_ITEM_SELECTOR":

			const itemObjectCopy = {
				...state.categories[state.selected].items[action.selectedItem]
			}
			console.log(itemObjectCopy);
			let individualIngredientCopies={};
			for (let ingredient in itemObjectCopy.ingredients){

				individualIngredientCopies[ingredient] = {...itemObjectCopy.ingredients[ingredient]}

			}
			
			itemObjectCopy.ingredients = individualIngredientCopies;
			
			console.log(itemObjectCopy);



			sessionStorage.setItem("selectedItem", JSON.stringify(itemObjectCopy));
			return{

				...state,
				selectedItem:itemObjectCopy
			}

		case "LOCAL_STORAGE_SELECTED_ITEM":

			const selectedItem = action.selectedItem;
			const selectedCategory =action.selected;
			return{
				...state,
				selected:selectedCategory,
				selectedItem:selectedItem

			}
		case "INCLUDE_EXCLUDE_INGREDIENT":

			const ingredient = action.ingredient;
			const selectedItemCopy = {
				...state.selectedItem
			}

			
			if(selectedItemCopy.type === "checkbox"){
				selectedItemCopy.ingredients[ingredient].included=!selectedItemCopy.ingredients[ingredient].included;
			} else{

				Object.keys(selectedItemCopy.ingredients).map(ing =>{

	selectedItemCopy.ingredients[ing] !== selectedItemCopy.ingredients[ingredient] ? selectedItemCopy.ingredients[ing].included=false :selectedItemCopy.ingredients[ing].included=true;
					
				})

			}

			return {
				...state,
				selectedItem:selectedItemCopy
			}

			default:
			 	return state;
	}



	
	//note:remember that a reducer must return the state or the app will not work.
	//it must return either the new, updated state or the old state.

}

export default reducer;