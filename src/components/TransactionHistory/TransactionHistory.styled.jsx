import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 50px;
  width: 700px;
  text-align: center;
  box-shadow: ${p => p.theme.boxShadow};
  border-collapse: collapse;
`;

export const Head = styled.thead`
  background-color: ${p => p.theme.colors.tableHeadColor};
  color: white;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border: ${p => p.theme.border};
`;

export const Td = styled.td`
  padding: 10px;
  border: ${p => p.theme.border};
`;

export const Tr = styled.tr`
  :nth-child(2n) {
    background-color: rgb(234, 234, 234);
  }
`;
