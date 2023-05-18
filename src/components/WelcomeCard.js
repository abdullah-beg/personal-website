import React from 'react';
import Card from '@mui/material/Card';
import Profile from './Profile';
import { CardHeader, Typography, CardContent, Box } from '@mui/material';
import LinkedInButton from './LinkedInButton';
import GitHubButton from './GitHubButton';
import YouTubeButton from './YouTubeButton';
import EmailButton from './EmailButton';

const WelcomeCard = () => {
  return (
    <Card
      sx={{
        gap: '10px',
        backgroundColor: '#394867',
        borderRadius: '75px',
        boxShadow: 20,
        minWidth: '80%',
        minHeight: '50%',
      }}
    >
      <CardHeader
        avatar={<Profile />}
        title="Muhammad Abdullah Beg"
        titleTypographyProps={{
          align: 'left',
          color: 'white',
          fontSize: '20px',
        }}
      />
      <CardHeader
        title="Welcome."
        titleTypographyProps={{
          variant: 'h1',
          align: 'center',
          style: {
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Arial',
          },
        }}
        subheader="Glad to have you here!"
        subheaderTypographyProps={{
          style: {
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '30px',
          },
        }}
      />

      <CardContent>
        <Typography style={{ fontSize: '20px', color: 'white' }}>
          Website is currently under development...
          <br />
          In the meantime, I invite you to check out my other links:
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <Box
          sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              width: '70%',
              transform: 'scale(1.2)',
              justifyContent: 'center',
              alignItems: 'center',
          }}
        >
          <LinkedInButton />
          <GitHubButton />
          <YouTubeButton />
          <EmailButton />
        </Box>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;