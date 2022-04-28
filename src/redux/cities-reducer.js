const ADD_CITY = "ADD-CITY"
const UPDATE_CITY = "UPDATE-CITY"
const REMOVE_CITY = "REMOVE-CITY"


let initialState = {
    cities: [
        { id: 1, city: "Баку" },
        { id: 2, city: "Белгород" },
        { id: 3, city: "Москва" },
        { id: 4, city: "Курск" },
        { id: 5, city: "Варшава" },
        { id: 6, city: "Воронеж" },
        { id: 7, city: "Белгород" },
    ],
    newCurrentCity: '',
}


const citiesReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_CITY:


            // for (var key in o) {
            //     console.log(key, ':', o[key]);
            //   }

            // Object.keys(state.cities).forEach(function(key) {
            //     // debugger
            //     if (state.newCurrentCity !== this[key].city) {

            //         console.log(key, ':', this[key]);
            //     }

            // }, state.cities);


            let stateCopy = {...state,
                cities: [...state.cities, {
                    id: state.cities.length + 1,
                    city: state.newCurrentCity,
                }],
                newCurrentCity: ''
            }

            return stateCopy

            // let newMessage = {
            //     id: stateCopy.messages.length + 1,
            //     messages: state.newMessageText,
            // }
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageText = ''
        case UPDATE_CITY:
            return {...state, newCurrentCity: action.newCity }
            // stateCopy.newMessageText = action.newText
        case REMOVE_CITY:
            return {...state, cities: state.cities.filter(city => city.id !== action.removeCity) }
            // stateCopy.newMessageText = action.newText
        default:
            return state
    }
}

export const addCityActionCreator = () => ({ type: ADD_CITY })
export const updateCityActionCreator = (city) => ({
    type: UPDATE_CITY,
    newCity: city,
})
export const removeCityActionCreator = (city) => ({
    type: REMOVE_CITY,
    removeCity: city,
})

export default citiesReducer