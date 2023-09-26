import CustomCard from "../Components/customCard";
import { Box, Typography } from "@mui/material";

const Section1 = () => {
  return (
    <Box sx={{margin:"auto 50px"}} height="100vh">
        <Typography variant="h5" fontFamily="'Roboto', sans-serif" fontWeight={600} color="#3e4346">Book an appointment for an in-clinic consultation</Typography>
        <Typography variant="p" fontFamily="'Roboto', sans-serif" color="#3e4346">Find experienced doctors across all specialities </Typography>
        <Box 
            marginTop={2} 
            display="flex" 
            gap={3} 
            justifyContent="start"
            >
        <CustomCard
            headImg="dentist.jpg"
            heading="Dentist"
            mainContent="Teeth Troubles? Schedule a dental checkup"
        />
        <CustomCard
            headImg="gynac.jpg"
            heading="Gynecologist/Obstetrician"
            mainContent="Explore for women's health, pregnancy and infertility treatments"
        />
        <CustomCard
            headImg="dietician.jpg"
            heading="Dietiton/Nutrition"
            mainContent="Get guidance on eating right, weight management and sports nutrition"
        />
        </Box>
    </Box>
  );
};

export default Section1;
