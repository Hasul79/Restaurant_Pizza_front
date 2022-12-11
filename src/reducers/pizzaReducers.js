export const getAllPizzasReducer=(state={pizzas: [], allPizzas: []}, action)=>{

  switch(action.type){
    case 'GET_PIZZAS_REQUEST': 
    return{
      loading: true,
        ...state
    }
    case 'GET_PIZZAS_SUCCESS': 
    return{
      loading: false,
        pizzas: action.payload,
        allPizzas: action.payload
    }
    case 'GET_PIZZAS_FAILED': 
    return{
        error: action.payload,
        loading: false
    }

    case "FILTERED_PIZZAS":
      return{
        ...state,
        pizzas: action.payload
      }

    default: return state
  }  
}