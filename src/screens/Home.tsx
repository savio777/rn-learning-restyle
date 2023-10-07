import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../theme";
import Item, { ItemProps } from "../components/Item";
import Button from "../components/Button";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const mockItens: ItemProps[] = [
  { icon: "timer", title: "Entrega em 72h" },
  { icon: "local-shipping", title: "Delivery grátis" },
  {
    icon: "credit-card",
    title: "R$ 99,99/mês",
  },
];

const Home = () => (
  <Box
    flex={1}
    alignItems="center"
    justifyContent="center"
    bg="primary800"
    p="m"
  >
    <Box width="100%" bg="white" p="m" borderRadius={5}>
      <Text color="black" textTransform="capitalize" variant="title">
        plano trimestral
      </Text>

      <Box gap="l" borderTopWidth={1} borderColor="gray" paddingTop="l">
        {mockItens.map((item) => (
          <Item key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Box>

      <Box flexDirection="row" mt="xl" gap="m">
        <Button variant="secondary" title="Simular" />

        <Button variant="primary" title="Contratar" />
      </Box>
    </Box>
  </Box>
);

export default Home;
