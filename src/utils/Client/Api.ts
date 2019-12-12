export enum StateApi {
  INITIALIZE,
  LOADING,
  SUCCESS,
  ERROR,
}
export interface IResponse<T> {
  state: StateApi;
  data?: T;
}
