import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ListDetails from './ListDetails'

const ShowList = ({ title, results, navigation }) => {
    if (!results.length){
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({item})=>{
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ShowImages', {id:item.id})}>
                    <ListDetails result={item}/>
                    </TouchableOpacity>
                    )
                }}
                keyExtractor={result => result.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ShowList;