import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

const LinkedInButton = () => {

    return (
        <Button 
            variant='text' 
            startIcon={<LinkedInIcon />}
            color='info'
            style={{ color: 'white', textTransform: 'lowercase' }}
            sx={{
                boxShadow: 7,
                borderRadius: 3,
            }}
            href={"https://www.linkedin.com/in/abdullah-beg/"}
            target="_blank"
        >
        abdullah-beg
        </Button>
    );

}
    
export default LinkedInButton;
    