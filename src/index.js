import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
// Original Code
// ReactDOM.render(<App />, document.getElementById('root'));

// Routing Test
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import { createStore, combineReducers } from "redux";
// const initialState = {
//     result: 1,
//     lastValues: []
// }

// const mathReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "Add":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             break;
//         case "Subtract":

//             break;

//         default:
//             break;
//     }
//     return state;
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "Add":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             break;
//         case "Subtract":

//             break;

//         default:
//             break;
//     }
//     return state;
// };
// const store = createStore(combineReducers({mathReducer, userReducer}))
// console.log("Store updated")
// store.subscribe(() => {
//     console.log("Store updated", store.getState());
// });


// store.dispatch({
//     type:  "Add",
//     payload: 10
// })
