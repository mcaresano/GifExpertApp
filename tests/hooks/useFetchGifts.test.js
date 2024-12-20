import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

describe('hook useFetchGifts', () => {
    const category = 'One Punch'
  test('Debe regresar el estado inicial', () => {
    const {result}= renderHook(()=>useFetchGifts(category))
    const {images, isLoading} = result.current
    //console.log(images, isLoading)
    //expect(true).toBe(true)
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })
  
  test('Debe regresar un arreglo de imagenes y el isLoading en false', async() => {
    const {result}= renderHook(()=>useFetchGifts(category))
    await waitFor(
        ()=>expect(result.current.images.length).toBeGreaterThan(0)
    )
    const {images, isLoading} = result.current
    
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
