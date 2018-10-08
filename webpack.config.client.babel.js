import { client } from 'universal-webpack/config'
import settings from './universal-webpack-settings'
import devConfiguration from './webpack-dev.config'
//import prodConfiguration from './webpack-prod.config'

/*
var conf;
if(process.env.NODE_ENV === 'production') {
    conf = prodConfiguration;
}else{
    conf = devConfiguration;
}
*/
export default client(devConfiguration, settings)