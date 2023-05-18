import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

const EmailButton = () => {

    return (
        <Button 
            variant='text' 
            startIcon={<EmailIcon />}
            color='info'
            style={{ color: 'white', textTransform: 'none' }}
            sx={{
                boxShadow: 7,
                borderRadius: 3,
            }}
            href={"mailto:abdullah.beg+contact@outlook.com"}
            target="_blank"
        >
        abdullah.beg@outlook.com
        </Button>
    );

}
    
export default EmailButton;
    