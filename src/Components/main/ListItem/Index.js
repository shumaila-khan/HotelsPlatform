import * as React from 'react';

import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';

export default function Items({ postData,removeItem }) {

  return (
    <>

      <Grid size={12}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

          {postData && postData.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <Grid size={10}>
                  <ListItemText primary={item.name} secondary={item.email} />
                </Grid>

                <Grid size={2}>
                  <Button variant="contained" style={{ width: "100%", height: "55px" }} onClick={()=>removeItem(item.id)}>Remove</Button>
                </Grid>
              </ListItem>
            )
          })}




        </List>
      </Grid>




    </>

  );
}