import {StyleSheet, View, Text, Image, Pressable, ScrollView} from 'react-native'
import { Rating } from '@kolking/react-native-rating';
import React, { useCallback, useState } from 'react';

const dish = () => {
    const [rating, setRating] = useState(0);

    const handleChange = useCallback(
      (value: number) => setRating(Math.round((rating + value) * 5) / 10),
      [rating],
    );

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
            <Text style={styles.title}>Mongolian beef</Text>
            <View style={styles.imageContainer}>
                <Image 
                source={require("../assets/dish.jpg")}
                style={styles.image}/>
            </View>
            <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackTitle}>Gizem's feedback</Text>
                <View style={styles.feedbackGrid}>
                    <Rating size={24} rating={rating} onChange={handleChange}/>
                </View>
            </View>
            <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackTitle}>Belmin's feedback</Text>
                <Text style={styles.feedbackTitle}>Gizem's feedback</Text>
            </View>
            <View style={styles.deleteContainer}>
                <Pressable>
                    <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default dish
const styles = StyleSheet.create({

   container: {
        flex: 1,
        backgroundColor: '#E5FFE9',
        paddingTop: 25,
        paddingHorizontal: 20,
   },

   title: {
        fontSize: 28,
        fontWeight: 700,
        color: '#1E1E1E',
        marginBottom: 25,
   },

   imageContainer: {
        width: '100%',
        aspectRatio: 1/1.1,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#B1CEB6',
        marginBottom: 25,
   },

   image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
   },

   feedbackContainer: {
        padding: 20,
        backgroundColor: '#DBF7E0',
        width: '100%',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#D5F0D9',
        rowGap: 20,
        marginBottom: 25,
   },

   feedbackTitle: {
        color: '#606060',
        fontWeight: 600,
        fontSize: 15,
   },

   deleteContainer: {
        paddingBottom: 25,
        marginBottom: 25,
   },

   deleteText: {
        color: '#99AA9B',
        fontWeight: 600,
        textAlign: 'center',
   },

   feedbackGrid: {
    backgroundColor: 'red',
   }

})