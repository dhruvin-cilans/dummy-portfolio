import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material/';

export const UserData = {
    id: 1,
    name: 'John Doe',
    email: 'johm@doe.com',
    contact: '+1 234 567 890',
    about: "Software Engineer",
    avatar: 'https://i.pravatar.cc/150?img=1',
    cover: " https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGNvbnRyb2wlMjBjb2xvciUyMGRlZmF1bHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    socials: {
        facebook: {
            url: 'https://www.facebook.com/',
            logo: <Facebook />
        },
        instagram: {
            url: 'https://www.instagram.com/',
            logo: <Instagram />
        },
        linkedin: {
            url: 'https://www.linkedin.com/',
            logo: <LinkedIn />
        },
        twitter: {
            url: 'https://twitter.com/',
            logo: <Twitter />
        }
    },
}