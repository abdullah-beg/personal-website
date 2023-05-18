import React from 'react';
import Card from '@mui/material/Card';
import Profile from './Profile';
import { CardHeader, Typography, CardContent, Stack } from '@mui/material';
import LinkedInButton from './LinkedInButton';
import GitHubButton from './GitHubButton';
import YouTubeButton from './YouTubeButton';
import EmailButton from './EmailButton';

const WelcomeCard = () => {

    return (
        <Card sx={{ 
                minWidth: '62%', 
                minHeight: '50%',
                backgroundColor: '#394867',
                borderRadius: "75px",
                boxShadow: 20,
                }}
        >
            <CardHeader
                avatar={<Profile />}
                title={"Muhammad Abdullah Beg"}
                titleTypographyProps={{ align: "left", color: "white", fontSize: '20px' }}
            />
            <CardHeader
                title={"Welcome."}
                titleTypographyProps={{ variant: 'h1', align: 'center', style: { fontSize: '80px', fontWeight: 'bold', color: 'white', fontFamily: 'Arial' } }}
                subheader={"Glad to have you here!"}
                subheaderTypographyProps={{ style: { color: 'white', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px' } }}
            />

            <CardContent>
                <Typography
                    style={{ fontSize: '20px', color: 'white' }}
                >
                    Website is currently under development... 
                    <br />
                    In the meantime, I invite you to check out my other links:
                </Typography>
            </CardContent>

            {/* <CardContent style={{ justifyContent: 'center', alignItems: 'center' }}> */}
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'scale(1.2)' }}>
                <Stack direction='row' spacing={2}>
                    <LinkedInButton />
                    <GitHubButton />
                    <YouTubeButton />
                    <EmailButton />
                </Stack>
            </CardContent>

        </Card>

    );
}
    
export default WelcomeCard;
    