import {
  Container,
  Logo,
  Title,
  Description,
  Article,
  ImageTechnologies
} from './Main.styles';

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <Container>
    <Logo
      src="/img/logos/ifc-logo.svg"
      alt="Infra.commerce logo"
      title="Infra.commerce"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Article>
      <ImageTechnologies
        src="/img/logos/ts.svg"
        alt="Typescript logo"
        title="Typescript"
      />
      <ImageTechnologies
        src="/img/logos/react.svg"
        alt="React logo"
        title="React"
      />
      <ImageTechnologies
        src="/img/logos/next.png"
        alt="Next.js logo"
        title="Next.js"
      />
      <ImageTechnologies
        src="/img/logos/sc.png"
        alt="styled components logo"
        title="styled components"
      />
      <ImageTechnologies
        src="/img/logos/storybook.png"
        alt="Storybook logo"
        title="Storybook"
      />
    </Article>
  </Container>
);

export default Main;
