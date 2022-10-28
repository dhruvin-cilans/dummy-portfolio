import React from 'react'
import { UserData } from '../../fixtures/user.mock'

const Home = () => {
    return (
        <div style={{
            textAlign: "center",
            marginTop: "-32px",
            height: "100vh",
            backgroundColor: 'darksalmon',
            color: "CaptionText",
            fontSize: "1.5rem",
        }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor: '#eee',
            }}>Portfolio</h1>
            <img style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
            }} src={UserData.avatar} alt="profile"></img>
            <p>{UserData.name}</p>
            <p>{UserData.email}</p>
            <p>{UserData.contact}</p>
            <p>{UserData.about}</p>
            <a href={UserData.socials.instagram}>
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" />
            </a>
            <a href={UserData.socials.facebook}>
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook" />
            </a>
            <a href={UserData.socials.linkedin}>
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" />
            </a>
            <a href={UserData.socials.twitter}>
                <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="twitter" />
            </a>
        </div>
    )
}

export default Home