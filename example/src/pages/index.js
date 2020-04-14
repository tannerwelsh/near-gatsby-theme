// @jsx jsx
import React from "react";
import {
  jsx, // enables `sx` attribute
  useColorMode,
  Box,
  Divider,
  Grid,
  Text,
  Heading,
  Link,
  Label,
  Checkbox,
} from "theme-ui";
import styled from '@emotion/styled'

import Layout from "gatsby-theme-near/src/components/layout";
import NearAuthenticate from "gatsby-theme-near/src/components/near-authenticate"

const StyledSection = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const ColorModeToggle = () => {
  const [mode, setMode] = useColorMode()
  const toggleMode = () => {
    if (mode === "dark") setMode(null)
    else setMode("dark")
  }

  return (
    <Label>
      <Checkbox checked={mode === "dark"} onChange={toggleMode} />
      Dark mode
    </Label>
  )
}

export default () => (
  <Layout>
    <Heading as="h1">Gatsby NEAR Theme</Heading>
    <Text>
      Gatsby theme using styles derived from NEAR <Link href="https://docs.nearprotocol.com/">docs</Link> &amp; <Link href="https://nearprotocol.com/brand/">brand</Link>.
    </Text>

    <Divider />
    <ColorModeToggle />
    <Divider />

    <Heading as="h2" variant="section-head">Components</Heading>

    <StyledSection>
      <Heading variant="subsection-head">NearAuthenticate</Heading>
      <Text>Sign in/out button for authenticating w/ NEAR.</Text>

      <Box sx={{p: 2, mt: 2, borderWidth: 0, borderStyle: "solid"}}>
        <NearAuthenticate signInParams={{ title: "Example App" }} />
      </Box>
      <Box>
        <Text variant="code">
          {'<NearAuthenticate signInParams={{ title: "Example App" }} />'}
        </Text>
      </Box>
    </StyledSection>

    <Heading as="h2" variant="section-head">Colors</Heading>

    <StyledSection>
      <Grid gap={2} columns={[2, '1fr 2fr']}>
        <Box>black</Box><Box sx={{bg: "black"}}>&nbsp;</Box>
        <Box>white</Box><Box sx={{bg: "white"}}>&nbsp;</Box>
        <Box>slate</Box><Box sx={{bg: "slate"}}>&nbsp;</Box>
        <Box>blue</Box><Box sx={{bg: "blue"}}>&nbsp;</Box>
        <Box>yellow</Box><Box sx={{bg: "yellow"}}>&nbsp;</Box>
        <Box>green</Box><Box sx={{bg: "green"}}>&nbsp;</Box>
        <Box>royal</Box><Box sx={{bg: "royal"}}>&nbsp;</Box>
        <Box>earth</Box><Box sx={{bg: "earth"}}>&nbsp;</Box>
        <Box>grey</Box><Box sx={{bg: "grey"}}>&nbsp;</Box>
      </Grid>
    </StyledSection>

    <Heading as="h2" variant="section-head">Fonts</Heading>

    <StyledSection>
      <Grid gap={2} columns={[2, '1fr 2fr']}>
        <Box><Text sx={{fontSize: 4, fontFamily: "headlines"}}>Headlines</Text></Box>
        <Box><Text sx={{fontSize: 4, fontFamily: "headlines"}}>BwSeidoRound</Text></Box>

        <Box><Text sx={{fontSize: 1, fontFamily: "body"}}>Body</Text></Box>
        <Box><Text sx={{fontSize: 1, fontFamily: "body"}}>Benton-Sans</Text></Box>

        <Box><Text sx={{fontSize: 2, fontFamily: "monospace"}}>Monospace</Text></Box>
        <Box><Text sx={{fontSize: 2, fontFamily: "monospace"}}>Source Code Pro</Text></Box>
      </Grid>
    </StyledSection>
  </Layout>
);
