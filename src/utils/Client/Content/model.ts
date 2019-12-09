import {IEntry} from '../../../components/Carousel/Model';
import {faker, times} from '../faker';

export const fakerMarketing: () => IEntry[] = () =>
  times<IEntry>(3, () => ({
    title: faker.Lorem.sentence(),
    subtitle: faker.Lorem.paragraph(),
    illustration:
      'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }));

export interface IMarketing {
  title: string;
  subtitle: string;
  illustration: string;
}
