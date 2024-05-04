import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";
import { fetchAssets } from "scripts/main";
import type { IFormData, TChangeEvent, TSubmitEvent } from "types/form";
import type { IFormContext, TFromStateReducer } from "types/formContext";
import type { option } from "types/inputs";

export const FormContext = createContext<IFormContext>({} as IFormContext);

const initialState: IFormData = {
  appId: "",
  state: "",
  details: "",
  lgImgKey: "",
  lgImgText: "",
  smImgKey: "",
  smImgText: "",
  btn1Name: "",
  btn1Url: "",
  btn2Name: "",
  btn2Url: "",
  activityType: 0,
};

const formReducer: TFromStateReducer = (state, action) => ({ ...state, [action.field]: action.value });

const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [options, setOptions] = useState<option[]>([]);

  useEffect(() => {
    if (!formData.appId) return;

    fetchAssets(formData.appId).then(data => {
      setOptions(data);
    });
  }, [formData]);

  const handleChange = (e: TChangeEvent) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e: TSubmitEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return <FormContext.Provider value={{ formData, setFormData: dispatch, handleChange, handleSubmit, options }}>{children}</FormContext.Provider>;
};

export default FormProvider;
