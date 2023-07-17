import { Stack } from 'expo-router'
import { useCallback } from 'react';
import { useFonts } from 'expo-font'

const Layout = () => {

    const [fontsLoaded] = useFonts({
        Aovel: require('../assets/fonts/AovelSansRounded-rdDL.ttf'),
        thePoint: require('../assets/fonts/ToThePointRegular-n9y4.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded)
            await SplashScreen.hideAsync()
    }, [fontsLoaded])

    if (!fontsLoaded) return null


    return <Stack onLayout={onLayoutRootView} />
}

export default Layout