import { ActivityTypes } from "./form";

export type TInputField = React.ChangeEvent<HTMLInputElement>;
export type TSelectField = React.ChangeEvent<HTMLSelectElement>;

export interface InputFieldProps {
  name: string;
  type: string;
  value: string;
  onChange: (e: TInputField) => void;
}

interface Option {
  id: string;
  type: number;
  name: string;
}

export interface SelectFieldProps {
  name: string;
  options: Option[];
  onChange: (e: TSelectField) => void;
}

export interface ActivitySelectFieldsProps {
  options: ActivityTypes;
  onChange: (e: TSelectField) => void;
}
