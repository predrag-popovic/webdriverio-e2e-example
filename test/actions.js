describe('Browser Actions', () => {

    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');
        browser.pause(3000)
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Mike')
        //browser.pause(3000)
        input.clearValue()
        //browser.pause(3000)
        input.addValue('Mike')
        //browser.pause(3000)
    })

    it('Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        //browser.pause(3000)
    })

    it('Checkbox & Radio button', () => {
        const radio = $('#linux')
        radio.waitForExist()
        radio.click()
        //browser.pause(3000)

        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        //browser.pause(3000)
    })

    it('Select Box', () => {
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(3000)
    
    })

})