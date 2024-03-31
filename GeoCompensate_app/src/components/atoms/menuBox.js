import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Menu,
  Divider,
  Provider,
  Button,
  Avatar,
  PaperProvider,
} from 'react-native-paper';
import {Colors} from '../../assets/themes';

const MenuBox = () => {
  const [visible, setVisible] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState({x: 0, y: 0});
  const openMenu = event => {
    const {nativeEvent} = event;
    const anchor = {
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    };

    setMenuAnchor(anchor);
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };

  const items = [
    {
      key: 1,
      name: 'Delete',
    },
    {
      key: 2,
      name: 'Edit',
    },
  ];
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flex: 8}}>
            <Menu
              style={styles.menu}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu}>
                  <Avatar.Icon
                    style={styles.moreIcon}
                    size={30}
                    icon="dots-vertical"
                  />
                </Button>
              }>
              {/* <View style={{backgroundColor: Colors.danger, flex: 1}}> */}
              {items.map(item => (
                <Menu.Item
                  key={item.key}
                  style={styles.menuItem}
                  onPress={() => {}}
                  title={item.name}
                />
              ))}
              {/* </View> */}
            </Menu>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: 20,
    left: 20,
    // zIndex: 100,
  },
  menuItem: {
    color: Colors.black,
  },
  moreIcon: {
    color: Colors.black,
  },
});

export default MenuBox;
