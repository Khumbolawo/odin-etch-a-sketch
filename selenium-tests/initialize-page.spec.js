// setting up variables for testing
const { Builder, By, until } = require('selenium-webdriver')
const assert = require('assert')
const path = require('path')
const { describe, it, after, before } = require('mocha')

// setting up test suite
describe('initialize-page', function () {
  this.timeout(10000)
  let driver

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build()

    await driver.get('https://www.khumbolawo.github.io/odin-etch-a-sketch/')
  })

  after(async function () {
    if (driver) {
      await driver.quit()
    }
  })

  //   test cases
  it('should initialize page', async function () {
    let title = await driver.getTitle()
    assert.equal(title, 'Odin Etch a Sketch')
  })
})
