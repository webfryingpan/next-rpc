interface ActivityTypes {
  [key: number]: string;
}

export interface IFormData {
  appId: string;
  state: string;
  details: string;
  lgImgKey: string;
  lgImgText: string;
  smImgKey: string;
  smImgText: string;
  btn1Name: string;
  btn1Url: string;
  btn2Name: string;
  btn2Url: string;
  activityType: ActivityTypes;
}

export type TChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type TSubmitEvent = React.FormEvent<HTMLFormElement>;
