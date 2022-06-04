import sinon from 'sinon'
import RestAPI from '../../src/infrastructure/RestAPI'
import ExpressRouter from '../../src/infrastructure/ExpressRouter'
import Route from '../../src/routes/Route'
import Router from '../../src/infrastructure/Router'

describe('RestAPI', () => {
    it('should register as endoints all passed routes', () => {
        // Given
        const expressRouter = sinon.createStubInstance(ExpressRouter)

        const mockTestRoute = sinon.createStubInstance(TestRoute)
        const routes = [mockTestRoute]

        const restAPI: RestAPI = new RestAPI(expressRouter, routes)

        // When
        restAPI.run()

        // Then
        sinon.assert.calledOnce(mockTestRoute.registerRoute)
    })

    it('should get up a web API', () => {
         // Given
         const expressRouter = sinon.createStubInstance(ExpressRouter)
        
         const restAPI: RestAPI = new RestAPI(expressRouter)
 
         // When
         restAPI.run()
 
         // Then
         sinon.assert.calledOnce(expressRouter.listen)
    })
})

class TestRoute implements Route {
    registerRoute(router: Router): void {
        throw new Error('Method not implemented.')
    }
}