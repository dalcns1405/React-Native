import { View, Text, Button, Pressable, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios, { Axios, AxiosHeaders } from 'axios'
import LinearGradient from 'react-native-linear-gradient'
//ürün ekleme ne içinde olur?<TextInput ..
//null mu yapmalıyız int eklencek useState değerleri?
// <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} colors={['#D300B5', '#FF5400']} />

const AddProduct = () => {
    const [name, setName] = useState("")
    const [unitPrice, setUnitPrice] = useState(null)
    const [unitsInStock, setUnitInStock] = useState(null)

    const Add =()=>{

        var newProduct={
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,

        }
        axios.post("https://northwind.vercel.app/api/products",newProduct)
        .then(Response =>{
            Alert.alert("Yeni ürün eklendi")
        })
        

        
    }
    
    

    return (
        <View style={[{ marginBottom: 20 }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} colors={['#D300B5', '#FF5400']} />

         
            <View >
                <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName}></TextInput>
            </View>
            <View >
                <TextInput placeholder="UnitPrice" style={styles.input} value={unitPrice} onChangeText={setUnitPrice}></TextInput>
            </View>
            <View>
                <TextInput placeholder="UnitInStock" style={styles.input} value={unitsInStock} onChangeText={setUnitInStock}></TextInput>
            </View>
            <View style={[{ marginHorizontal: 90 }]}>
                <Button title="Add" onPress={Add}></Button>
            </View>


        </View>
        

        
    )
}

const styles=StyleSheet.create({
    input:{
        height:40,
        margin:12,
        borderWidth:1
      

    }
    
    
})



export default AddProduct