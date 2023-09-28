import {Box, Stack, Typography, Button} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TodayIcon from '@mui/icons-material/Today';

const DoctorCard = ({doctorData})=>{
    return(
        <>
            <Box 
                sx={{
                    display:{
                        sm: "grid"
                    },
                    width:{
                        xs: "100vw",
                        md: "70vw"
                    },
                    flexDirection:{
                        xs: "row",
                    },
                    gridTemplateColumns:{
                        sm:"repeat(8, 1fr)"
                    }
                    
                }}
                borderTop="1px solid #D3D3D3" 
                borderBottom="1px solid #D3D3D3" 
                padding="20px 0"
                gap={1} 
            >
                <Box gridColumn="span 2" justifyContent="center" alignItems="center" display="flex">
                    <img src="placeholder.png" alt="placeholder.png" srcset="" height="150px" width="150px"/>
                </Box>
                <Box gridColumn="span 4">
                    <Stack gap={1}>
                        <Typography variant="h6" color="primary">{doctorData.name}</Typography>
                        <Typography variant="p">{doctorData.specialist}</Typography>
                        <Typography variant="p">10 years overall experience</Typography>
                        <Typography variant="p" fontSize="13px"><b>{doctorData.address}</b>, {doctorData.clinic} </Typography>
                        <Typography variant="p" fontSize="13px">₹{doctorData.fees} Consultation fee at clinic</Typography>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Box 
                                component="span" 
                                padding="2px 5px" 
                                bgcolor="#00A500" 
                                display="flex" 
                                alignItems="center" 
                                maxWidth="min-content" 
                                justifyContent="center"
                                borderRadius="5px"
                            >
                                <ThumbUpAltIcon fontSize="8px" style={{color:"white", marginRight:"3px"}}/>
                                <Typography variant="p" fontSize="10px" fontWeight={500} color="white">100%</Typography>
                            </Box>
                            <Typography variant="p" fontSize="12px" fontWeight={500}>17 patient stories</Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box gridColumn="span 2" display="flex" alignItems="end" justifyContent="center">
                    <Stack gap={2} display="flex" alignItems="center">
                        <Typography variant="p" display="flex" alignItems="center" color="#00A500">
                            <TodayIcon fontSize='small' style={{color:"#00A500", marginRight:"3px"}}/>
                            Available Today
                        </Typography>
                        <Button variant="contained" color="primary" style={{fontSize:"10px", fontWeight:"600"}}>
                            Book Appointment<br/> No booking fee
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default DoctorCard