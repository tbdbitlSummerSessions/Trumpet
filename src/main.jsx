import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, MantineProvider } from '@mantine/core';
import App from './App.jsx';

function Root() {
  useEffect(() => {
    // Apply additional custom styles that Mantine global styles can't cover
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.getElementById('root').style.height = '100%';
    document.getElementById('root').style.display = 'flex';
    document.getElementById('root').style.flexDirection = 'column';
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // Mantine theme global styles (additional theme customizations)
        globalStyles: (_theme) => ({
          html: {
            height: '100%',
            margin: 0,
          },
          body: {
            height: '100%',
            margin: 0,
            padding: 0,
            display: 'flex', // Using Mantine's global styles for flex
            flexDirection: 'column', // Mantine's flex-direction
          },
          '#root': {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
        }),
      }}
    >
      <Container fluid style={{ flex: 1, display: 'flex', height: '100%' }}>
        <App />
      </Container>
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
