import { expect } from "chai"
import axios from 'axios'
import express from 'express'
import App from '../../src/App'
import countriesData from '../fixtures/countries-data'

const PORT = 8080

describe('App', () => {
    it('should return countries data when requested to "/countries" endpoint', async () => {
        // Given
        const expressApp = express()

        const app: App = new App(expressApp)
        app.run()
        
        // When
        const data = await getDataFromRequest('/country')

        // Then
        expect(data).to.be.equal(countriesData)
    })
})

async function getDataFromRequest(endpoint: string) {
    const response = await axios.get(`http://localhost:${PORT}/${endpoint}`)
    return response.data
}
