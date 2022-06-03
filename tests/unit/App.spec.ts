import express from 'express'
import sinon from 'sinon'
import App from '../../src/App'

describe.only('App', () => {
    it('should set a "/countries" get endpoint', () => {
        // Given
        const expressApp = express()
        const mockedGet = sinon.mock()
        expressApp.get = mockedGet
        
        const app: App = new App(expressApp)

        // When
        app.run()

        // Then
        mockedGet.withArgs('/countries')
        mockedGet.verify()
    })
})