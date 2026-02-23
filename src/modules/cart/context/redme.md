ontext/CartProvider

Responsabilidades:

Criar contexto

Gerenciar estado do carrinho

Centralizar regras de negócio do carrinho

Expor API pública do domínio Cart

Estado interno

cartItems

isMiniCartOpen

Regras de negócio
addToCart(product)

Verifica se o produto já existe no carrinho

Se existir → incrementa quantidade

Se não → adiciona novo item

Atualiza estado imutavelmente

removeFromCart(productId)

Remove item do carrinho

toggleMiniCart()

Alterna estado do minicart

📁 hooks/useCart

Responsabilidades:

Consumir o CartContext

Garantir que está sendo usado dentro do Provider

Expor API simplificada para UI

Exemplo mental:

const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}

Importante:

useCart NÃO deve ter regra de negócio.

Ele só conecta UI com domínio.

🚨 Agora o ponto importante

Você escreveu:

useCart controla abertura e fechamento do minicart

Isso é perigoso.

useCart não controla nada.
Ele apenas expõe funções que estão no provider.

Quem controla é o Provider.

🧠 Modelagem arquitetural correta
Camada	Responsabilidade
Provider	Estado + regra de negócio
Hook	Acesso ao domínio
UI	Renderização
🎯 Agora sobre addToCart

Ele pertence ao domínio Cart.

Mesmo que seja chamado dentro de:

modules/product/components/ProductCard

Isso não muda o domínio.

🧠 Arquitetura mental que você deve gravar

Product → pode usar Cart
Cart → não pode depender de Product

Dependência unidirecional.

✍️ Versão limpa para seu README

Você pode escrever algo assim:

Cart Feature
Responsabilidade

Gerenciar estado e regras de negócio relacionadas ao carrinho de compras.

Estrutura

context → gerencia estado e regras

hooks → interface de acesso ao domínio

components → UI do minicart

API pública do domínio

addToCart(product)

removeFromCart(productId)

clearCart()

toggleMiniCart()

totalItems

totalPrice