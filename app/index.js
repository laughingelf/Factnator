import { Stack } from "expo-router";
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import Main from "../components/main/Main";
import menu from "../assets/icons/menu.png"
import defProfile from "../assets/icons/defProfile.jpg"
import { SIZES } from "../constants/theme";
import * as Font from 'expo-font'




const Home = () => {


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#e6e1d3" }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#038251' },
                    headerShadowVisible: false,
                    headerTitle: "FactNator",
                    headerTitleAlign: "center",

                }} />

            <View
                style={{
                    flex: 1,
                    // padding: SIZES.xSmall,
                    // backgroundColor: 'red'
                }}>
                <Main />


            </View>





        </SafeAreaView>
    )
}

export default Home