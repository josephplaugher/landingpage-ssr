import Home from './mainmenu/endpoints/Home'
import About from './mainmenu/endpoints/About'
import Consulting from './mainmenu/endpoints/Consulting'
import SpecDev from './mainmenu/endpoints/SpecDev'

const Routes = [
      {
        path: '/',
        exact: true,
        component: Home
      },
        {
        path: '/about',
        component: About
      },
      {
        path: '/consulting',
        component: Consulting
      },
      {
        path: '/specdev',
        component: SpecDev
      }
    ]

export default Routes;