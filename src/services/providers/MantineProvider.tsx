import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { AppProviderInterface } from "@/interfaces";

const MantineProviders = ({ children }: AppProviderInterface) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default MantineProviders;
