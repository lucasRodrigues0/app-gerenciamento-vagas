export const navbarOptions: option[] = [
    {
        name: 'Home',
        linkTo: "#",
        role: [],
        auth: false
    },
    {
        name: 'About',
        linkTo: "#",
        role: [],
        auth: false
    },
    {
        name: 'Register',
        linkTo: "#",
        role: [],
        auth: false
    },
    {
        name: 'Login',
        linkTo: "#",
        role: [],
        auth: false
    },
    {
        name: 'Profile',
        linkTo: "#",
        role: ['recruiter', 'candidate'],
        auth: true
    },
    {
        name: 'See jobs',
        linkTo: "#",
        role: ['candidate'],
        auth: true
    },
    {
        name: 'Create Job',
        linkTo: "#",
        role: ['admin', 'recruiter'],
        auth: true
    },
    {
        name: 'See all users',
        linkTo: "#",
        role: ['admin'],
        auth: true
    },
    {
        name: 'Logout',
        linkTo: "#",
        role: ['admin', 'candidate', 'recruiter'],
        auth: true
    }
]

type option = {
    name: string,
    linkTo: string,
    role: string[] | never,
    auth: boolean
}