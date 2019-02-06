import React from 'react'
import Home from '../Home'
import { shallow } from 'enzyme'

describe('Home page test', ()  => {
    it('should fetch data', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });

        global.window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

        const home = shallow(<Home/>)
        const instance = home.instance()

        instance.fetchData()

        expect(global.window.fetch).toHaveBeenCalled()
    })
})