import { Container } from './LayoutStyles'
const Layout = ({ children }) => {
  return (
    <Container>
        <main>{children}</main>
    </Container>
  );
};

export default Layout;
