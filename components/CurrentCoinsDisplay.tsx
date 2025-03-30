import { View, Text, StyleSheet, Image } from "react-native"
import { Colors } from "@/stylesColors"

interface Props {
    currentCoins: number

}
export default function CurrentCoinsDisplay ({ currentCoins }: Props) {

    // const coinsImagesView = () => {
    //     for(let i = 0; i < currentCoins; i++) {

    //     }
        
    //     return (
    //         <View style={styles.coinsImagesContainer}>
                
    //         </View>
    //     )
    // }

    let coinImageArr = []

    // useEffect(() => {

        for(let i = 0; i < currentCoins; i++) {
           coinImageArr.push(<Image key={i} style={styles.coinImage} resizeMode="contain" source={require('@/assets/images/goldCoin.png')}/>)
        }

    // }, [currentCoins])

    return (
        <View style={styles.currentCoins}>
            <Text style={[styles.currentCoinsText, styles.currentCoinsTextUpper]}>Current coins</Text>
            <Text style={styles.currentCoinsText}>{currentCoins}</Text>
            <View style={styles.coinImagesContainer}>
                {coinImageArr}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    currentCoins: {
        alignItems: 'center',
        borderRadius: 10,
        margin: 35,
        padding: 20,
        backgroundColor: Colors.burgundyDeep,
    },
    currentCoinsText: {
        color: 'white',
        fontSize: 24
    },
    currentCoinsTextUpper: {
        textDecorationLine: 'underline'
    },

    coinImage: {
        width: 10,
        height: 10
    },
    coinImagesContainer: {
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
})