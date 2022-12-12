import { FC } from 'react';

import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <div className='item-details'>
          <span className='name'>{name}</span>
            <span className='price'>
            {quantity} x Rs.{price}
          </span>
          </div>
      </ItemDetails>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
