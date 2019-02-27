import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_PLACE:
       return {
         ...state,
         places: state.places.concat({
            key: Math.random(), 
            value: action.placeName,
            image: placeImage
         })
       }
    case DESELECT_PLACE:
      return {
        ...state,
        places: prevState.places.filter(place => {
          return place.key !== state.selectedPlace.key
        }), 
          selectedPlace: null
       }
    case SELECT_PLACE: 
      return {
        ...state,
        selectedPlace: prevState.places.find(place => {
          return place.key === action.placeKey
        })
      }
    case DELETE_PLACE:
      return{
        ...state,
        selectedPlace: null
      }
    
    default: return state
  }

}
export default reducer