import { createBox } from "@shopify/restyle";
import { Text } from "react-native";
import { ThemeProps } from "../theme";

const Box = createBox<ThemeProps>();

const Test = () => (
  <Box flex={1} bg="primary200" m="l" p="xl" alignItems="center" justifyContent="center">
    <Text>teste</Text>
  </Box>
);

export default Test;
