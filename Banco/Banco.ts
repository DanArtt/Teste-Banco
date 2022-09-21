export class Banco {
    clienteNome: string;
    clienteCpf: string;
    contaCorrente: number;
    contaCredito: number;
    faturaCredito: number;
    contaInvetimento: number;
    contaPoupanca: number;
    clienteSaldo: number;
    limiteDisponivel: number;


    nome() {
        console.log(`Bem-Vindo ao Banco. \n Nome do Cliente: ${interacao.clienteNome}`)
    }

    cpf() {
        console.log(`CPF do Cliente: ${interacao.clienteCpf}`)

    }

    corrente() {
        console.log(`Saldo na Conta Corrente: R$${interacao.contaCorrente}`)
    }

    credito() {
        console.log(`Limite no Crédito é de: R$${interacao.contaCredito}`)
    }
    
    fatCredito() {
        console.log(`A fatura desse mês é de: R$${interacao.faturaCredito}`)
    }

    investimento() {
        interacao.contaInvetimento = interacao.clienteSaldo * 0.25
        console.log(`Você já envistiu: R$${interacao.contaInvetimento}`)
    }

    poupanca() {
        console.log(`Saldo na Conta Poupança: R$${interacao.contaPoupanca}`)
    }

    saldo() {
        console.log(`Seu saldo é de: R$${interacao.clienteSaldo}`)
    }

    limiDisponivel() {
        console.log(`Você ainda pode usar R$:${interacao.limiteDisponivel} do seu limite.`)
    }
}

var interacao = new Banco();
interacao.clienteNome = "Daniel de Andrade da Silva"
interacao.clienteCpf = "179.463.860.54"
interacao.contaCorrente = 2500
interacao.contaCredito = 4000
interacao.faturaCredito = 2100
interacao.contaPoupanca = 1000
interacao.clienteSaldo = interacao.contaCorrente + interacao.contaPoupanca
interacao.limiteDisponivel = interacao.contaCredito - interacao.faturaCredito

interacao.nome()
interacao.cpf()
interacao.corrente()
interacao.credito()
interacao.fatCredito()
interacao.investimento()
interacao.poupanca()
interacao.saldo()
interacao.limiDisponivel()

