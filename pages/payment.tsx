import { useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Card, CreditCardFormController, CreditCardForm, Heading, Layout, Total } from '../components';
import { useCart, useCreditCard } from '../enhancers';

const Payment: NextPage = () => {
  const router = useRouter();
  const { data } = useCart();
  const { save } = useCreditCard();

  const handleSubmit = useCallback(async (payload: any) => {
    await save(payload);
    router.push('/success');
  }, [save]);

  return (
    <div className="container">
      <Head>
        <title>Pagamento – Challenge – Beleza na Web</title>
      </Head>

      <Layout>
        <CreditCardFormController onSubmit={handleSubmit}>
          {() => (
            <>
              <Heading>Cartão de Crédito</Heading>
              <Card>
                <CreditCardForm />
              </Card>
              <Total data={data} />
              <Button fluid type="submit">Finalizar o Pedido</Button>
            </>
          )}
        </CreditCardFormController>
      </Layout>
    </div>
  )
}

export default Payment;
