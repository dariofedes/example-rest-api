import express from "express"
import sinon from "sinon"
import ExpressRouter from "../../src/ExpressRouter"

describe('ExpressRouter', () => {
    it('should set a get endpoint with the given path', () => {
        //Given
        const pathName = 'pathName'

        const expressApp = express()
        const mockedExpressGet = sinon.mock()
        expressApp.get = mockedExpressGet


        const expressRouter = new ExpressRouter(expressApp)
        
        // When
        expressRouter.get(pathName)

        // Then
        sinon.assert.calledWith(mockedExpressGet, `/${pathName}`)
    })
})