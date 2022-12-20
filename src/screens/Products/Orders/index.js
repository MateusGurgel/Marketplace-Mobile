import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderCard } from "../../../components/OrderCard";

import theme from "../../../global/style/theme";

const orders = [
  {
    productId: "#12345",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#123456",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#123123457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#12335457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#12312457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#12342457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#1234457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#1234572",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#123321457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
  {
    productId: "#312123457",
    sellDate: "12/12/09",
    sellerName: "Vendedor Top",
    productValue: "90",
  },
];

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <OrderCard
            productId={item.productId}
            sellDate={item.sellDate}
            sellerName={item.sellerName}
            productValue={item.productValue}
          />
        )}
        contentContainerStyle={
          orders.length > 0 ? styles.contentList : styles.emptyListContent
        }
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.emptyListText}>
              Não há pedidos listados no momento
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentList: {},
  emptyListContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentList: {},
  emptyListText: {
    color: theme.colors.title,
    fontSize: Responsive.font(14),
    fontWeight: "300",
  },
});

export { Orders };
