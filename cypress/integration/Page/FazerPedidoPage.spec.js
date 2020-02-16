import UtilsMethods from '../Utils/Utils.spec' 

const utils = new UtilsMethods();

class FazerPedidoPage{
    
    visitarUrl(){
        utils.urlZeDelivery();
    }

    btnMenorIdade(){
        cy.get('#age-gate-button-no').click();
    }

    btnMaiorIdade(){
        cy.get('#age-gate-button-yes').click();
    }

    btnInserirEndereco(){
        cy.get('#welcome-button-set-delivery-options').click();
    }

    digitarEnderecoForaDeArea(strEndereco){
        cy.get('#address-search-input-address').type(strEndereco)
        cy.wait(2000)   
        cy.get('.css-10klw3m').click();
    }

    digitarEnderecoCompl(strCompl){
        cy.get('#address-details-input-complement').type(strCompl);
    }

    btnEnderecoCasa(){
        cy.get('#address-details-button-home').click();
    }

    btnEnderecoContinuar(){
        cy.get('#address-details-button-continue').click();
    }

    digitarEmailForaDeArea(strEmailForaArea){
        cy.get('#out-of-range-input-email').type(strEmailForaArea)
    }

    btnEnderecoEnviarEmail(){
        cy.get('#out-of-range-button-send-email').click()
    }

    btnEnderecoEntendi(){
        cy.get('.css-15p8lmg-buttonBase-primaryButton').click()
    }

    digitarEnderecoAreaCobertura(strEnderecoAreaCobertura){
        cy.get('#address-search-input-address').type(strEnderecoAreaCobertura)
        cy.wait(2000)
        cy.get('.css-10klw3m').click()
    }

    checkNaoTemCompl(){
        cy.get('.css-4g6ai3').click();
    }

    btnEnderecoTrabalho(){
        cy.get('#address-details-button-work').click()
    }

    btnProdutosDisp(){
        cy.get('#see-products').click();
    }
}

export default FazerPedidoPage;