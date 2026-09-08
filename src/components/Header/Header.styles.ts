import styled from 'styled-components';

export const HeaderWrapper = styled.div<{ $bgImage: string }>`
  position: relative;
  width: 100%;
  height: 260px;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;

`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
 
`;

export const Banner = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.bannerBackground};

`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.accentGold};
  font-size: 2rem;
  letter-spacing: 4px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin: 0;
`;
