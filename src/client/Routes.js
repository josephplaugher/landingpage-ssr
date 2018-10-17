import Home from './mainmenu/endpoints/Home'
import About from './mainmenu/endpoints/About'
import Consulting from './mainmenu/endpoints/Consulting'
import SpecDev from './mainmenu/endpoints/SpecDev'

const Routes = [
      {
        path: '/',//this is the url and the link button path
        exact: true,
        component: Home,
        name: 'Home'//this is the link label
      },
        {
        path: '/about',
        component: About,
        name: 'About'
      },
      {
        path: '/consulting',
        component: Consulting,
        name: 'Consulting'
      },
      {
        path: '/specdev',
        component: SpecDev,
        name: 'Spec Dev'
      }
    ]

export default Routes;