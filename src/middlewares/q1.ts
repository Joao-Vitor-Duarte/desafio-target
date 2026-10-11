//1.
import type { Venda } from "../types/q1types.js";
//Json com registros das vendas do time comercial
import comercial from "../data/vendas.json" with { type: "json" };
  //regras para comissão:
  // SE (valorVenda < 100) -> !bonus
  // SE (valorVenda > 100 && venda<500) -> bonus = valorVenda*0.01
  // SE (valorVenda > 500) -> bonus = valorVenda*0.05
export default function q1(): void {
  const vendas: Array<Venda> = comercial.vendas;
  //lista com todas as comissões
  const listaComissao: Array<Venda> = vendas.map((venda: Venda): Venda => {
    const { vendedor, valor } = venda;
    let comissao: Venda = {
      vendedor: vendedor,
      valor: 0.0,
    };
    //regras das comissões
    if (valor < 0 || vendedor.trim() === "") {
      return comissao;
    } else if (valor > 100 && valor < 500) {
      comissao.valor = valor * 0.01;
    } else {
      comissao.valor = valor * 0.05;
    }
    return comissao;
  });
  //coleção com o total das comissões de cada vendedor
  const comissaoTotal: Record<string, number> = {};

  for (const { vendedor, valor } of listaComissao) {
    comissaoTotal[vendedor] = (comissaoTotal[vendedor] ?? 0) + valor;
  }
  let aux: string = "";
  console.log("1 - comissão total:");
  for (const { vendedor } of listaComissao) {
    if (aux != vendedor) {
      console.log(`${vendedor}: ${comissaoTotal[vendedor]?.toFixed(2)}`);
      aux = vendedor;
    }
  }
  console.log();
}
