import { StyleSheet } from "react-native";

import { COLORS, SIZES } from '../../constants/theme'


const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small / 2,
        marginBottom: SIZES.small / 2,

    },
    btn: (name, activeFact) => ({
        paddingVertical: SIZES.xLarge,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeFact ? '#038251' : "#f2e6c4",
        // backgroundColor: "#F3F4F8",
        borderRadius: SIZES.medium,
        marginLeft: 2,
        // ...SHADOWS.medium,
        shadowColor: COLORS.white,
        borderColor: 'black',
        borderWidth: 2

    }),
    btnText: (name, activeFact) => ({
        // fontFamily: "DMMedium",
        fontSize: SIZES.small,
        color: name === activeFact ? "#212120" : "#038251",
        // color: 'blue'
    }),
});

export default styles;