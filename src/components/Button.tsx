import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createText,
  createVariant,
  spacing,
} from "@shopify/restyle";
import { TouchableOpacity } from "react-native";

import { ThemeProps } from "../theme";

const Text = createText<ThemeProps>();

type IBoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, "buttonVariants">;

type IButtonProps = IBoxCustomProps & {
  title: string;
};

const Box = createRestyleComponent<IBoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: "buttonVariants" }),
]);

const Button: React.FC<IButtonProps> = ({ title, ...props }) => (
  <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
    <Box {...props}>
      <Text variant={props.variant==='primary'?'button_primary':'button_secondary'} fontSize={16}>
        {title}
      </Text>
    </Box>
  </TouchableOpacity>
);

export default Button;
