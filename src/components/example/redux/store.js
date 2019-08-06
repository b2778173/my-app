import { createStore } from 'redux'
import reducer from './reducer'
import {addTodo} from './action'

export let store = createStore(reducer);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(addTodo());
store.dispatch(addTodo("幹林娘肌掰"));
store.dispatch({type:'fff'})


unsubscribe()
