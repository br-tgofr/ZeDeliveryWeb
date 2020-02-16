class LoginPage{
    btnEntrar(){
        cy.get('#welcome-button-sign-in').click()
    }  
    
    btnLoginEntrarComEmail(){
        cy.get('#login-home-email-button-sign-in').click();
    }

    digitarEmail(strLoginEmail){
        cy.get('#login-mail-input-email').type(strLoginEmail);
    }

    digitarSenha(strLoginSenha){
        cy.get('#login-mail-input-password').type(strLoginSenha);
    }

    btnLoginEntrar(){
        cy.get('#login-mail-button-sign-in').click();
    }

    logarZeDelivery(){
        this.btnEntrar();
        this.btnLoginEntrarComEmail();
        this.digitarEmail('andreia.cspinha@gmail.com');
        this.digitarSenha('Amor03!@');
        this.btnLoginEntrar();
    }
}

export default LoginPage;