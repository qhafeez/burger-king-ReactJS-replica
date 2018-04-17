import React, { Component } from 'react';
import { Switch, Router, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";


import FrontMenu from "./Components/FrontMenu/FrontMenu";
import Menu from "./Containers/Menu/Menu";
import Footer from "./Containers/Footer/Footer";
import Layout from "./HOC/Layout/Layout"

import Header from "./Containers/Header/Header";
import NutritionInfo from "./Containers/NutritionInfo/NutritionInfo";

import * as actions from "./store/actions/menuAction";
import * as mealActions from "./store/actions/mealActions"
import normalize from "normalize.css";


// import "normalize.css";

class App extends Component {


	componentDidMount(){
		console.log("hello");
	}

	componentWillMount(){
		


		if(sessionStorage.selectedItem){
			this.props.setSelectedItemFromStorage();
		}

		if(sessionStorage.meals){
			this.props.setMealItemsFromStorage();
		}
	}

	
  render() {

  
    return (
     	
     	<Layout>
        
       
       
      <Switch >
      		<Route path="/" exact  component={FrontMenu}/>
        	<Route path="/nutrition/:category/:item" exact  component={NutritionInfo} />
          <Route path="/:id" exact component={Menu} />	
       </Switch>
       
      </Layout>
    );
  }
}


const mapDispatchToProps = dispatch =>{

	return{

		setSelectedItemFromStorage: () =>{dispatch(actions.localStorageSelectedItem())},
		setMealItemsFromStorage: () =>{dispatch(mealActions.localStorageMyMeal())}

	}

}

export default withRouter(connect(null, mapDispatchToProps)(App));
