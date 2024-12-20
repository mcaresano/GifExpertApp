import { getGifts } from "../../src/helpers/getGifts"

describe('Helpers - getGifs.js', () => { 
    test('Debe retornar un arreglo de gifs ',async () => {
        const gifs = await  getGifts('One Punch')
        //console.log(gifs)
        expect(gifs.length).toBe(10)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)})
    })
    
 })