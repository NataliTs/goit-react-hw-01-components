import styled from 'styled-components';

export const FriendListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fdfdfd;
  border: 1px solid #e3e3e3;
  border-radius: 35px;
  box-shadow: ${p => p.theme.boxShadow};
  margin: 20px;
  padding: 15px;
  width: 400px;
`;

export const Status = styled.span`
  display: inline-block;
  margin-right: 20px;
  margin-left: 14px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: green;
`;

export const Avatar = styled.img`
  height: 100px;
  border-radius: 30%;
  margin-right: 20px;
`;

export const Name = styled.h2`
  margin-right: 20px;
  font-size: 30px;
`;
