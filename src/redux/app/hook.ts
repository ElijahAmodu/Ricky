import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useOnahDispatch = () => useDispatch<AppDispatch>()
export const useOnahSelector: TypedUseSelectorHook<RootState> = useSelector


