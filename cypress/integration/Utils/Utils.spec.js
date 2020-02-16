class UtilsMethods{

    validarTexto(text){
        cy.contains(text)
    }

    urlZeDelivery(){
        cy.visit('https://www.ze.delivery/');
    }
}

export default UtilsMethods;