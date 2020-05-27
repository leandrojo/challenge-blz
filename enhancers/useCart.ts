import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';
import { useEffect } from 'react';

const useCosts = () => {
  const dispatch = useDispatch<Dispatch>();
  const { data, isLoading } = useSelector((state: State) => state.cart);

  const { getCart } = dispatch.cart;

  useEffect(() => {
    getCart();
  }, [getCart]);

  return {
    data,
    getCart,
    isLoading,
  };
};

export default useCosts;
