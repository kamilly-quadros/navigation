import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackoutesList = {
    home: undefined
    product: undefined | { id: string }
}
export type StackRoutesProps<T extends keyof StackoutesList> = NativeStackScreenProps<StackoutesList, T>
const Stack = createNativeStackNavigator<StackoutesList>()
export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}