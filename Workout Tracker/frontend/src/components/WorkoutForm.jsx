import React from 'react'
import '../index.css'
import { useWorkoutReducer } from '../hooks/useWorkoutContext'

export default function WorkoutForm(){
    const {dispatch} = useWorkoutReducer()
    const[ title, setTitle] =React.useState('')
    const[ load, setLoad] =React.useState('')
    const[ reps, setReps] =React.useState('')
    const[ error, setError] =React.useState(null)
    const [emptyFields, setEmptyFields] = React.useState([])
    async function handleSubmit(e){
        e.preventDefault()

        const workout = {title,load,reps}
        try{

            const response = await fetch('/api/workout',{
                method:'POST',
                body: JSON.stringify(workout),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            
            const jsonData = await response.json()
            if(!response.ok){
                setError(jsonData.Error)
                setEmptyFields(jsonData.emptyFields)
                console.log(emptyFields)
                throw new Error("error  has been found! ")
            }
            if(response.ok){
                dispatch({type:"CREATE_WORKOUTS",payload: jsonData.workout})
                setTitle('')
                setLoad('')
                setReps('')
                setError(null)
                setEmptyFields([])
                console.log('new workout added: ', jsonData)
            }
        }
        catch(err)
        {
            console.error(err)
        }
    }
    // if(error){
    //     return(<h2>error</h2>)
    // }
    
    return(
        <>
        <form className='workoutform' action="" onSubmit={handleSubmit}>
            <label className='workoutform-label ' >Excersize Title:
                <input className={`workoutform-in  ${emptyFields.includes('title')? 'error':''}`}  type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            </label>
      
            <label className='workoutform-label' > Load (in Kg):
                <input className={`workoutform-in ${emptyFields.includes('load')? 'error': ''}`} type="number" onChange={(e)=>{setLoad(e.target.value)}} value={load}/>
            </label>
       
            <label className='workoutform-label' >Reps:
                <input className={`workoutform-in ${emptyFields.includes('reps')?'error':''}`} type="number" onChange={(e)=>{setReps(e.target.value)}} value={reps}/>
            </label>

            <button className='workoutform-btn'>Add Workout</button>
            {error && <h2>{error}</h2>}
        </form>

        </>
    )

}