import { Box } from '@chakra-ui/react';
import Landing from './Components/Landing';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function Home() {
  return (
    <Box>
      <Landing />
    </Box>
  )
}
