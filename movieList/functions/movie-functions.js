const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Mummy')

    await driver.findElement(By.xpath('//button')).click()
    
    await driver.findElement(By.xpath('//button[text()="x"]')).click()
    await driver.sleep(1000) 

    const findMovie = await driver.findElement(By.xpath('//aside[contains(text(), "deleted")]'))

    const displayed = findMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossOutMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Mummy')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000)

    const findMovie = await driver.findElement(By.xpath('//span[@class="checked"]'))

    const displayed = findMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const checkDeleted = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Mummy')

    await driver.findElement(By.xpath('//button')).click()
    
    await driver.findElement(By.xpath('//button[text()="x"]')).click()
    await driver.sleep(1000)

    const findMovie = await driver.findElement(By.xpath('//ul[contains(text(), "")]'))

    const displayed = findMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossedBackIn = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Mummy')

    await driver.findElement(By.xpath('//button')).click()
    
    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000) 

    const findMovie = await driver.findElement(By.xpath('//aside[contains(text(), "added back")]'))

    const displayed = findMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}


module.exports = {
    deleteMovie,
    crossOutMovie,
    checkDeleted,
    crossedBackIn
}