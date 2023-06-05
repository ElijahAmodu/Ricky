import store from "../redux/app/store"
import { INCREMENT, DECREMENT } from "../redux/features/Slice-implementation/navSlice"
import { useSelector, useDispatch } from "react-redux"


export const Card = () => {

  const { getState }  = store
  const dispatch = useDispatch()
  const  Count = useSelector(
    (state: ReturnType<typeof getState>) => {
      return state
    }
  )
  console.log(Count)
  return (
    <div>
      <button onClick={() => dispatch(DECREMENT())}>-</button>
      {/* <h3>{Count}</h3> */}
      <button onClick={() => dispatch(INCREMENT())}>+</button>
    </div>
  )
}
