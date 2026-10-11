import Deposito from "../models/deposito.js";
export default function q2() {
    const semEstoque = {
        codigoProduto: 109,
        descricaoProduto: "Caneta Preta",
    };
    const caneta = {
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
//# sourceMappingURL=q2.js.map