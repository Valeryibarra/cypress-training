describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {
        cy.visit("http://automationpractice.com/")
        cy.get("#block_top_menu > ul > li:nth-child(3) > a").click()
        cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click()
        cy.get("[style*=\"display: block;\"] .button-container > a").click()
        cy.get(".cart_navigation span").click()

        cy.get("#email").type("aperdomobo@gmail.com")
        cy.get("#passwd").type("WorkshopProtractor")

        // Debes completar la prueba ...
        cy.get("#SubmitLogin").click()
        cy.get("[name=\"processAddress\"]").click() //proceed to checkout
        cy.get("#cgv").click()
        cy.get("[name=\"processCarrier\"]").click()//proceed to checkout shipping

        cy.get(".bankwire").click() //pay by bank
        
        cy.get("[type=submit].button-medium").click()//proceed to checkout shipping

        cy.get("#center_column > div > p > strong")
            .should("have.text", "Your order on My Store is complete.")
    });
});
