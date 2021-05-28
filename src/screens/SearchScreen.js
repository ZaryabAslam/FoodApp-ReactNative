import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import UseHook from '../hooks/UseHook'
import ShowList from '../components/showList'

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = UseHook()
  console.log(results)

  const filterResultsbyPrice = (price)=>{
    //price == '$'  || '$$'  || '$$$' --because in api these are prices by dollars
    return results.filter((result)=>{
      return result.price == price;
    })
  }
  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
      <ShowList navigation={navigation} results={filterResultsbyPrice('$')} title="Cost Effectve"/>
      <ShowList navigation={navigation} results={filterResultsbyPrice('$$')} title="Bit Pricier"/>
      <ShowList navigation={navigation} results={filterResultsbyPrice('$$$$')} title="Bit Spender"/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
