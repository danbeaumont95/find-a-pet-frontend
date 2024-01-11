export interface FormInputInterFace {
  name: string;
  id: string;
  isRequired: boolean;
  isInvalid: boolean;
  errors: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
