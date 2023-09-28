import {Box, Stack, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'


const CustomCard = ({headImg, heading, mainContent, specialist})=>{

    const navigate = useNavigate()

    const handleNavigation = (specialist)=>{
        navigate(`/${specialist}`)
    }

    return(
    <>
        <Box 
            component="span" 
            sx={{
                maxWidth:270,
                transition: "0.2s",
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer"
                }
            }}
            onClick={()=>{handleNavigation(specialist)}}
        >
            <Stack>
                <Box sx={{overflow:"hidden" ,borderRadius:"5px", maxWidth:"min-content", maxHeight:"180px"}}>
                    <img src={headImg} alt={headImg} srcSet="" />
                </Box>                
                <Typography variant="h6" fontSize={20} fontWeight={600} fontFamily="'Roboto', sans-serif" color="#3e4346">{heading}</Typography>
                <Typography variant="p" fontSize={13} fontFamily="'Roboto', sans-serif" color="#3e4346">{mainContent}</Typography>
            </Stack>
        </Box>
    </>
    )
}

export default CustomCard