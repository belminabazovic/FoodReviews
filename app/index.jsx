import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, FlatList, ScrollView } from "react-native";
import {Link} from 'expo-router';
import { Client } from "appwrite";
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch dishes from Firebase
    useEffect(() => {
        const fetchDishes = async () => {
            try {
                setLoading(true);
                const dishesCollection = collection(db, 'dishes');
                const dishesSnapshot = await getDocs(dishesCollection);
                const dishesList = dishesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                if (dishesList.length > 0) {
                    setDishes(dishesList);
                } else {
                    // Fallback to placeholder data if no dishes in Firebase
                    setDishes(Array.from({ length: 16 }, (_, i) => ({
                        id: i.toString(),
                        title: `Placeholder ${i + 1}`,
                    })));
                }
            } catch (error) {
                console.error('Error fetching dishes from Firebase:', error);
                // Fallback to placeholder data on error
                setDishes(Array.from({ length: 16 }, (_, i) => ({
                    id: i.toString(),
                    title: `Placeholder ${i + 1}`,
                })));
            } finally {
                setLoading(false);
            }
        };

        fetchDishes();
    }, []);

    const DATA = dishes;

    const renderItem = ({ item }) => (
        <Pressable
        onPress={() => navigation.navigate('dish')}
        style={styles.item}>
            <View style={styles.itemImageContainer}>
                <Image
                    source={require("../assets/dish.jpg")}
                    style={styles.image}
                />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <Text style={styles.pageTitle}>Dishes</Text> 
                }
            />

            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => navigation.navigate('new')}
                    style={({pressed}) => [styles.newDish, pressed && styles.newDishPressed]}
                >
                    <Text style={styles.newDishText}>Add new dish</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Welcome

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E5FFE9',
        paddingTop: 60,
    },

    pageTitle: {
        paddingLeft: 20,
        paddingBottom: 25,
        fontSize: 28,
        paddingTop: 25,
        fontWeight: 700,
        color: '#1E1E1E',
    },

    buttonContainer: {
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

    row: {
        justifyContent: "space-between",
        marginBottom: 20,
        paddingHorizontal: 20,
        columnGap: 15,
    },

    item: {
        flex: 1,
        margin: 0,
        rowGap: 6,
    },

    itemImageContainer: {
        flex: 1,
        aspectRatio: 1/1.2,
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#B1CEB6',
        borderWidth: 3,
    },

    itemTitle: {
        fontSize: 15,
        fontWeight: 600,
        color: '#1E1E1E',
    },

    image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    }



})