describe('Тестирование формы логина', function () {
   
   it('Позитивный тест авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})

describe('Тестирование восстановления пароля', function () {
   
   it('Позитивный тест восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})

describe('Тестирование негативного кейса авторизации', function () {
   
   it('Тест неправильного пароля', function () {
       cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})

describe('Тестирование негативного кейса авторизации', function () {
   
   it('Тест неправильного логина', function () {
       cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikoff.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})

describe('Тестирование негативного кейса валидации', function () {
   
   it('Тест валидации', function () {
       cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
})

describe('Проверка на приведение к строчным буквам в логине', function () {
   
   it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})