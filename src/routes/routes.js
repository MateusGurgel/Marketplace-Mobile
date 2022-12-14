import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ProductScreen } from "../screens/Products/ProductScreen/ProductScreen";
import { CategoryScreen } from "../screens/Products/Category/CategoryScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Product" component={ProductScreen} />
      <Screen name="Category" component={CategoryScreen} />
    </Navigator>
  );
}
