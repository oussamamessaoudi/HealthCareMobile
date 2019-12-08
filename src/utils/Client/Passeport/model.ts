export interface IUser {
  username: string;
  role: string;
}

export const fakerUser = (username: string) => ({
  username,
  role: 'user',
});
