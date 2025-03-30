import { Pressable, StyleSheet, View, Text } from "react-native";
import { PropsWithChildren } from "react";

import { Colors } from "@/stylesColors";

interface Props {
    onPress: () => void
}

export default function PrimaryButton ({ children, onPress }: PropsWithChildren<Props>) {

    // external wrapper in case I want some default behaviour for later?
    const pressHandler = () => {
        onPress()
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={pressHandler} 
                android_ripple={styles.buttonRipple}
            >
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 10,
        overflow: 'hidden',
        //flex: 1
    },
    buttonInnerContainer: {
        backgroundColor: Colors.purpleHighSat,
        paddingVertical: 8,
        paddingHorizontal: 16,
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
})