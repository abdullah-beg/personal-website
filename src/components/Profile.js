import { React, useState } from 'react'
import { Avatar } from '@mui/material';
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
                sx={{ width: 100, height: 100, boxShadow: 14}}
            />

        </div>
    )

}

export default Profile
