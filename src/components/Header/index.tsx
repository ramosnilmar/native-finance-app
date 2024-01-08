import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MotiView, MotiText } from "moti";

import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ userName }: { userName: string }) {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          opacity: 0,
          translateY: -150,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}
      >
        <MotiText
          style={styles.userName}
          from={{
            opacity: 0,
            translateX: -300,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800,
          }}
        >
          {userName}
        </MotiText>

        <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
          <Feather name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonUser: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
