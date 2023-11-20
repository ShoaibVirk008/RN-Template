//import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    //blacklist: ['nowPlaying']
}

export default combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    //app: appReducer,
});


