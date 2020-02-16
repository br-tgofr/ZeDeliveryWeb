import FazerPedidoPage from '../Page/FazerPedidoPage.spec'
import CadastroPage from '../Page/CadastroPage.spec';

describe('Efetuar cadastro', () => {
    it('Cadastrar uma nova conta', () => {
      const fazerPedido = new FazerPedidoPage();
      const cadastro = new CadastroPage();
      fazerPedido.visitarUrl();
      cy.wait(2000)
      fazerPedido.btnMaiorIdade();
      cadastro.btnCadastroEntrar();
      cadastro.linkCadastrar();
      cadastro.btnContinuarComEmail();
      cadastro.criarNovaConta('Tiago Freitas', 'tiagofreitas94@gmail.com', 'Amor03!@', '42921067897', '11988145662', '25');
      cadastro.btnCadastrarContinuar();
    });
  });