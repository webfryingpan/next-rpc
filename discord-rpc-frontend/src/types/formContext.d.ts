type setFormData = React.Dispatch<React.SetStateAction<IFormData>>; // Use state "setter"

export interface IFormContext {
  formData: IFormData;
  setFormData: setFormData;
  handleChange: (e: TChangeEvent) => void;
  handleSubmit: (e: TSubmitEvent) => void;
  options: option[];
}

export type TFromStateReducer = (state: IFormData, action: { field: string; value: string }) => IFormData;
