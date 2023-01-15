describe('Тестирование сайта магазина', function () {
   
   it('Тест покупки', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Герман');
        cy.get('#billing_last_name').type('Дольников');
        cy.get('#billing_address_1').type('Ленина 26');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Москва');
        cy.get('#billing_postcode').type('113675');
        cy.get('#billing_phone').type('9034587659');
        cy.get('#billing_email').type('german@dolnikov.ru');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
        cy.get('.woocommerce-order > :nth-child(3)').contains('Оплата наличными при доставке заказа.');
    })
})
