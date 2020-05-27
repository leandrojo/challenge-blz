import React, { useContext } from 'react';
import { Controller } from 'react-hook-form';
import styled, { css, CSSObject } from 'styled-components';

import TextField from '../TextField';

import { CreditCardFormContext } from './CreditCardFormController';

const StyledForm = styled.div``;

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

  ${({ item }) => (item && css`
    border-right: 10px solid transparent;

    &[item]:last-of-type {
      border-right: none;
    }
  `)}

  flex: ${({ sm }) => sm};
  
  ${({ css }) => css};
`;

const CreditCardForm = () => {
  const context = useContext(CreditCardFormContext);

  if (context === null) return null;

  const { control, errors } = context;

  function renderFieldCreditCard() {
    const mask = [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
    return (
      <Controller
        as={
          <TextField
            label="Número do Cartão:"
            mask={mask}
            error={errors.number && errors.number.message}
            placeholder="____.____.____.____"
          />
        }
        name="number"
        rules={{ required: "Numero do cartão obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldName() {
    return (
      <Controller
        as={
          <TextField
            label="Nome do Titular:"
            mask={false}
            error={errors.name && errors.name.message}
            placeholder="Como no cartão"
          />
        }
        name="name"
        rules={{ required: "Nome do titular obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldExpiringDate() {
    return (
      <Controller
        as={
          <TextField
            label="Validade (mês/ano):"
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
            error={errors.expiringDate && errors.expiringDate.message}
            placeholder="__/__"
          />
        }
        name="expiringDate"
        rules={{ required: "Validade do cartão obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldCodeVerification() {
    return (
      <Controller
        as={
          <TextField
            error={errors.code && errors.code.message}
            label="CVV:"
            mask={[/\d/, /\d/, /\d/]}
            placeholder="___"
          />
        }
        name="code"
        rules={{ required: "Codígo de verificação obrigatório." }}
        control={control}
      />
    );
  }

  return (
    <StyledForm>
      <Grid container>
        <Grid item sm={2} css={{ marginBottom: '25px' }}>
          {renderFieldCreditCard()}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} css={{ marginBottom: '25px' }}>
          {renderFieldName()}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={3}>
          {renderFieldExpiringDate()}
        </Grid>
        <Grid item sm={2}>
          {renderFieldCodeVerification()}
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default CreditCardForm;
