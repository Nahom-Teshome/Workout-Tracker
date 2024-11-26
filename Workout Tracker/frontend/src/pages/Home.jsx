import React from 'react'
import WorkoutDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutReducer } from '../hooks/useWorkoutContext';
export default function Home(){
    // const [workouts,setWorkouts]= React.useState();
    const {workouts,dispatch}= useWorkoutReducer()
    React.useEffect(()=>{
//fetching from our api
        async function fetchWorkouts(){
           try { 
            const res = await fetch('/api/workout')
           const data = await res.json()
            console.log(data.workouts)
           if(res.ok){
               dispatch({type:"SET_WORKOUTS",payload:data.workouts})
           }
           console.log("reducer state workouts",workouts)
        }
        catch(err){
            console.log("Eroor: ", err)
        }
        }

        fetchWorkouts()
    },[])
   
    return(
        <div className="home">
          { workouts && <div className="workouts">
               <WorkoutDetails workouts={workouts}/>
           </div>}
           <WorkoutForm/>
        </div>
    )
}
// {workouts && workouts.map((workout, ind)=>{
//     return (<p key={ind}>{workout.title }</p> )
// })}