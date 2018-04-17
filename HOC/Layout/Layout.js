import React, {Component} from "react";
import {withRouter} from "react-router-dom";


import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import Aux from "../Aux";

import classes from './Layout.module.css';

import { connect } from "react-redux";



class Layout extends Component {

	

	

	render() {

		return( 
			<Aux>

				<Header />
				<main className={classes.Content}>
					
					{this.props.children}

				</main>
				<Footer />
				
			</Aux>
			)
}

}




export default Layout;

