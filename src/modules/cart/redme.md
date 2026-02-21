MiniCart — Documento de Arquitetura
    Objetivo
        Componente responsável por:
            Exibir itens adicionados ao carrinho
            Permitir alteração de quantidade
            Permitir remoção de item
            Exibir subtotal
            Direcionar para checkout

Estrutura da Feature
    Características
        Feature isolada
        Estado global próprio
        Regras de negócio separadas
        Componentes pequenos e específicos
        Sem lógica pesada dentro do JSX

Estrutura de Pastas
    modules/
        cart/
            components/
            MiniCart/
                MiniCart.tsx
                MiniCartHeader.tsx
                MiniCartItem.tsx
                MiniCartFooter.tsx
            context/
                CartProvider.tsx
            hooks/
                useCart.ts
            services/
                cart.service.ts
            types/
                cart.types.ts


Fluxo de Funcionamento
    Usuário clica em “Adicionar ao carrinho”
    Dispara função addToCart()
    Estado global é atualizado
    MiniCart re-renderiza automaticamente
    Subtotal é recalculado via service

Responsabilidades por Camada
    Components
        Apenas UI.
        Renderização
        Interação

Layout
    Sem cálculo complexo.

Hooks (useCart)
    Orquestra estado e ações.
    Responsável por:
        addItem
        removeItem
        updateQuantity
        abrir/fechar minicart

Services (cart.service.ts)

Regras de negócio puras.

    Exemplo:
        export function calculateSubtotal(items: CartItem[]) {
            return items.reduce((acc, item) => {
                return acc + item.price * item.quantity
            }, 0)
        }

Context
    Fornece estado global da feature.

Estrutura Visual
    MiniCart deve conter:
        Overlay escuro full width
        Drawer lateral
        Scroll interno (quando necessário)
        Footer fixo com subtotal e CTA

Recursos Necessários
    Estado global
    Regras de negócio separadas
    Persistência (API ou localStorage)
    Sincronização entre abas (opcional avançado)
    Cálculo de subtotal

Componentes Globais Reutilizados
    Ficam em shared:
        Drawer
        Button

    Melhorias futuras 
        Estratégia de persistência (localStorage / API)
        Estratégia de sincronização
        Tratamento de estoque
        Estratégia de invalidação
        Tratamento de preço dinâmico