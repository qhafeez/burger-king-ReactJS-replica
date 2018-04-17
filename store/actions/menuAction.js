
export const mainMenuToggle = (status) =>{

	return{

		type:"MAIN_MENU_TOGGLE",
		status:status

	}

}


export const selectedCategorySelector = (category) =>{
	console.log("reducer");

	return {

		type:"SELECTED_CATEGORY_SELECTOR",
		selectedCategory:category

	}
}

export const selectedMenuItemSelector = (selectedItem) =>{

	return{

		type:"SELECTED_MENU_ITEM_SELECTOR",
		selectedItem: selectedItem

	}

}

export const localStorageSelectedItem = () =>{

	const selectedItemInStorage = JSON.parse(sessionStorage.getItem("selectedItem"));
	let selectedCategoryInStorage = sessionStorage.getItem("selectedCategory");

	if (selectedCategoryInStorage === null){
		selectedCategoryInStorage = "burgers";
	}
	console.log("hello");



		return{

			type:"LOCAL_STORAGE_SELECTED_ITEM",
			selected:selectedCategoryInStorage,
			selectedItem:selectedItemInStorage

		}

	

}

export const includeExcludeIngredient = (ingredient) =>{

	return{
		type:"INCLUDE_EXCLUDE_INGREDIENT",
		ingredient:ingredient
	}


}