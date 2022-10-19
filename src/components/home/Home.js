import React from 'react'
import { UserData } from '../../fixtures/user.mock'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>{UserData.name}</p>
            <p>{UserData.email}</p>
            <p>{UserData.contact}</p>
            <p>{UserData.about}</p>
            <p>{UserData.socials.instagram}</p>
            <p>{UserData.socials.facebook}</p>
            <p>{UserData.socials.linkedin}</p>
            <p>{UserData.socials.twitter}</p>
        </div>

    )
}

export default Home