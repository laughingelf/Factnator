import { Text, View, FlatList, TouchableOpacity, Keyboard } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import axios from "axios"

const MathFact = () => {

    const [value, setValue] = useState(0)
    const [factReceived, setFactReceived] = useState(false)
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    const [gotErr, setGotErr] = useState(false)


    const handlePress = async () => {
        Keyboard.dismiss()
        let endpoint = `${value}/math`
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
            setData(response.data);
            setFactReceived(true)
            console.log(response.data)
        } catch (error) {
            setFactReceived(false)
            setGotErr(true)
            console.log(error)
        }

    }




    return (
        <View style={{ alignItems: "center", marginTop: 8 }}>
            <View style={{ height: 180, justifyContent: "center" }}>
                <TextInput
                    style={{ textAlign: "center", backgroundColor: '#e6e1d3', padding: 24, borderRadius: 32, fontSize: 24 }}
                    placeholder="Enter number.."
                    keyboardType="numeric"
                    onChangeText={text => setValue(text)}
                />
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
                            <Text style={{ textAlign: "center" }}>{data.number}</Text>
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

export default MathFact