import styled, { css, CSSObject } from 'styled-components';

import Text from '../Text';

const StyledCreditCardData = styled.div``;

interface GridProps {
  container?: boolean;
  css?: CSSObject;
  sm?: number;
  item?: boolean;
}

const Grid = styled.div<GridProps>`
  ${({ container }) => (container && css`
    display: flex;
  `)}

  ${({ item }) => (item && css``)}

  flex: ${({ sm }) => sm};
  
  ${({ css }) => css};
`;

interface CreditCardDataProps {
  data: {
    creditCardNumber: string;
    expiringDate: string;
    name: string;
  } | null;
}

const CreditCardData: React.FC<CreditCardDataProps> = ({ data }) => {
  if (data === null) return null;

  const { creditCardNumber, expiringDate, name } = data;

  return (
    <StyledCreditCardData>
      <Text>{creditCardNumber}</Text>
      <Text>{name}</Text>
      <Text>{expiringDate}</Text>
    </StyledCreditCardData>
  );
};

export default CreditCardData;
