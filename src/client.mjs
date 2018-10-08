import React from 'react'
import ReactDOM from 'react-dom'
import App from './client/App'
import './client/index.css'
console.log('hydrate');

ReactDOM.hydrate(<App/>, document.getElementById('root'));