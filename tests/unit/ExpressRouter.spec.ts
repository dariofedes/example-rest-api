import express from "express"
import sinon from "sinon"
import ExpressRouter from "../../src/infrastructure/ExpressRouter"

describe('ExpressRouter', () => {
    it('should set a get endpoint with the given path and callback', () => {
        //Given
        const path = '/path'
        const callback = () => null

        const expressApp = express()
        const mockedExpressGet = sinon.mock()
        expressApp.get = mockedExpressGet

        const expressRouter = new ExpressRouter(expressApp)
        
        // When
        expressRouter.get(path, callback)

        // Then
        sinon.assert.calledWithExactly(mockedExpressGet, path, callback)
    })

    it('should get up a web API listening in the given port', () => {
        //Given
        const port = 8080

        const expressApp = express()
        const mockedExpressListen = sinon.mock()
        expressApp.listen = mockedExpressListen

        const expressRouter = new ExpressRouter(expressApp, port)
        
        // When
        expressRouter.listen()

        // Then
        sinon.assert.calledWith(mockedExpressListen, port)
    })

    it('shuould get up a web API listening on port 8080 by default', () => {
        //Given
        const expressApp = express()
        const mockedExpressListen = sinon.mock()
        expressApp.listen = mockedExpressListen

        const expressRouter = new ExpressRouter(expressApp)
        
        // When
        expressRouter.listen()

        // Then
        sinon.assert.calledWith(mockedExpressListen, 8080)
    })
})