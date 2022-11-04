import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme.js'
import { Divider } from '@mui/material';
import ProductCard from '../components/ProductCard.js';
import FarmerCard from '../components/FarmerCard.js';
import ConsumerHeader from '../components/headers/ConsumerHeader.js';
import { useNavigate } from 'react-router-dom';

//Customer landing page upon customer being signed in
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CustomerLandingPage = () => {
  let farmerArr = Array(10).fill({name: "Steve", location : "1234 Street Street", description : "Coolest farmer in Amherst"})
  let farmers = [{name : "Greg", location : "152 North Street", descripton : "Great potatoes"}, {name : "John", location : "100 South Street", description : "dope squash"}].concat(farmerArr)
  let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
  let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)


    return (
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Stack direction = "column">
            <ConsumerHeader />
              <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                Featured Farmers
              </Typography>
              <Divider/>
              <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {farmers.map((item) => (
                            <Grid item xs={2} sm={2} md={2} key={item.name}>
                                <FarmerCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Divider />
                <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                Featured Products
                </Typography>
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((item) => (
                            <Grid item xs={2} sm={2} md={2} key={item.name}>
                                <ProductCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>



          </Stack>

        </ThemeProvider>

      );
};

export default CustomerLandingPage

