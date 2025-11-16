import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import {Link} from 'expo-router';

const addDish = () => {
    return (
        <View style={styles.container}>
                <View style={styles.newDishContainer}>
                    <Pressable
                        style={({pressed}) => [styles.newDish, pressed && styles.newDishPressed]}
                    >
                        <Text style={styles.newDishText}>Save dish</Text>
                    </Pressable>
                </View>
        </View>
    )
}

export default addDish
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E5FFE9',
    },

    link: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#f961aa',
        paddingHorizontal: 40,
        paddingVertical: 20,
        fontSize: 15,
        borderRadius: 50,
        width: '90%',
    },

    newDishContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 20,
    },

    newDish: {
        borderRadius: 50,
        paddingVertical: 18,
        paddingHorizontal: 36,
        backgroundColor: '#565D46',
    },

    newDishText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 600,
        color: '#A7FFB4',
    },

    newDishPressed: {
        backgroundColor: '#636A53',
    },

})