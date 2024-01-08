import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";

interface MovementsProps {
  data: {
    id: number;
    label: string;
    value: string;
    date: string;
    type: number;
  };
}

export default function Movements({ data }: MovementsProps) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={data.type === 0 ? styles.expences : styles.value}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "spring",
                duration: 2000,
              }}
            >
              {data.type === 0 ? `R$: -${data.value}` : `R$: ${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "timing",
              }}
            />
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#DADADA",
    borderBottomWidth: 0.5,
    marginBottom: 24,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  expences: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});
