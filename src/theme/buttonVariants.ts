import { IVariantViewStyle } from "./types";

export const buttonVariants: IVariantViewStyle = {
  defaults: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  primary: {
    backgroundColor: "primary700",
  },
  secondary: {
    backgroundColor: "primary200",
  },
};
