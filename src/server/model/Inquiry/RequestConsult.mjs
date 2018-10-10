import BaseClass from 'ServerUtil/BaseClass'

class RequestConsult extends BaseClass {
    constructor(req, res) {
        this.inputs = req.body
        this.req = req
        this.res = res
    }

    logRequest = () => {
        console.log('the inputs', this.inputs)
        console.log('logging consultation request: ', this.inputs)
        this.emailRequester()
    }

    emailRequester = () => {
        console.log('email requester')
        this.response(this.res, {message: 'emailed requester'}, true, {})
    }
}

export default RequestConsult