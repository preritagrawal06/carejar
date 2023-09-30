import DoctorCard from "../Components/doctorCard"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

const Section2 = ()=>{
    const [doctorData, setDoctorData] = useState(null) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const {specialist} = useParams()
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try {
                const {data} = await axios.get(`http://localhost:8000/api/${specialist}`)
                if(data){
                    setDoctorData(data)
                    setLoading(false)
                    setError(false)
                    setErrorMessage('')
                }
            } catch (err) {
                setLoading(false)
                setError(true)
                setErrorMessage('Internal error occured!'+ err)
            }
        }

        fetchData()
    },[])
    return(
        <>
            {loading && <h1>Loading....</h1>}
            {error && <p>{errorMessage}</p>}
            {doctorData &&
            <Stack>
                {
                    doctorData.map((doctorDetails)=>{
                        return <DoctorCard doctorData={doctorDetails}/>
                    })
                }
            </Stack>
            }
        </>
    )
}

export default Section2