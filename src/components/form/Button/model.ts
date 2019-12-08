export interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: ETypeButton;
}
export enum ETypeButton {
  PRIMARY,
  SECONDARY,
}
