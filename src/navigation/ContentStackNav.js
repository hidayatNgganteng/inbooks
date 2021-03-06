import { StackNavigator } from 'react-navigation';
import ContentScreen from '@screens/ContentScreen';
import ContentListScreen from '@screens/ContentListScreen';
import DiscussionScreen from '@screens/DiscussionScreen';
import { defaultNavOptions } from '@settings/nav';

const routes = {
  ContentScreen: { screen: ContentScreen },
  ContentListScreen: { screen: ContentListScreen },
  DiscussionScreen: { screen: DiscussionScreen }
};

const config = {
  initialRouteName: 'ContentScreen',
  navigationOptions: defaultNavOptions,
};

export default StackNavigator(routes, config);
