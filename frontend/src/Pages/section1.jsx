import CustomCard from "../Components/customCard";
import { Box, Typography } from "@mui/material";

const Section1 = () => {
    return (
        <Box>
            <Typography variant="h5" fontFamily="'Roboto', sans-serif" fontWeight={600} color="#3e4346">Book an appointment for an in-clinic consultation</Typography>
            <Typography variant="p" fontFamily="'Roboto', sans-serif" color="#3e4346">Find experienced doctors across all specialities </Typography>
            <Box 
                marginTop={2} 
                display="flex" 
                justifyContent="start"
                gap={3} 
                sx={{
                    flexDirection:{
                        xs:"column",
                        md: "row"
                    },
                    alignItems:{
                        xs:"center",
                        md:"start"
                    }
                }}
            >
                <CustomCard
                    headImg="dentist.jpg"
                    heading="Dentist"
                    mainContent="Teeth Troubles? Schedule a dental checkup"
                    specialist="Dentist"
                />
                <CustomCard
                    headImg="gynac.jpg"
                    heading="Gynecologist/Obstetrician"
                    mainContent="Explore for women's health, pregnancy and infertility treatments"
                    specialist="Gynecologist"
                />
                <CustomCard
                    headImg="dietician.jpg"
                    heading="Dietitian/Nutrition"
                    mainContent="Get guidance on eating right, weight management and sports nutrition"
                    specialist="Dietitian"
                />
            </Box>
        </Box>
    );
};

export default Section1;
