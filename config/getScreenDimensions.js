
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ResponsiveSize = (ratio) => width / ratio;

export default ResponsiveSize;
