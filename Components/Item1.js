import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import diot from '../assets/diot.jpg';
import diot2 from '../assets/diot2.jpg';
import cart from '../assets/shopping-cart.png'

export default function CategoryListItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image style={styles.diotImage} source={diot} />
                    <Text>Diot</Text>
                    <Text>5000</Text>
                    <TouchableOpacity>
                        <Image style={styles.cartImage} source={cart} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image style={styles.diotImage} source={diot2} />
                    <Text>Diot</Text>
                    <TouchableOpacity>
                        <Image style={styles.cartImage} source={cart} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Item3</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: '50%',
        height: '52%',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    inner: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    diotImage: {
        marginTop: 10,
        width: 160,
        height: 180,
        shadowRadius: 10
    },
    cartImage: {
        marginTop: 10,
        width: 25,
        height: 25,
        shadowRadius: 10
    }
});