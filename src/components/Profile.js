import { React, useState } from 'react'
import { Avatar, Typography } from '@mui/material';
import logo from '../static/images/logo.png';
import me from '../static/images/me.png';

const Profile = () => {

    const [profilePhoto, setProfilePhoto] = useState(false);

    return (
        <div>
            
            <Avatar
                onMouseEnter={() => setProfilePhoto(!profilePhoto)}

                alt="Abdullah Beg"
                src={profilePhoto ? logo : me} 
                sx={{ width: 70, height: 70, boxShadow: 7}}
            />

        </div>
    )

}

export default Profile
