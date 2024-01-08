import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Mercado",
    value: "250,00",
    date: "10/10/2020",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Cliente x",
    value: "2.250,00",
    date: "17/10/2020",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "11.250,00",
    date: "24/10/2020",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header userName="Nilmar Ramos" />
      <Balance balance="11.420,00" expenses="-849,00" />

      <Actions />

      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginTop: 4,
    marginLeft: 14,
    marginRight: 14,
  },
});
