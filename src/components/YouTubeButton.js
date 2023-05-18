import React from 'react';
import LinkedInIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';

const YouTubeButton = () => {

    return (
        <Button 
            variant='text' 
            startIcon={<LinkedInIcon />}
            color='info'
            style={{ color: 'white', textTransform: 'none' }}
            sx={{
                boxShadow: 7,
                borderRadius: 3,
            }}
            href={"https://www.youtube.com/@a2bcoding553/"}
            target="_blank"
        >
        A2B Coding
        </Button>
    );

}
    
export default YouTubeButton;
    