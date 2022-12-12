import * as React from 'react'
import { Box, ThemeProvider, CssBaseline, Typography, Grid, Divider, Fab } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import EditIcon from '@mui/icons-material/Edit';

// Farmer landing page upon Farmer being signed in (Products view)
const FarmerLandingPage = () => {    
    const [products, setProducts] = React.useState([]) // capture data from GET request
	const curr_user_id = localStorage.getItem('curr_user_id');

    React.useEffect(() => {
        console.log("curr_user_id for products: " + localStorage.getItem('curr_user_id'));
        let url = 'http://localhost:3001/api/products/' + localStorage.getItem('curr_user_id');

        console.log(url);
        fetch(url).then(response => response.json()).then(data => setProducts(data))
            .catch(err => console.error(err));
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <FarmerHeader />
                <Typography variant="h5" sx={{ margin: 2, color: "black" }}>
                    Your Products
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4, minHeight: "70vh" }}>
                        <Grid container spacing={{ xs: 2, md: 2}} columns={{ xs: 4, sm: 8, md: 20 }}>
                            {/* Replace with current vendor id*/}
                            {products.map((item) => (
                                <Grid item xs={2} sm={3} md={4} key={item.name}>
                                    <ProductCard editMode item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerLandingPage

