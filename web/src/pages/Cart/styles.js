import styled from 'styled-components';
import { darken } from 'polished';

const blue = '#1976d2';

export const Container = styled.div`
   padding: 30px;
   background: #fff;
   border-radius: 4px;

   footer {
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      align-items: center;

      button {
         background: ${blue};
         color: #fff;
         border: none;
         border-radius: 3px;
         padding: 5px 10px;
         text-transform: uppercase;
         transition: all 0.25s ease-in-out;

         &:hover {
            background: ${darken(0.05, blue)};
         }

         &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
         }
      }
   }
`;

export const ProductTable = styled.table`
   width: 100%;

   thead th {
      color: #999;
      text-align: left;
      padding: 12px;
   }

   tbody td {
      padding: 12px;
      vertical-align: middle;
      border-bottom: 1px solid #eee;
   }

   img {
      height: 100px;
      width: auto;
   }

   strong {
      color: #333;
      display: block;
   }

   span {
      display: block;
      margin-top: 3px;
      font-size: 16px;
      font-weight: bold;
   }

   div {
      display: flex;
      align-items: center;

      input {
         border: 1px solid #eee;
         border-radius: 2px;
         color: #333;
         padding: 5px;
         width: 50px;
      }
   }

   button {
      background: none;
      border: none;
      padding: 5px;
      transition: all 0.25s ease-in-out;

      &:hover {
         transform: scale(1.05);
      }
   }
`;

export const Total = styled.div`
   display: flex;
   align-items: baseline;

   span {
      color: #999;
      font-weight: bold;
   }

   strong {
      font-size: 20px;
      margin-left: 5px;
      color: #333;
   }
`;
