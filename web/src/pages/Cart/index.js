import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   MdRemoveCircleOutline,
   MdAddCircleOutline,
   MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
   const total = useSelector(state =>
      formatPrice(
         state.cart.reduce((sumTotal, product) => {
            return sumTotal + product.price * product.amount;
         }, 0)
      )
   );

   const cart = useSelector(state =>
      state.cart.map(product => ({
         ...product,
         subTotal: formatPrice(product.amount * product.price),
      }))
   );

   const dispatch = useDispatch();

   function increment(product) {
      dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
   }

   function decrement(product) {
      dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
   }

   return (
      <Container>
         <ProductTable>
            <thead>
               <tr>
                  <th />
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               {cart.map(product => (
                  <tr key={product.id}>
                     <td>
                        <img src={product.image} alt={product.title} />
                     </td>

                     <td>
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>
                     </td>

                     <td>
                        <div>
                           <button
                              type="button"
                              onClick={() => decrement(product)}
                           >
                              <MdRemoveCircleOutline
                                 size={20}
                                 color="#1976d2"
                              />
                           </button>

                           <input
                              type="number"
                              readOnly
                              value={product.amount}
                           />

                           <button
                              type="button"
                              onClick={() => increment(product)}
                           >
                              <MdAddCircleOutline size={20} color="#1976d2" />
                           </button>
                        </div>
                     </td>

                     <td>
                        <strong>{product.subTotal}</strong>
                     </td>

                     <td>
                        <button type="button">
                           <MdDelete
                              size={20}
                              color="#1976d2"
                              onClick={() =>
                                 dispatch(
                                    CartActions.removeFromCart(product.id)
                                 )
                              }
                           />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </ProductTable>

         <footer>
            <button type="button" disabled={cart.length <= 0}>
               Finalizar Pedido
            </button>

            <Total>
               <span>Total</span>
               <strong>{total}</strong>
            </Total>
         </footer>
      </Container>
   );
}
