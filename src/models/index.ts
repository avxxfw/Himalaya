import {DvaLoadingState} from 'dva-loading-ts';
import home from './home';

const model = [home];

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState;
};

export default model;
