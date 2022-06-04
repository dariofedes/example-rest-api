import sinon from 'sinon'
import App from '../../src/App'
import ExpressRouter from '../../src/ExpressRouter'

describe('App', () => {
    it('should set a get endpoint called "countries"', () => {
        // Given
        const expressRouter = sinon.createStubInstance(ExpressRouter)
        
        const app: App = new App(expressRouter)

        // When
        app.run()

        // Then
        sinon.assert.calledWith(expressRouter.get, 'countries')
    })

    it('should get up a web API', () => {
         // Given
         const expressRouter = sinon.createStubInstance(ExpressRouter)
        
         const app: App = new App(expressRouter)
 
         // When
         app.run()
 
         // Then
         sinon.assert.calledOnce(expressRouter.listen)
    })
})