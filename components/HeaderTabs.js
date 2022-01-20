import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const HeaderButton = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.buttonSelectorContainer,
          backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        }}
        onPress={() => props.setActiveTab(props.text)}>
        <Text
          style={{
            ...styles.buttonText,
            color: props.activeTab === props.text ? 'white' : 'black',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HeaderTabs() {
  const [active, setActive] = useState('Delivery');
  return (
    <View style={styles.buttonContainer}>
      <HeaderButton
        text="Delivery"
        btnColor="white"
        textColor="black"
        activeTab={active}
        setActiveTab={setActive}
      />
      <HeaderButton
        text="Pickup"
        btnColor="black"
        textColor="white"
        activeTab={active}
        setActiveTab={setActive}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonSelectorContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '800',
  },
});
