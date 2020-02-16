class CadastroPage{
    btnCadastroEntrar(){
        cy.get('#welcome-button-sign-in').click();
    }

    linkCadastrar(){
        cy.get('#login-home-link-dont-have-account').click();
    }

    btnContinuarComEmail(){
        cy.get('#signup-home-button-email').click();
    }

    criarNovaConta(strNomeSobre, strEmail, strSenha, strCpf, strCel, strIdade){
        cy.get('#signup-email-input-name').type(strNomeSobre);
        cy.get('#signup-email-input-email').type(strEmail);
        cy.get('#signup-email-input-password').type(strSenha);
        cy.get('#signup-email-input-document').type(strCpf);
        cy.get('#signup-email-input-phone').type(strCel);
        cy.get('#signup-email-input-age').type(strIdade);
    }

    btnCadastrarContinuar(){
        cy.get('#signup-email-button-signUp').click()
    }
}

export default CadastroPage;