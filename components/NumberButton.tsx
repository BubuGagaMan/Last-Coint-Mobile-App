import { Pressable, StyleSheet, View, Text, Image } from "react-native";

import { Colors } from "@/stylesColors";



interface Props {
    onPress: (num: number) => void
    btnNumber: number
}

export default function PrimaryButton ({ onPress, btnNumber }: Props) {

    // external wrapper in case I want some default behaviour for later?
    const pressHandler = () => {
        onPress(btnNumber)
    }

    let coinsArr: any[] = []

    // useEffect(() => {
        for(let i = 0; i < btnNumber; i++){
            coinsArr.push(<Image key={i} style={styles.coinImage} resizeMode="contain" source={require('@/assets/images/goldCoin.png')}/>)
        }
    // }, [])
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={pressHandler} 
                android_ripple={styles.buttonRipple}
            >
                <View >
                    <Text style={styles.buttonText}>{ btnNumber }</Text>
                    <View style={styles.coinImagesContainer}>
                        {coinsArr}
                    </View>
                    {/* <Image  style={styles.coinImage} resizeMode="contain" source={require('@/assets/images/goldCoin.png')}/> */}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 10,
        overflow: 'hidden',
        flex: 1,
        borderWidth: 2,
        borderColor: Colors.burgundyMedium,
        width: 50,

    },
    buttonInnerContainer: {
        backgroundColor: Colors.black,
        paddingVertical: 8,
        paddingHorizontal: 5,
        elevation: 2,
    },
    buttonRipple: {
        color: 'red'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75,

    },
    coinImage: {
        width: 20,
        height: 20
    },
    coinImagesContainer: {
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center'
    }
})