import * as React from 'react';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import './style.css';
import SearchButton from '../SearchButton';

export default function Search({updateList,text,handleAdd,email,updatEmail}) {
    return (
        <div className='searchStyle'>
            <Grid container spacing={1}>

                <Grid size={4}>
                    <TextField id="outlined-search" label="Name" value ={text} type="text" style={{width:"100%"}} onChange={updateList}/>
                </Grid>
                <Grid size={4}>
                    <TextField id="outlined-search" label="Email" value ={email} type="email" style={{width:"100%"}} onChange={updatEmail}/>
                </Grid>
                <SearchButton handleAdd={handleAdd}/>

            </Grid>
        </div>

    );
}
