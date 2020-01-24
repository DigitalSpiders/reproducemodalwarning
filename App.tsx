import React, {useState} from 'react';
import {
  ApplicationProvider,
  Layout,
  Modal,
  Button,
  Text,
} from '@ui-kitten/components';
import {mapping, light as theme} from '@eva-design/eva';

const App = (): React.ReactFragment => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Modal
            visible={modalVisible}
            backdropStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            onBackdropPress={() => setModalVisible(false)}>
            <Layout style={{padding: 20, elevation: 8}}>
              <Text>Hello warning!</Text>
            </Layout>
          </Modal>
          <Button onPress={() => setModalVisible(true)}>Show modal</Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

export default App;
