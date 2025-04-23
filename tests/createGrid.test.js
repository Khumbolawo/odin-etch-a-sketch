import { makeRows } from '../src/createGrid'
import { initializeGrid } from '../src/main'
import { describe, expect, test, vi, beforeEach } from 'vitest'

// mocking the createGrid.js file so that it doesn't actually create a grid in the DOM
vi.mock('../src/createGrid', () => ({
  makeRows: vi.fn(),
}))

describe('tests for initializing the grid on first load', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should call makeRows with 16 rows and columns', () => {
    initializeGrid()
    expect(makeRows).toHaveBeenCalledWith(16, 16)
    expect(makeRows).toHaveBeenCalledTimes(1)
  })
})
