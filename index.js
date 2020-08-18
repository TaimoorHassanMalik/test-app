import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { YellowBox,LogBox } from "react-native";
// YellowBox.ignoreWarnings([""]);
LogBox.ignoreAllLogs()
// console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
