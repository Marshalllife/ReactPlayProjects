/* eslint-disable default-case */
import { useReducer } from 'react';
import './index.css'


// export function App() {

//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount(() => count + 1)
//   }

//   function decrement() {
//     if (count === 0) {
//       return;

//     }
//     setCount(() => count - 1)
//   }



//   return (
//     <div className='flex-counter'>
//       <button onClick={increment}>+</button>
//       <div>{count}</div>
//       <button onClick={decrement} >-</button>
//     </div>

//   )
// }


// using reducer


const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      if (state.count === 0) {
        return state;

      }
      return { count: state.count - 1 }
  }

}


export default function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })


  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {

    dispatch({ type: ACTIONS.DECREMENT })
  }

  // function decrement() {
  //   if (count === 0) {
  //     return;

  //   }
  //   setCount(() => count - 1)
  // }





  return (
    <div className='flex-counter'>
      <button onClick={increment}>+</button>
      <div>{state.count}</div>
      <button onClick={decrement}>-</button>
    </div>

  )
}


