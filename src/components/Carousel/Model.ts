export interface ISlideEntry {
  data: IEntry;
  even: boolean;
  parallaxProps: any;
}
export interface IEntry {
  title: string;
  subtitle: string;
  illustration: string;
}
export interface ICarouselProps {
  entries: IEntry[];
  containerStyle?: object;
}
