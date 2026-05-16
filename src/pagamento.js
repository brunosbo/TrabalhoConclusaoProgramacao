export default class pagamento {
    
  #pagamentos   // propriedade da classe

    constructor() {  // inicializar construtor de pagamento
        this.#pagamentos = [];
    }

    // metodo de pagamento dentro da classe
    realizarPagamento(codigoPagamento, empresaPagamento, valorPagamento) {
      
      // validar a gravaçao do campo categoria de acordo com o valor informado  
      let tipoCategoria = 'Padrao';
      if (valorPagamento > 100) {
        tipoCategoria =  'Cara';  
      }
      
      
      
        this.#pagamentos.push({
            codigoDeBarras: codigoPagamento,
            empresa: empresaPagamento, 
            valor: valorPagamento,
            categoria: tipoCategoria
        });     
     

    }

    consultarUltimoPagamento() {
        return this.#pagamentos;
    }

}

