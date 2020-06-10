import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

const initialState = {

    additionalPrice: 0,

    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },

    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]

}; 

// all the state logic is in here and will happen anytime an action function is called
// whent the reducer returns it is passed into the store in index.js which is then passed as props through the provider hook to App
// This triggers the dom to be updated from the top of the hierarchy and the state flows back down through the rest of the application via props

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                // add to Total
                additionalPrice: state.additionalPrice + action.payload.price,
                // Add to left list
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
                // Remove from right list
                additionalFeatures: state.additionalFeatures.filter(item => {
                    console.log(item)
                    if (item.id !== action.payload.id) {
                        return (item)
                    } return null // null to remove linting error
                })

            }

        case REMOVE_FEATURE:
            return {
                ...state,
                // subtract from Total
                additionalPrice: state.additionalPrice - action.payload.price,
                // remove from left list
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features.filter(item => item.id !== action.payload.id)
                    ]
                },
                // add to right list
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }


        default:
            return state

    }

}