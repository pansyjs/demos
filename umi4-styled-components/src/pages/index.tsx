import { Title, Header, Button, TomatoButton, Link, StyledLink  } from './style';

export default () => {
  return (
    <>
      <Header>
        header
      </Header>
      <div>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <TomatoButton>TomatoButton</TomatoButton>
      </div>
      <Title>
        123
      </Title>

      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>
    </>
  )
}
