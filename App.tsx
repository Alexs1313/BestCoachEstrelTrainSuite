import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useEffect, useState } from 'react';
import { ContextProvider } from './bestcoachtrainsrc/bestcoachtrainst/bestCoachTrainContext';
import Bestcoachtrainstack from './bestcoachtrainsrc/bestcoachtrainnv/Bestcoachtrainstack';
import Bestcoachtrainldr from './bestcoachtrainsrc/bestcoachtraincmp/Bestcoachtrainldr';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isLoading ? <Bestcoachtrainldr /> : <Bestcoachtrainstack />}
        <Toast position="top" topOffset={55} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
