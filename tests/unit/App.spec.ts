import sinon from 'sinon'
import App from '../../src/App'
import ExpressRouter from '../../src/ExpressRouter'

describe('App', () => {
    it('should set a "/countries" get endpoint', () => {
        // Given
        const expressRouter = sinon.createStubInstance(ExpressRouter)
        
        const app: App = new App(expressRouter)

        // When
        app.run()

        // Then
        sinon.assert.calledWith(expressRouter.get, '/countries')
    })
})