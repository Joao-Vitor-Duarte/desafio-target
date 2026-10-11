// 2.
import type { Mercadoria } from "../types/q2types.js";
import Deposito from "../models/deposito.js";

export default function q2() {
  const semEstoque: Mercadoria = {
    codigoProduto: 109,
    descricaoProduto: "Caneta Preta",
  };
  const caneta: Mercadoria = {
    codigoProduto: 101,
    descricaoProduto: "Caneta Azul",
  };

  Deposito.getInstance();
  console.log("2 - abastecimento:");
  Deposito.abastecerMercadoria(caneta, 20);
  console.log("2 - retirada:");
  Deposito.retirarMercadoria(caneta, 10);
  console.log("2 - abastecimento:");
  Deposito.abastecerMercadoria(semEstoque, 20);
  console.log("2 - retirada:");
  Deposito.retirarMercadoria(semEstoque, 10);
  console.log();
}
