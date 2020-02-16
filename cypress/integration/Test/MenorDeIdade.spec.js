import FazerPedidoPage from '../Page/FazerPedidoPage.spec'
import TextIn from '../Utils/TextIn.spec'

describe('Visitar - Ze Delivery', () => {
    it('Escolher a opção Menor de 18', () => {
      const fazerPedido = new FazerPedidoPage();
      const text = new TextIn();
      fazerPedido.visitarUrl();
      fazerPedido.btnMenorIdade(); 
      text.textMenorIdade();
    });
  });