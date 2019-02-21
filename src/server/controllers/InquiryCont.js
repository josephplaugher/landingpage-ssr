import express from 'express'
import RequestConsult from './../model/Inquiry/RequestConsult'
const routes = express.Router()

routes.post('/requestConsult', (req, res) => {
	console.log(req.body)
	const Request = new RequestConsult(req, res)
	Request.logRequest()
})


export default routes