import { expect } from "chai"
import axios from 'axios'
import RestAPI from '../../src/RestAPI'
import ExpressRouter from '../../src/ExpressRouter'
import express from 'express'
import countriesData from '../fixtures/countries-data'

const PORT = 8080

describe('RestAPI', () => {
    it('should return countries data when requested to "/countries" endpoint', async () => {
        // Given
        const expressRouter = new ExpressRouter(express())

        const countriesRoute = new CountryiesRoute()
        const routes = [ countriesRoute ]

        const restAPI = new RestAPI(expressRouter, routes)
        restAPI.run()
        
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
