import { useContext } from "react";
import {WorkoutContext} from '../WorkoutContextProvider'

export function useWorkoutReducer(){

    const reducer = useContext(WorkoutContext)

    if(!reducer){
        throw new Error("WorkoutReducer must be used inside of app or children")
    }

    return reducer
}