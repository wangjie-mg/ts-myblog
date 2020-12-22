import {Model} from'react-model';
import login from './login';
import main from './main';

const models={login,main};
export const {getInitialState,useStore,getState,actions,subscribe,unsubscribe} =Model(models);
