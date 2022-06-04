import sinon from 'sinon'
import RestAPI from '../../src/RestAPI'
import ExpressRouter from '../../src/ExpressRouter'

describe('RestAPI', () => {
    it('should set a get endpoint called "countries"', () => {
        // Given
        const expressRouter = sinon.createStubInstance(ExpressRouter)
        
        const restAPI: RestAPI = new RestAPI(expressRouter)

        // When
        restAPI.run()

        // Then
        sinon.assert.calledWith(expressRouter.get, 'countries')
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