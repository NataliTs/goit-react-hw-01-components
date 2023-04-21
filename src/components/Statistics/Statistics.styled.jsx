import styled from 'styled-components';

export const StatisticsSection = styled.section`
  box-shadow: ${p => p.theme.boxShadow};
`;

export const Title = styled.h2`
  margin: auto;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  width: 300px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatsItem = styled.li`
  text-align: center;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${p => p.theme.colors.white};
`;
export const Percentage = styled.span`
  font-size: 24px;
  color: ${p => p.theme.colors.white};
`;
