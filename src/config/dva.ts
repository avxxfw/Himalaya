import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';

const app = create();

models.forEach(model => {
  app.model(model);
});

app.use(createLoading());
app.start();

const store = app._store;

export default store;
