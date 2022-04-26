const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {deleteMovie} = require('../functions/movie-functions')
const {crossOutMovie} = require('../functions/movie-functions')
const {checkDeleted} = require('../functions/movie-functions')
const {crossedBackIn} = require('../functions/movie-functions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Delete a movie', async () => {
    await deleteMovie(driver)
})

test('Cross out movie', async () => {
    await crossOutMovie(driver)
})

test('Check if movie was deleted', async () => {
    await checkDeleted(driver)
})

test('Movie crossed back in', async () => {
    await crossedBackIn(driver)
})
