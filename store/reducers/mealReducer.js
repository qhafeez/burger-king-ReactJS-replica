
const initialState={

	meals:[]



}





const mealReducer = ( state = initialState, action) =>{

	switch(action.type){

		case "ADD_ITEM":

			const  newItemsArray = state.meals.concat(action.item);
			sessionStorage.setItem("meals", JSON.stringify(newItemsArray));


			return{
				...state,
				meals:newItemsArray
			}

		case "REMOVE_ITEM":
				
				const mealArrayCopy =[...state.meals];

				
				const editedMealsArrayCopy =mealArrayCopy.filter(e=>{
					return e.id.toString() !== action.id.toString()
				});

				sessionStorage.setItem("meals", JSON.stringify(editedMealsArrayCopy));

				console.log(editedMealsArrayCopy);




			return{
				...state,
				meals:editedMealsArrayCopy


			}


		case "LOCAL_STORAGE_MY_MEAL":

			return{
				...state,
				meals:action.meals

			}
	

			default:
			 	return state;
	}



	
	//note:remember that a reducer must return the state or the app will not work.
	//it must return either the new, updated state or the old state.

}

export default mealReducer;