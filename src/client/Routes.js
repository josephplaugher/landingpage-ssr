import Home from './mainmenu/endpoints/Home'
import About from './mainmenu/endpoints/About'
import Consulting from './mainmenu/endpoints/Consulting'
import SpecDev from './mainmenu/endpoints/SpecDev'
import Portfolio from './mainmenu/endpoints/Portfolio'

const Routes = [
    {
        path: '/', //this is the url and the link button path
        exact: true,
        component: Home,
        name: 'Home', //this is the link label
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/consulting',
        component: Consulting,
        name: 'Consulting',
    },
    {
        path: '/specdev',
        component: SpecDev,
        name: 'Spec Dev',
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'Portfolio',
    },
]

export default Routes
