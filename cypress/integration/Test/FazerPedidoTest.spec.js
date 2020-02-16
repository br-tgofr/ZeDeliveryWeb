import FazerPedidoPage from '../Page/FazerPedidoPage.spec'
import TextIn from '../Utils/TextIn.spec'
import ProdutosPage from '../Page/ProdutosPage.spec'
import LoginPage from '../Page/LoginPage.spec'

  describe('Visitar - Ze Delivery', () => {
    it('Escolher a opção Maior de 18', () => {
      const fazerPedido = new FazerPedidoPage();
      fazerPedido.visitarUrl();
      cy.wait(2000)
      fazerPedido.btnMaiorIdade();
    });
  });

  describe('Fazer pedido', () => {
    it('Cliente fora de area', () => {
      const fazerPedido = new FazerPedidoPage();
      const text = new TextIn();
      fazerPedido.visitarUrl();
      cy.wait(2000)
      fazerPedido.btnMaiorIdade();
      fazerPedido.btnInserirEndereco();
      fazerPedido.digitarEnderecoForaDeArea('Rua Luis Figueira, 13 - Jardim Bandeirantes');
      fazerPedido.digitarEnderecoCompl('rua sem saida');
      fazerPedido.btnEnderecoCasa();
      fazerPedido.btnEnderecoContinuar();
      cy.wait(2000)
      text.textEnderecoForaDeArea();
      fazerPedido.digitarEmailForaDeArea('teste@teste.com');
      fazerPedido.btnEnderecoEnviarEmail();
      text.textEmailEnviadoSucesso();
      fazerPedido.btnEnderecoEntendi();
    });
  });

  describe('Fazer pedido', () => {
    it('Cliente dentro da area de cobertura', () => {
      const fazerPedido = new FazerPedidoPage();
      const prod = new ProdutosPage();
      const login = new LoginPage();
      fazerPedido.visitarUrl();
      cy.wait(2000)
      fazerPedido.btnMaiorIdade();
      login.logarZeDelivery()
      cy.wait(2000)
      fazerPedido.btnInserirEndereco();
      fazerPedido.digitarEnderecoAreaCobertura('Nubank Rua Capote Valente')
      fazerPedido.checkNaoTemCompl();
      fazerPedido.btnEnderecoTrabalho();
      fazerPedido.btnEnderecoContinuar();
      fazerPedido.btnProdutosDisp();
      cy.wait(2000)
      prod.digitarProduto('Original 600ml');
      prod.prodCervejaOriginal();
      cy.wait(2000)
      prod.checkGarrafaRetornavel();
      prod.btnAdicionar();
    });
  });