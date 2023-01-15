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