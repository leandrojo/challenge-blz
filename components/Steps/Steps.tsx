import Link, { LinkProps } from 'next/link'
import styled from 'styled-components';

const StyledSteps = styled.nav`
  background-color: #FFF;
  border-radius: 0 0 3px 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  height: 40px;

  ol {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
`;

interface StyledStepProps {
  active?: boolean;
}

const StyledStep = styled.li<StyledStepProps>`
  align-items: center;
  display: flex;
  flex: 0;
  height: 100%;
  list-style-type: none;

  a {
    align-items: center;
    color: ${({ active, theme }) => {
      return active ? theme.colors.primaryLight : theme.colors.grayLight;
    }};
    display: inline-flex;
    font-size: 13px;
    font-weight: 700;
    height: 100%;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

interface StepProps extends LinkProps {
  active?: boolean;
}

const Step: React.FC<StepProps> = ({ active, children, ...props }) => {
  return (
    <StyledStep active={active}>
      <Link {...props}>
        <a>{children}</a>
      </Link>
    </StyledStep>
  );
};

interface StepsProps {
  currentStep?: number;
}

const Steps: React.FC<StepsProps> = ({ currentStep }) => {
  console.log(currentStep);
  return (
    <StyledSteps>
      <ol>
        <Step active href="/sacola">Sacola</Step>
        <Step href="/pagamento">Pagamento</Step>
        <Step href="/confirmacao">Confirmação</Step>
      </ol>
    </StyledSteps>
  );
};

Steps.defaultProps = {
  currentStep: 1,
};

export default Steps;