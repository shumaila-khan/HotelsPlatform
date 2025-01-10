import * as React from 'react';
import Grid from '@mui/material/Grid2';
import './style.css';

export default function Header() {
    return (
        <div className='bg_blue'>
            <Grid container spacing={1}>
                <Grid size={12}>
                    <Grid size={4}>
                        Hotel 360
                    </Grid>
                    <Grid size={8}>

                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}
