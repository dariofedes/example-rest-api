import sinon from 'sinon'
import App from '../../src/App'
import ExpressRouter from '../../src/ExpressRouter'

describe('App', () => {
    it('should set a "/countries" get endpoint', () => {
        // Given
        const expressRouter = new ExpressRouter()
        const mockedGet = sinon.mock()
        expressRouter.get = mockedGet
        
        const app: App = new App(expressRouter)

        // When
        app.run()

        // Then
        mockedGet.withArgs('/countries')
        mockedGet.verify()
    })
})