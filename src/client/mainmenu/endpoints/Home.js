import React from 'react'
import 'scss/main.scss'
import 'scss/main-desktop.scss'
import 'scss/main-mobile.scss'

const Home = () => (
    <>
        <h1 className="headline">
            We Solve Business Process Problems Through Software
        </h1>
        <h2 className="subheadline">Improve Efficiency</h2>
        <p className="text">
            You and your staff are probably doing a lot of things manually that
            can be automated. Which means you have inefficiencies in your
            workflow that you may not be aware of.
        </p>
        <h2 className="subheadline">Cut Costs</h2>
        <p className="text">
            If you're not fully leveraging software, you are losing money. You
            can empower your staff to work more effeciently and accomplish more
            in less time.
        </p>
        <h2 className="subheadline">Expand Without Increasing Labor Costs</h2>
        <p className="text">
            Wondering if you need to hire more staff to expand your business?
            Maybe you don't. If your staff's time was less consumed with
            routine, tedious tasks, there will be more time for effective and
            productive work. They would be happier, and your bottom line will
            benefit.
        </p>
    </>
)

export default Home
