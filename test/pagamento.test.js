import pagamento from  '../src/pagamento.js'
import assert from 'node:assert';

describe ('Classe de servico de pagamento de cobranças', () => {
    it ('Validar que o pagamento menor que 100 é adicionado na lista de pagamentos', () => {
        //Arrange
        const pagamentoCobranca = new pagamento();
        
        //Act
        pagamentoCobranca.realizarPagamento('1234-5678-1012','Enel',98.50);
        const ConsultaPagamentoCobranca = pagamentoCobranca.consultarUltimoPagamento();
        const UltimoPagamento = ConsultaPagamentoCobranca.at(-1);
        
        //Assert
        assert.equal(UltimoPagamento.codigoDeBarras, '1234-5678-1012');
                assert.equal(UltimoPagamento.empresa, 'Enel');
        assert.equal(UltimoPagamento.valor, 98.50);
        assert.equal(UltimoPagamento.categoria, 'Padrao');

    });

    it ('Validar que o pagamento maior que 100 é adicionado na lista de pagamentos', () => {
        //Arrange
        const pagamentoCobranca = new pagamento();
        
        //Act
        pagamentoCobranca.realizarPagamento('1233-5677-7563','Equatorial',251);
        const ConsultaPagamentoCobranca = pagamentoCobranca.consultarUltimoPagamento();
        const UltimoPagamento = ConsultaPagamentoCobranca.at(-1);
        
        //Assert
        assert.equal(UltimoPagamento.codigoDeBarras, '1233-5677-7563');
        assert.equal(UltimoPagamento.empresa, 'Equatorial');
        assert.equal(UltimoPagamento.valor, 251);
        assert.equal(UltimoPagamento.categoria, 'Cara');
    });


});