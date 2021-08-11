const { isExportDeclaration } = require("typescript")

describe('E2E Test - Login/Logout', () => {

    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const button = $('#signin_button')
        button.waitForExist()
        button.click()
        const loginForm = $('#login_form')
        loginForm.waitForExist()
        const userName = $('#user_login')
        const password = $('#user_password')
        const loginButton = $('input[type="submit"]')
        userName.setValue('invalid')
        password.setValue('invalid')
        loginButton.click()
        const errorMessage = $('.alert-error')
        expect(errorMessage).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const button = $('#signin_button')
        button.waitForExist()
        button.click()
        const loginForm = $('#login_form')
        loginForm.waitForExist()
        const userName = $('#user_login')
        const password = $('#user_password')
        const loginButton = $('input[type="submit"]')
        userName.setValue('username')
        password.setValue('password')
        loginButton.click()
        const naviTab = $('.nav-tabs')
        naviTab.waitForExist()
       
    })

    it('Should logout from app', () => {
        const naviTab = $('.nav-tabs')
        naviTab.waitForExist()
        const iconUser = $('.icon-user')
        iconUser.waitForExist()
        iconUser.click()
        const logoutButton = $('#logout_link')
        logoutButton.waitForExist()
        logoutButton.click()
    })

})