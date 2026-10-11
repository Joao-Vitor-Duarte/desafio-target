import type { Mercadoria } from "../types/q2types.js";
export default class Deposito {
    private static estoque;
    private static instancia;
    private constructor();
    static getInstance(): Deposito;
    static abastecerMercadoria(mercadoria: Mercadoria, quantidade: number): void;
    static retirarMercadoria(mercadoria: Mercadoria, quantidade: number): void;
}
//# sourceMappingURL=deposito.d.ts.map