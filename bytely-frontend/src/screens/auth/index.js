import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AuthMenu from '../../components/auth/menu';
import AuthDetails from '../../components/auth/details';

export default AuthScreen = () => {
  const [authPage, setAuthPage] = useState(true);
  const [detailsPage, setDetailsPage] = useState(false);

  return (
    <View style={styles.container}>
      {detailsPage ? (
        <AuthDetails
          authPage={authPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
};
