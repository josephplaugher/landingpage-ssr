import BaseClass from 'ServerUtil/BaseClass'
import dbConn from 'ServerUtil/postgres'

class RequestConsult extends BaseClass {
    constructor(req, res) {
        super()
        this.inputs = req.body
        this.req = req
        this.res = res
    }

    logRequest = () => {
        console.log('logging consultation request: ', this.inputs)
        const r = this.req.body
        const query = {
            text: `INSERT INTO clients
                (fname, email) 
                VALUES ($1,$2)`,
            values: [r.fname, r.email],
        }
        dbConn
            .query(query)
            .then(() => {
                this.emailRequester()
            })
            .catch(e => console.error(e.stack))
    }

    emailRequester = () => {
        console.log('email requester')
        this.respond(this.res, { message: 'emailed requester' }, true, {
            success: "Thank you, we'll be in touch",
        })
    }
}

export default RequestConsult
