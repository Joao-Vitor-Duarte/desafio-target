import type {
  ItemEstocado,
  Mercadoria,
  EstoqueJSON,
} from "../types/q2types.js";
//estoque dos produtos estão no json abaixo
import estoqueJson from "../data/estoque.json" with { type: "json" };
const estoqueProdutos: Array<EstoqueJSON> = estoqueJson.estoque;

//cada movimentação de entrada ou saída de mercadoria no depósito deve ter:
//identificador único == codigoProduto
//descrição para identificar o tipo da movimentação realizada 

export default class Deposito {
  private static estoque: Array<ItemEstocado> = [];
  private static instancia: Deposito | null = null;

  private constructor() {
    Deposito.estoque = estoqueProdutos.map((item) => ({
      mercadoria: {
        codigoProduto: item.codigoProduto,
        descricaoProduto: item.descricaoProduto,
      },
      quantidade: item.estoque,
    }));
  }

  static getInstance(): Deposito {
    if (!Deposito.instancia) {
      Deposito.instancia = new Deposito();
    }
    return Deposito.instancia;
  }
  // entrada da mercadoria no depósito
  static abastecerMercadoria(mercadoria: Mercadoria, quantidade: number): void {
    const item = Deposito.estoque.find(
      // verifica identificador único da mercadoria
      (registro) =>
        registro.mercadoria.codigoProduto === mercadoria.codigoProduto,
    );

    if (!item) {
      console.log(`${mercadoria.descricaoProduto} não está disponivel.`);
      return;
    }

    item.quantidade += quantidade;
    console.log(
      // descrição do tipo da movimentação realizada
      `o estoque foi abastecido com ${quantidade} ${mercadoria.descricaoProduto}`,
    );
    console.log(
      //qtde final do estoque do produto movimentado.
      `${item.quantidade} ${mercadoria.descricaoProduto} em estoque`,
    );
  }
  // saída da mercadoria no depósito
  static retirarMercadoria(mercadoria: Mercadoria, quantidade: number): void {
    const item = Deposito.estoque.find(
      (registro) =>
        registro.mercadoria.codigoProduto === mercadoria.codigoProduto,
    );

    if (!item) {
      console.log(`${mercadoria.descricaoProduto} não está disponível.`);
      return;
    }

    item.quantidade -= quantidade;
    console.log(
      // descrição do tipo da movimentação realizada
      `retirada de ${quantidade} ${mercadoria.descricaoProduto} do estoque`,
    );
    console.log(
      //qtde final do estoque do produto movimentado.
      `restam ${item.quantidade} ${mercadoria.descricaoProduto} no estoque`,
    );
  }
}
