import React from 'react'
import { UserData } from '../../fixtures/user.mock'

const Home = () => {
    const socialStyle = {
        display: "flex",
        justifyContent: "space-evenly"
    }

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
            <div style={{
                borderRadius: "30px",
                backgroundColor: '#eee',
                width: "30%",
                margin: "0 auto",
                overflow: "auto",
                padding: "20px",
            }}>
                <img style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                }} src={UserData.avatar} alt="profile"></img>
                <p>{UserData.name}</p>
                <p>{UserData.email}</p>
                <p>{UserData.contact}</p>
                <p>{UserData.about}</p>
                <div style={socialStyle}>
                    <a href={UserData.socials.instagram.url}>
                        {UserData.socials.instagram.logo}
                    </a>
                    <a href={UserData.socials.facebook.url}>
                        {UserData.socials.facebook.logo}
                    </a>
                    <a href={UserData.socials.linkedin.url}>
                        {UserData.socials.linkedin.logo}
                    </a>
                    <a href={UserData.socials.twitter.url}>
                        {UserData.socials.twitter.logo}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home