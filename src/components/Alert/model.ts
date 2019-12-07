export enum ETypeAlert {
  WARNING,
  ERROR,
  SUCCESS,
}
export interface IProps {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  secondaryButton: IButtonAlert;
  defaultButton: IButtonAlert;
  alertType: ETypeAlert;
  title: string;
  body?: string;
}
export interface IButtonAlert {
  label: string;
  onPress?: () => void;
}
