import { useState } from 'react'
import { Stack } from "expo-router";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import FactTab from '../factTab/FactTab';
import { COLORS, SIZES } from '../../constants/theme'
import DateFact from '../dateFact/DateFact'
import MathFact from '../mathFact/MathFact';
import TriviaFact from '../triviaFact/TriviaFact';
import YearFact from '../yearFact/YearFact';
import RandomFact from '../randomFact/RandomFact';

const factOptions = ['Date-Fact', 'Math-Fact', 'Trivia-Fact', 'Year-Fact', 'Random-Fact']


const Main = () => {

    const [activeFact, setActiveFact] = useState(factOptions[0])

    const displayContent = () => {
        switch (activeFact) {
            case 'Date-Fact':
                return <DateFact factOption={activeFact} />
                break
            case 'Math-Fact':
                return <MathFact factOption={activeFact} />
                break
            case 'Trivia-Fact':
                return <TriviaFact factOption={activeFact} />
                break
            case 'Year-Fact':
                return <YearFact factOption={activeFact} />
                break
            case 'Random-Fact':
                return <RandomFact factOption={activeFact} />
                break
            default:
                break
        }
    }



    return (


        <SafeAreaView style={{ flex: 1, padding: 8 }}>
            <View>
                <FactTab
                    factOptions={factOptions}
                    activeFact={activeFact}
                    setActiveFact={setActiveFact}
                />

                {displayContent()}



            </View>

        </SafeAreaView>


    )
}

export default Main;