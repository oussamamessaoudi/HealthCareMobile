import {IEntry} from '../../../components/Carousel/Model';
import {faker, times} from '../faker';

export const fakerMarketing: () => IEntry[] = () =>
  times<IEntry>(3, () => ({
    title: faker.Lorem.sentence(),
    subtitle: faker.Lorem.paragraph(),
    illustration: faker.Image.imageUrl(),
  }));

export interface IMarketing {
  title: string;
  subtitle: string;
  illustration: string;
}
