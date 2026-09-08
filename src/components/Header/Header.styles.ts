import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background-image: url('/src/assets/header.avif');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const Banner = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.bannerBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 24px 48px;
  text-align: center;
  max-width: 480px;
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
