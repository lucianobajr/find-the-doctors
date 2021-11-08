import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Clica aqui!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
