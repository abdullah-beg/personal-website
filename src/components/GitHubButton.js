import React from 'react';
import LinkedInIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

const GitHubButton = () => {

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
            href={"https://github.com/abdullah-beg/"}
            target="_blank"
        >
        abdullah-beg
        </Button>
    );

}
    
export default GitHubButton;
    