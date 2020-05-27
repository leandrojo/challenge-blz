import { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';

import {
  Button,
  Card,
  Heading,
  Layout,
  ProductList,
  ProductListItem,
  Total,
} from '../components';
import { useCart } from '../enhancers';

const Cart: NextPage = () => {
  const { data } = useCart();

  function renderProducts() {
    return data?.items?.map(({ product }) => (
      <ProductListItem key={product.sku} data={product} />
    ));
  }

  return (
    <div className="container">
      <Head>
        <title>Sacola – Challenge – Beleza na Web</title>
      </Head>

      <Layout>
        <Heading>Produtos</Heading>
        <Card>
          <ProductList>
            {renderProducts()}
          </ProductList>
        </Card>
        <Total data={data} />
        <Link href="/payment">
          <Button fluid type="button">Seguir Para o Pagamento</Button>
        </Link>
      </Layout>
    </div>
  )
}

export default Cart;
