import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const DayDropDown = ({ setSelectedDay }) => {

    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]


    return (

        <View style={{ marginBottom: 8 }}>


            <SelectDropdown
                data={days}
                defaultButtonText="Select Day..."
                onSelect={(selectedItem, index) => setSelectedDay(selectedItem)}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />



        </View>

    )
}

export default DayDropDown