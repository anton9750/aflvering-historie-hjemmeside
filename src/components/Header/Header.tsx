import headerImage from '../../assets/header.avif';
import { Banner, HeaderWrapper, Overlay, Subtitle, Title } from './Header.styles';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <HeaderWrapper style={{ backgroundImage: `url(${headerImage})` }}>
      <Overlay />
      <Banner>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Banner>
    </HeaderWrapper>
  );
}
