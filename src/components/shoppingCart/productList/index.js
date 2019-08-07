import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Counter from './counter'

const initialState = { count: 0 };
// 輸入
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}
const store = createStore(reducer);
const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;

