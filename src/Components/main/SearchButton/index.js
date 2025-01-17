import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import './style.css';

export default function SearchButton({handleAdd}) {
    return (
        <Grid size={4}>
                 <Button variant="contained" style={{width:"100%",height:"55px"}} onClick={handleAdd}>Add Item</Button>   
        </Grid>

    );
}
