// 3.
//valor e data de vencimento
export default function q3() {
  const valor = 1000;
  const vencimento = new Date("2026-10-01");
  console.log(
    `3 - valor total com juros para o dia de hoje: R$ ${calculaJuros(valor, vencimento).toFixed(2)}`,
  );
}

//calculo do valor dos juros
function calculaJuros(valor: number, vencimento: Date): number {
  //multa de 2,5% ao dia
  const juros = 2.5;
  const hoje = new Date();
  //diferença entre o vencimento e a data de hoje
  const diferencaEmMilissegundos = hoje.getTime() - vencimento.getTime();
  const diasAtrasados = Math.max(
    0,
    Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)),
  );
  //valor dos juros para a data de hoje
  return valor * Math.pow(1 + juros / 100, diasAtrasados);
}
