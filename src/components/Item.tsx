import React from "react";
import { createBox, createText, useTheme } from "@shopify/restyle";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeProps } from "../theme";

const Box = createBox();
const Text = createText();

export type ItemProps = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const Item: React.FC<ItemProps> = ({ icon, title }) => {
  const theme = useTheme<ThemeProps>();

  return (
    <Box flexDirection="row" alignItems="center" gap="s">
      <MaterialIcons name={icon} size={24} color={theme.colors.primary700} />

      <Text>{title}</Text>
    </Box>
  );
};

export default Item;
