import FazerPedidoPage from '../Page/FazerPedidoPage.spec'
import LoginPage from '../Page/LoginPage.spec';
import TextIn from '../Utils/TextIn.spec'

describe('Login', () => {
    it('Logar com uma conta existente', () => {
      const fazerPedido = new FazerPedidoPage();
      const login = new LoginPage();
      const text = new TextIn();
      fazerPedido.visitarUrl();
      cy.wait(2000)
      fazerPedido.btnMaiorIdade();
      login.btnEntrar();
      login.btnLoginEntrarComEmail();
      login.digitarEmail('andreia.cspinha@gmail.com');
      login.digitarSenha('Amor03!@');
      login.btnLoginEntrar();
      cy.wait(5000)
      text.textLoginComSucesso();
    });
  });