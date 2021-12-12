
import jwt_decode from "jwt-decode";

const initState = {
    myBalance: 0, 
    token: "",
    pooladdress: "",
}

const sessionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_MYBALANCE':
            return {
                ...state,
                myBalance: action.payload
            }
        case 'SET_TOKEN':
            try {
                var userDecoded = jwt_decode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    balance: userDecoded.balance,
                }
            }catch(err){
                return {
                    ...state,
                    token: "invalid",
                    myBalance: 0,
                }
            }
        case 'SET_POOLADDRESS':
            return {
                ...state,
                pooladdress: action.payload
            }
        case 'SET_TOTALBET':
            return {
                ...state,
                totalBet: action.payload
            }
        default:
            return state
    }
}

export default sessionReducer;