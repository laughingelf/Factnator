import { Text, View, TouchableOpacity, Keyboard } from "react-native"
import MonthDropdown from "../dropdowns/MonthDropDown";
import { useState } from "react";
import DayDropDown from "../dropdowns/DayDropDown";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import { setStatusBarHidden } from "expo-status-bar";

const DateFact = () => {




    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [factReceived, setFactReceived] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState('')
    const [gotErr, setGotErr] = useState(false)



    const handlePress = async () => {
        Keyboard.dismiss()
        let endpoint = `${selectedMonth}/${selectedDay}/date`
        const options = {
            method: 'GET',
            url: `https://numbersapi.p.rapidapi.com/${endpoint}`,
            params: {
                fragment: 'true',
                json: 'true'
            },
            headers: {
                'X-RapidAPI-Key': '39af2f4383msha9a56f3ac4a9f8ep12c99ajsn19417c0ac7dd',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };


        try {
            const response = await axios.request(options);
            setIsLoading(true)
            setData(response.data);
            setFactReceived(true)
            setIsLoading(false)
            console.log(response.data)
        } catch (error) {
            setIsLoading(false)
            setFactReceived(false)
            setGotErr(true)
        }
    }







    return (
        <View style={{ marginTop: 8, alignItems: "center" }}>
            <View style={{ height: 180 }}>
                <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                <DayDropDown selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            </View>
            <View >
                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginTop: 16, backgroundColor: '#038251', width: 180, height: 80, borderRadius: 16, borderWidth: 2, borderColor: 'black' }}
                    onPress={handlePress}>
                    <Text style={{}}>Get Fact</Text>
                </TouchableOpacity>
            </View>
            <View>
                {factReceived ? (
                    <View style={{ marginTop: 64, backgroundColor: '#e6e1d3', width: 350, height: 300, borderRadius: 16, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ padding: 16 }}>
                            <Text style={{ textAlign: "center" }}>Year - {data.year}</Text>
                            <Text style={{ textAlign: "center" }}>{data.text}</Text>
                        </View>


                    </View>
                ) : gotErr ? (
                    <View style={{ marginTop: 64, backgroundColor: '#e6e1d3', width: 350, height: 300, borderRadius: 16, alignItems: "center", justifyContent: "center" }}>
                        <Text>Something went wrong, try again.</Text>
                    </View>
                ) : (
                    null
                )}

            </View>



        </View>

    )
}

export default DateFact;