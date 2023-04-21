import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: ${p => p.theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  width: calc((100% - 90px) / 3);
  border-radius: 10px;
  box-shadow: ${p => p.theme.boxShadow};
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.06em;
`;

export const Avatar = styled.img`
  display: block;
  height: auto;
  width: 180px;
  border-radius: 50%;
  margin: 0 auto 20px auto;
`;

export const Description = styled.div`
  padding: 30px 0;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 28px;
`;

export const Tag = styled.p`
  font-size: 20px;
  color: ${p => p.theme.colors.secondaryText};
`;

export const Location = styled.p`
  font-size: 20px;
  color: ${p => p.theme.colors.secondaryText};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${p => p.theme.colors.secondaryBgcolor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: ${p => p.theme.border};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: calc(100% / 3);
  font-weight: 700;
  font-size: 20px;
  :not(:last-child) {
    border-right: ${p => p.theme.border};
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${p => p.theme.colors.secondaryText};
`;
