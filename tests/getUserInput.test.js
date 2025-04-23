import { makeRows } from '../src/createGrid'
import { promptUser } from '../src/getUserInput'
import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'

// mocking the createGrid.js file so that it doesn't actually create a grid in the DOM
vi.mock('../src/createGrid', () => ({
  makeRows: vi.fn(),
}))

describe('test user interaction with the prompt', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    // Create and add the alert div to the document
    let alert = document.createElement('div')
    alert.id = 'alert'
    document.body.appendChild(alert)
  })

  afterEach(() => {
    // cleanup the dom after each test
    document.body.innerHTML = ('')
  })

  test('works as expected when user enters a number', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => '4')
    promptUser()
    expect(makeRows).toHaveBeenCalledWith(4, 4)
    expect(makeRows).toHaveBeenCalledTimes(1)
  })

  test('works with boundary values', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => '1')
    promptUser()
    expect(makeRows).toHaveBeenCalledWith(1, 1)
    expect(makeRows).toHaveBeenCalledTimes(1)
  })

  test('does not work when user cancels input', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => null)
    promptUser()
    expect(makeRows).not.toHaveBeenCalled()
    expect(alert.textContent).toBeOneOf([expect.any(String), undefined])
  })

  test('does not work when user enters an empty string', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => '')
    promptUser()
    expect(makeRows).not.toHaveBeenCalled()
    expect(alert.textContent).toBeOneOf([expect.any(String), undefined])
  })

  test('does not work when user enters a number outside of range', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => '101')
    promptUser()
    expect(makeRows).not.toHaveBeenCalled()
    expect(alert.textContent).toBeOneOf([expect.any(String), undefined])
  })

  test('does not work when user enters a non-number', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => 'abc')
    promptUser()
    expect(makeRows).not.toHaveBeenCalled()
    expect(alert.textContent).toBeOneOf([expect.any(String), undefined])
  })

  test('does not work when user enters negative number', () => {
    vi.spyOn(window, 'prompt').mockImplementation(() => '-1')
    promptUser()
    expect(makeRows).not.toHaveBeenCalled()
    expect(alert.textContent).toBeOneOf([expect.any(String), undefined])
  })
})
