import { FontDisplay } from "expo-font"
import { Text, View, FlatList, TouchableOpacity } from "react-native"
import { SIZES } from "../../constants/theme"

import styles from "./factTabStyle"


const FactButton = ({ name, activeFact, onHandleSearchType }) => (
    <TouchableOpacity
        style={styles.btn(name, activeFact)}
        onPress={onHandleSearchType}
    >
        <Text style={styles.btnText(name, activeFact)}>{name}</Text>
    </TouchableOpacity>
)

const FactTab = ({ factOptions, activeFact, setActiveFact }) => {




    return (

        <View style={styles.container}>
            <FlatList
                data={factOptions}
                renderItem={({ item }) => (
                    <FactButton
                        name={item}
                        activeFact={activeFact}
                        onHandleSearchType={() => setActiveFact(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}

            />


        </View>

    )
}

export default FactTab;