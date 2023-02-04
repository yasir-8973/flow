import { Box, Paper } from '@mui/material';
import React from 'react';
import Flow from '../flowchart';

const Section:React.FC = () => {
    
    return (
        <Paper variant="outlined" square sx={{ height: '100%',overflow: 'auto'  }}>
            <Box>
                <Flow />    
            </Box>
        </Paper>
    );
}
export default Section;