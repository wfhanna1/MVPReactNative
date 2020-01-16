/**
 * @format
 */
import "intl";
import "intl/locale-data/jsonp/en";
import { AppRegistry, Text } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";


AppRegistry.registerComponent(appName, () => App);

Text.defaultProps = Text.defaultProps || {
};
Text.defaultProps.allowFontScaling = false;
