type EstoqueJSON = {
    codigoProduto: number;
    descricaoProduto: string;
    estoque: number;
};
type Mercadoria = {
    codigoProduto: number;
    descricaoProduto: string;
};
type ItemEstocado = {
    mercadoria: Mercadoria;
    quantidade: number;
};
export type { EstoqueJSON, Mercadoria, ItemEstocado };
//# sourceMappingURL=q2types.d.ts.map