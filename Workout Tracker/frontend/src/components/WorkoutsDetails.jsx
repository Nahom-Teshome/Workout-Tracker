/* eslint-disable react/prop-types */
import '../index.css'
import { useWorkoutReducer } from '../hooks/useWorkoutContext'
import { FaTrashAlt } from "react-icons/fa";

export default function WorkoutDetails({workouts}){
    const {dispatch} = useWorkoutReducer()
    async function handleClick(id){
        const res = await fetch(`/api/workout/${id}`,{
            method:'DELETE'
        })

        const jsonData = await res.json()
        console.log("jsonData: ", jsonData)

        if(res.ok){
            dispatch({type:'DELETE_WORKOUT',payload:jsonData})
        }
    }
   

    return(
        <div className="workoutdetails">
           
            {workouts.map((child)=>{
        return(
            <div className="workout" key={child.id}>
                <h4>{child.title}</h4>
                <p>Load: {child.load}</p>
                <p>Reps: {child.reps}</p>
                <p>ID: {child._id}</p>
                <button className="deletebtn" onClick={()=>{handleClick(child._id)}}><FaTrashAlt/></button>
            </div>
        )
    })}
   
        </div>
    )
}
