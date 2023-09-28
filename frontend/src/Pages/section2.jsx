import DoctorCard from "../Components/doctorCard"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"

const Section2 = ()=>{
    const {specialist} = useParams()
    console.log(specialist)
    const doctorData = {
        "name": "Dr. Ujjval Mehrotra",
        "specialist": specialist,
        "fees": 200,
        "rating": 100,
        "story": 17,
        "address": "Cannaught Palace",
        "clinic": "XYZ clinic"
    }
    return(
        <>
            <Stack>
                <DoctorCard doctorData={doctorData}/>
                <DoctorCard doctorData={doctorData}/>
                <DoctorCard doctorData={doctorData}/>
            </Stack>
        </>
    )
}

export default Section2