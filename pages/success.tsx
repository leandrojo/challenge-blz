import { NextPage } from 'next'
import Head from 'next/head';

import {
  Card,
  CreditCardData,
  Heading,
  Layout,
  Total,
  Feedback,
  ProductList,
  ProductListItem,
} from '../components';
import { useCart, useCreditCard } from '../enhancers';

const Success: NextPage = () => {
  const cart = useCart();
  const creditCard = useCreditCard();

  function renderProducts() {
    return cart.data?.items?.map(({ product }) => (
      <ProductListItem key={product.sku} data={product} />
    ));
  }

  return (
    <div className="container">
      <Head>
        <title>Sucesso – Challenge – Beleza na Web</title>
      </Head>

      <Layout>
        <Feedback>
          Compra Efetuada com Sucesso
        </Feedback>
        <Heading>Pagamento</Heading>
        <Card css={{ marginBottom: '8px', width: '100%' }}>
          <CreditCardData {...creditCard.data} />
        </Card>
        <Heading>Produtos</Heading>
        <Card>
          <ProductList size="sm">
            {renderProducts()}
          </ProductList>
        </Card>
        <Total data={cart.data} />
      </Layout>
    </div>
  )
}

export default Success;
