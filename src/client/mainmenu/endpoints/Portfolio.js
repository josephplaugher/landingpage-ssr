import React from 'react'
import 'scss/main.scss'

const Portfolio = () => (
    <>
    <h1 className="headline">Portfolio</h1>
    <h2 className="subheadline">Curious what kind of work we've done? Take a look for yourself
    </h2>
    <h2 className="subheadline">Enterprise Applications</h2>
    <ul>
        <li className="list">
            <a href="https://erp.appreciateco.com" >Appreciate Enterprise Accounting</a>
            </li>
        <li className="list"><a href="" >Integrated Payment Processing</a></li>
    </ul>    
    <h2 className="subheadline">Open Source Applications</h2>
    <ul>
        <li className="list">
            <a href="https://hash.appco.tech" >Hash Check Strong Password Generator</a>-<a href="" >GitHub</a>
        </li>
        <li className="list">Node and Express</li>
    </ul>    
    </>
)

export default Portfolio