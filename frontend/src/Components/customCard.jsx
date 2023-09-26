import {Box, Stack, Typography} from '@mui/material'


const CustomCard = ({headImg, heading, mainContent})=>{
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
        >
            <Stack>
                <Box sx={{overflow:"hidden" ,borderRadius:"5px", maxWidth:"min-content", maxHeight:"180px"}}>
                    <img src={headImg} alt={headImg} srcset="" />
                </Box>                
                <Typography variant="h6" fontSize={20} fontWeight={600} fontFamily="'Roboto', sans-serif" color="#3e4346">{heading}</Typography>
                <Typography variant="p" fontSize={13} fontFamily="'Roboto', sans-serif" color="#3e4346">{mainContent}</Typography>
            </Stack>
        </Box>
    </>
    )
}

export default CustomCard