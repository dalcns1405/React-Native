import { View, Text, FlatList, Alert,ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import { endEvent } from 'react-native/Libraries/Performance/Systrace'


//productlist :ürünleri listele demek.<Flatlist></Flatlist>
//ürün ve error state im var ..
//ürün listemi bir kere görüntülemek istiyorum.useEffect



const ProductList = () => {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        Alert.alert("İşlem sırasında hata meydana geldi")
        setError(err);
      });
    
  }, [])

 

  const renderItem = ({ item }) => {
   
    if (item.unitPrice <50) {
      return <View style={[{flexDirection:"row"},{marginBottom:15},{borderBottomWidth:5},{borderBlockColor:"gray"},{justifyContent:"space-between"},{flex:1},{width:endEvent,height:70}]}>
        
        <Text style={[{fontSize:25},{flex:2}]}>{item.name}</Text>
        <Text style={[{fontSize:20},{backgroundColor:"#c2ee9d"},{flex:1}]}>{item.unitPrice}</Text>
      </View>
      
    } else if (item.unitPrice >50) {
      return <View style={[{flexDirection:"row"},{marginBottom:15},{borderBottomWidth:5},{borderBlockColor:"gray"},{justifyContent:"space-between"},{width:endEvent,height:70}]}>
      <Text style={[{fontSize:25},{flex:2}]} >{item.name}</Text>
      <Text style={[{backgroundColor:"#ff623b"},{fontSize:20},{flex:1}]}>{item.unitPrice}</Text>
     
    </View>
    }
  }

 
  return (
   
    <View style={{backgroundColor: "#fdfdc4"}}>
      {
        loading == true ?  <ActivityIndicator /> :
        <FlatList
            data={products}
            renderItem={renderItem} />
      }  
          
    </View> 
 
  )
}




export default ProductList