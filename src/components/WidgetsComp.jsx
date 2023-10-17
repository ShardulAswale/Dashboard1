import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WidgetComp = () => {
 return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be-nev-o-lent
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography component="p">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </Card>
 );
};

export default WidgetComp;