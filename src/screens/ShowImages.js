import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ShowImages = ({ navigation, route }) => {
    const [result, setResult] = useState([]);
    const { id } = route.params;


    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    console.log(result);


    return (
        <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
      height: 200,
      width: 300
    }
  });

export default ShowImages;