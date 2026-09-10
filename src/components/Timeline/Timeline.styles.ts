import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 40px auto;
  padding-left: 2px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${({ theme }) => theme.border};
    transform: translateX(-50%);
  }
`;

export const Row = styled.div<{ $side: 'left' | 'right' }>`
  position: relative;
  display: flex;
  justify-content: ${({ $side }) => ($side === 'left' ? 'flex-start' : 'flex-end')};
  padding: 23px 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 32px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accentGold};
    transform: translateX(-50%);
  }
`;

export const Side = styled.div`
  width: 45%;
`;
