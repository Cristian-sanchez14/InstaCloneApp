/* eslint-disable react/react-in-jsx-scope */
// import {Image, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {userId} = route.params;
  // query the user with userID

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
