
import React from 'react'
import Post from '../Post'
import { shallow } from 'enzyme'

describe('Post page test', () => {
    it('should fetch data', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });

        global.window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

        const post = shallow(<Post />)
        const instance = post.instance()

        instance.postTweet()

        expect(global.window.fetch).toHaveBeenCalled()
    })
})