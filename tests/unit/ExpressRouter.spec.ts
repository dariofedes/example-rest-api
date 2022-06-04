import express from "express"
import sinon from "sinon"
import ExpressRouter from "../../src/ExpressRouter"

describe('ExpressRouter', () => {
    it('should set a get endpoint with the given endpoint name', () => {
        //Given
        const endpointName = 'endpointName'

        const expressApp = express()
        const mockedExpressGet = sinon.mock()
        expressApp.get = mockedExpressGet


        const expressRouter = new ExpressRouter(expressApp)
        
        // When
        expressRouter.get(endpointName)

        // Then
        sinon.assert.calledWith(mockedExpressGet, `/${endpointName}`)
    })
})