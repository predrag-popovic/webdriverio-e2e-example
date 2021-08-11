//import { short, medium , long } from '../lib/timeout'
//import { mobile, tablet, desktop } from '../lib/devices'

describe('TEST', () => {

    it('First Step with WebdriverIO', () => {
        browser.url('http://www.example.com/');
        browser.pause(3000)
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 shoud be visible', () => {
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })

    it('P shoud be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('Check Link Value', () => {
        const link = $('a')
        link.waitForExist()
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
        expect(button).toHaveAttrContaining('disabled', 'true')
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(1650, 1050)
        browser.pause(3000)
    })
/*
    it('Set Mobile view', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(3000)
    })

    it('Set Tablet view', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(3000)
    })

    it('Set Desktop view', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(3000)
    })
*/
})