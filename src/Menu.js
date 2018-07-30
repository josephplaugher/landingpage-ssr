import React from 'react'
import {
    Route,
    Link
  } from 'react-router-dom'
import RequestForm from './RequestForm'
import PayInvoice from './PayInvoice'
import 'css/routes.css'
import 'css/main.css'

const Menu = ({ match }) => (
    <div id="routes">
      <div id="nav-pane">
          <Link to="/request-consult" className="nav">Request a Free Consultation</Link>
            <Route path="/request-consult" component={RequestForm}/>
          <br/><Link to="/pay-invoice" className="nav">Pay an Invoice</Link>
            <Route path="/pay-invoice" component={PayInvoice}/>
        
        </div>
    </div>
  )

export default Menu;