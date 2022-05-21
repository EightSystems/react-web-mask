import * as React from "react";

export interface TextInputMaskProps {
  defaultValue?: string;
  kind?:
    | "base"
    | "credit-card"
    | "cpf"
    | "cnpj"
    | "zip-code"
    | "only-numbers"
    | "money"
    | "cel-phone"
    | "datetime"
    | "custom";

  options?: any;

  checkText?: (value, text) => boolean;
  onChangeText?: (newValue: string) => void;
}

declare class TextInputMask extends React.Component<
  TextInputMaskProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  any
> {
  render(): JSX.Element;
}
