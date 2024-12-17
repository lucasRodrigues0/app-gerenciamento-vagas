export const navbarOptions: option[] = [
    {
        name: 'About',
        linkTo: "#",
        role: []
    },
    {
        name: 'Register',
        linkTo: "#",
        role: []
    },
    {
        name: 'Login',
        linkTo: "#",
        role: []
    },
    {
        name: 'test1',
        linkTo: "#",
        role: ['admin']
    },
    {
        name: 'test2',
        linkTo: "#",
        role: ['admin', 'candidate']
    },
]

type option = {
    name: string,
    linkTo: string,
    role: string[] | never
}