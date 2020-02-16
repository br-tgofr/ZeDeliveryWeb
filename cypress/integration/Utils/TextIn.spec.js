
class TextIn{
    textMenorIdade(){
        cy.contains('Você precisa ter 18 anos ou mais para consumir bebidas alcoólicas.');
    }

    textEnderecoForaDeArea(){
        cy.contains('Putz, está fora da nossa área...');
    }

    textEmailEnviadoSucesso(){
        cy.contains('E-mail registrado com sucesso');
    }

    textLoginComSucesso(){
        cy.contains('Que bom ver você aqui.');
    }
}

export default TextIn;