import React from 'react';

import { SignInStack, SignOutStack } from './navigationStack';
import { getAuth } from 'firebase/auth';

const navigation = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const auth = getAuth();
  React.useEffect(() => auth.onAuthStateChanged((user) => (user ? setCurrentUser(user) : setCurrentUser(null))), []);

  return <>{currentUser ? <SignInStack /> : <SignOutStack />}</>;
};

export default navigation;
