import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Button,
  Container,
  Center,
  Group,
  ScrollArea,
  Flex,
  Box,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { fundementals } from "./Fundamentals";
import AnimationView from "./AnimationView";
import { useState, createContext, useContext } from "react";
import Test from "./Test";

export const FundContext = createContext(null);

export function NavbarSection() {
  const [opened, { toggle }] = useDisclosure();
  const [fund, setFund] = useState(fundementals[0]);

  return (
    <FundContext.Provider value={fund}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        style={{ width: "100vw" }}
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <p>TBDBITL Trumpet Summer Session Guide</p>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>
            <h3>Fundamentals</h3>
          </AppShell.Section>
          <AppShell.Section grow component={ScrollArea}>
            <Stack>
              {fundementals.map((fund, index) => (
                <Button
                  variant="light"
                  color="rgba(224, 92, 92, 1)"
                  onClick={() => setFund(fund)}
                  key={index}
                >
                  {fund.name}
                </Button>
              ))}
            </Stack>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <AppShell.Section
            grow
            component={ScrollArea}
            style={{ width: "100%" }}
          >
            <SimpleGrid cols={1} spacing="xl">
              <h1>{fund.name}</h1>
              <p>{fund.description}</p>
              <Box
                style={{
                  overflow: "hidden",
                  minHeight: "50vh",
                  position: "relative",
                }}
              >
                <AnimationView />
              </Box>
            </SimpleGrid>
          </AppShell.Section>
        </AppShell.Main>
        <AppShell.Footer>
          <Group justify="flex-end">
            <p>Made by C12 2024</p>
            <img
              align="right"
              style={{ maxWidth: "5vw", maxHeight: "5vh" }}
              src={"Crow.png"}
            />
          </Group>
        </AppShell.Footer>
      </AppShell>
    </FundContext.Provider>
  );
}

export default NavbarSection;
