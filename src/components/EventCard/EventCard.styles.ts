import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.cardBackground};
  padding: 16px 20px;
  max-width: 360px;
`;

export const Year = styled.span`
  display: block;
  color: ${({ theme }) => theme.accentGold};
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 2rem;
  letter-spacing: 40px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  line-height: 1.4;
  margin: 0 0 8px 0;
`;

export const ReadMore = styled.a`
  font-size: 0.85rem;
  font-weight: 600;
`;
