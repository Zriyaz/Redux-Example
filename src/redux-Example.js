
const redux = require('redux')

const CreateStore = redux.createStore

const initialState = {
  numberOfBook:10
}

//action 
function byeBook(){
  return{
    type:'Bye_Book',
    info:"my first Redux code"
  }
}

// reducer(preState,action) => new state

const Reducer = (state =initialState,action)=>{
  switch(action.type){
    case 'Bye_Book': 
    return{
     ...state,
     numberOfBook: state.numberOfBook-1
    }
    default:
    return state
  }
}

const store = CreateStore(Reducer)
console.log("Initial State",store.getState())
const unsubscribe  = store.subscribe(()=>{console.log('Updated State Value',store.getState())})
store.dispatch(byeBook())
store.dispatch(byeBook())
store.dispatch(byeBook())
store.dispatch(byeBook())
store.dispatch(byeBook())
unsubscribe()