import styled from 'styled-components';
import { darken } from 'polished';

const blue = '#1976d2';

export const ProductList = styled.ul`
   list-style: none;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;

   li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 10px;

      img {
         align-self: center;
         max-width: 250px;
      }

      > strong {
         font-size: 14px;
         line-height: 20px;
         margin-top: 5px;
         color: #333;
      }

      > span {
         font-size: 18px;
         font-weight: bold;
         margin: 5px 0 15px;
      }

      button {
         display: flex;
         align-items: center;

         border: none;
         background: ${blue};
         border-radius: 4px;
         color: #fff;
         overflow: hidden;
         margin-top: auto;
         transition: all 0.25s ease-in-out;

         &:hover {
            background: ${darken(0.05, blue)};
         }

         div {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.15);
            padding: 10px;

            svg {
               margin-right: 5px;
            }
         }

         span {
            font-size: 15px;
            flex: 1;
            text-align: center;
         }
      }
   }
`;
