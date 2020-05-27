import Head from 'next/head';
import styled from 'styled-components';

import Steps, { StyledSteps, StyledStep } from '../Steps';

const Container = styled.div`
  padding: 0 10px 0;
`;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 50px auto 0;
    max-width: 768px;
    width: 100%;

    ${Container} {
      width: 512px;
    }

    ${StyledSteps} {
      background: transparent;
      box-shadow: none;
      height: 100%;
      margin-top: 120px;
      min-width: 256px;
      
      ol {
        align-items: flex-end;
        flex-direction: column;
      }
    }

    ${StyledStep} {
      height: 40px;
      margin-right: 20px;
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledLayout>
        <Steps />
        <Container>
          {children}
        </Container>
      </StyledLayout>
    </>
  );
};

export default Layout;