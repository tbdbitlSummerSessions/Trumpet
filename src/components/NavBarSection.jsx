import "@mantine/core/styles.css";
import { AppShell, Burger, Button, Container, Center, Group, ScrollArea, Flex, Box, SimpleGrid, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { fundementals } from "./Fundamentals";
import AnimationView from "./AnimationView";
import { useState } from "react";

export function NavbarSection() {
  const [opened, { toggle }] = useDisclosure();
  const [title, setTitle] = useState(fundementals[0].name)
  const [description, setDescription] = useState(fundementals[0].description)
  const [url, setUrl] = useState('Hip Hop Dancing')

  function changeContent(action) {
    setTitle(action.name)
    setDescription(action.description)
    //setUrl(action.fname)
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      style={{width: "100vw"}}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <p>TBDBITL Trumpet Summer Session Guide</p>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section><h3>Fundamentals</h3></AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          <Stack>
          {fundementals
            .map((fund, index) => (
              <Button variant="light" color="rgba(224, 92, 92, 1)" onClick={() => changeContent(fund)} key={index}>{fund.name}</Button>
            ))}
            </Stack>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <AppShell.Section grow component={ScrollArea} style={{width: "100%"}}>
          <SimpleGrid cols={1} spacing="xl">
            <h1>{title}</h1>
            <p>{description}</p>
            <Box style={{overflow: "hidden", minHeight: "50vh", position: "relative"}}><AnimationView url={url}/></Box>
          </SimpleGrid>  
        </AppShell.Section>
      </AppShell.Main>
      <AppShell.Footer>
        <Group justify="flex-end">
          <p>Made by C12 2024</p>
          <img align="right" style={{maxWidth: "5vw", maxHeight: "5vh"}} src={'Crow.png'}/>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}

export default NavbarSection;