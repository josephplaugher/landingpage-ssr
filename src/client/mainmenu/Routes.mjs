import About from './endpoints/About'
import Consulting from './endpoints/Consulting'
import SpecDev from './endpoints/SpecDev'

const routes =  [
    {
        path: '/',
        exact: true,
        component: Home,
      },
        {
        path: '/about',
        exact: true,
        component: About,
      },
      {
        path: '/consulting',
        component: Grid,
      }
    ]