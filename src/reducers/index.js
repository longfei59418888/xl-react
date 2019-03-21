import { combineReducers } from 'redux';

const reducers = {};
const reducerFiles = require.context('./', false, /\w+\.r\.js/);
reducerFiles.keys().forEach((fileName) => {
    // 获取组件配置
    const fileModule = reducerFiles(fileName);
    fileName = fileName.replace(/(\.\/)(\w+)\.r\.js/, '$2');
    reducers[fileName] = fileModule.default;
});

export default combineReducers(reducers);
