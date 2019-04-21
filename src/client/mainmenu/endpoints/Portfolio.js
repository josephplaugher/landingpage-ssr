import React from 'react'

const Portfolio = () => (
    <>
        <h1 className="headline">Portfolio</h1>
        <p className="text">
            We predominantly develope software using JavaScript, though we have
            experise in PHP as well. Below is a list of web applications we
            built from the ground up. Typically our projects utilize an Express
            server with the EJS template engine. Usually there is a single
            script tag to include the React application bundled with Webpack. If
            the project is very simple, such as the strong password generator
            which still utilizes Webpack for transpilation and bundling, there
            is no framework (i.e. React). It is comprised of a couple of event
            handlers and functions interacting directly with the DOM.
            <br />
            <br />
            Some of our projects use traditional prototype-based "classes" on
            the server side, some use ES6 syntax including classes. Most of the
            time we do not transpile the server side, except when both Search
            Engine Optimization (SEO) and user interactivity are important, such
            as the website you are reading now. On this site, the client and
            server sides are transpiled from ES6 syntax and all markup is
            rendered on the server (until you click the navigation buttons) for
            SEO purposes.{' '}
        </p>
        <h2 className="subheadline">Enterprise Applications</h2>
        <ul>
            <li className="list">
                <p>
                    <a>Appreciate Enterprise Accounting (in development)</a>
                    : A scalable, sophisticated double-entry accounting system.
                    <br />
                    Technologies Used: React, Webpack and Babel, Express
                    backend; CRUD operations in response to API calls from the
                    client. PostgreSQL database.
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="https://pay.appco.tech">
                        Integrated Payment Processing
                    </a>
                    : Using Stripe, this provides a customizable invoice payment
                    system for businesses.
                    <br />
                    Technologies Used: React, Webpack and Babel, Express; CRUD
                    operations in response to API calls from the client.
                    PostgreSQL database.
                </p>
            </li>
        </ul>
        <h2 className="subheadline">Open Source Applications</h2>
        <ul>
            <li className="list">
                <p>
                    <a href="https://hash.appco.tech">
                        Hash Check Strong Password Generator.{' '}
                    </a>
                    <a href="">GitHub</a>
                    <br />
                    Technologies used: Raw JavaScript with Webpack and Babel,
                    bcrypt password hashing and salting library. Express.
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="https://blog.appco.tech">Blog Site. </a>
                    <a href="https://github.com/josephplaugher/BlogSite">
                        GitHub
                    </a>
                    <br />
                    Technologies used: Combination raw JavaScript and React,
                    with Webpack and Babel. Express; CRUD operations in response
                    to API calls from the client. PostgreSQL database.
                    <br />
                    On this project, upon first visit, the latest blog post will
                    be displayed a long with a menu of all the other available
                    posts. This is all rendered server side for SEO purposes.
                    Upon selected other blog posts, they are placed into the
                    ready pane asynchronously. This is all done with raw
                    JavaScript. The user authenication system (which allows
                    users to create an account so they can leave comments) and
                    the comments area itself are both written in React.
                </p>
            </li>

            <li className="list">
                <p>
                    <a href="https://blogadmin.appco.tech">
                        Blog Administration Utility.{' '}
                    </a>
                    <a href="https://github.com/josephplaugher/blog-admin-utility">
                        GitHub
                    </a>
                    <br />
                    Technologies Used: React, Webpack and Babel, Express
                    backend; CRUD operations in response to API calls from the
                    client. PostgreSQL database.
                </p>
            </li>
            <li className="list">
                <a href="https://pantry.appco.tech">
                    Personal Pantry Management System.{' '}
                </a>
                <p>
                    Simple inventory management system for home use. Keeps a
                    running inventory of food items and related supplies, adding
                    as you shop, subtracting as you use things. Includes a
                    shopping list tool that automatically builds a shopping list
                    as you use items based on your preferences.
                    <br />
                    <br />
                    Technologies Used: React, Webpack and Babel, Express
                    backend; CRUD operations in response to API calls from the
                    client. PostgreSQL database.
                    <br />
                    <br />
                    <a href="">GitHub</a>
                </p>
            </li>
        </ul>
        <h2 className="subheadline">NPM Modules</h2>
        <ul>
            <li className="list">
                <h3>ReactForm-AppCo</h3>
                <p>
                    A powerful, flexible forms and inputs module for React.
                    Includes "live search" that can be used similarly to a
                    select or dropdown menu, except the list of options change
                    with user input. The Form class does not render anything to
                    the UI. It simply attaches logic to your existing form to
                    automate processing and submission using React state and
                    Ajax. There is an optional Inputs componet which does render
                    an html input element but it is not required for use with
                    the Form class.
                    <br />
                    <br />
                    Technologies used: React, Webpack and Babel.
                    <br />
                    <br />
                    <a href="https://github.com/josephplaugher/ReactForm-AppCo">
                        GitHub
                    </a>{' '}
                    |{' '}
                    <a href="https://www.npmjs.com/package/reactform-appco">
                        NPM
                    </a>
                </p>
            </li>
            <li className="list">
                <h3>LightBox-AppCo</h3>
                <p>
                    A fully stylable and customizable "popup" window component
                    for React.
                    <br />
                    <br />
                    Technologies used: React, Webpack and Babel. A module for
                    making your markup draggable.
                    <br />
                    <br />
                    <a href="https://github.com/josephplaugher/lightbox-appco">
                        GitHub
                    </a>{' '}
                    |{' '}
                    <a href="https://www.npmjs.com/package/lightbox-appco">
                        NPM
                    </a>
                </p>
            </li>
            <li className="list">
                <h3>Menu-AppCo</h3>
                <p>
                    {' '}
                    A closeable menu component for React.
                    <br />
                    <br />
                    Technologies used: React, Webpack and Babel. A module for
                    making your markup draggable.
                    <br />
                    <br />
                    <a href="https://github.com/josephplaugher/Menu-AppCo">
                        GitHub
                    </a>{' '}
                    | <a href="https://www.npmjs.com/package/menu-appco">NPM</a>
                </p>
            </li>
        </ul>
    </>
)

export default Portfolio
