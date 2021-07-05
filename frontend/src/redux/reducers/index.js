import { combineReducers } from 'redux';
import apolloClient from '../../services/apolloClient';
import navigation from './navigation';

const reducers = combineReducers({
  navigation
});

export default reducers;