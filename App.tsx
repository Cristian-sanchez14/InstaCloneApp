import Navigation from './src/navigation';
import {Amplify, Auth} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const App = () => {
  return <Navigation />;
};

export default App;
