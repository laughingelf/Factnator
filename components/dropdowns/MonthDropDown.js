import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import styles from './DropDownStyle'

const MonthDropdown = ({ setSelectedMonth }) => {


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];



    return (
        <View style={{ marginBottom: 8 }}>


            <SelectDropdown
                data={months}
                defaultButtonText="Select Month..."
                onSelect={(selectedItem, index) => setSelectedMonth(index + 1)}
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
    );
};

export default MonthDropdown;
