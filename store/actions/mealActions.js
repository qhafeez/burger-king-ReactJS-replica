export const  addItem = (menuItem) =>{

	


	return {
		type:"ADD_ITEM",
		item:menuItem
	}


}

export const removeItem = (menuItemId) =>{

	return{
		type:"REMOVE_ITEM",
		id:menuItemId
	}

}

export const localStorageMyMeal = () =>{

	const mealItems = JSON.parse(sessionStorage.getItem("meals"));

	if(mealItems){

		return {

			type:"LOCAL_STORAGE_MY_MEAL",
			meals:mealItems

		}
	}


}