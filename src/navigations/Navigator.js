import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Cources from "../screens/Cources";
import CoursePage from "../screens/CoursePage";
import VideoPage from "../screens/VideoPage";
import MotivationView from "../screens/MotivationView";
import Game from "../screens/Game";
import Login from "../screens/Login";
import Register from "../screens/Register";

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Cources: { screen: Cources },
    CoursePage: { screen: CoursePage },
    VideoPage: { screen: VideoPage },
    MotivationView: { screen: MotivationView },
    Game: { screen: Game },
    Register: { screen: Register },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);
