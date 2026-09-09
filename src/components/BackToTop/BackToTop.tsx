import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.accentGold};
  font-size: 1.2rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
`;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button $visible={visible} onClick={scrollToTop} aria-label="Back to top">
      ↑
    </Button>
  );
}
