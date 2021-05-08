import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';


export default class Home extends React.Component{

  state={
    todaySelected:true
  }
  onTabPressed=()=>{
    this.setState({todaySelected:!this.state.todaySelected})
  }
  static navigationOptions = {
    title: 'Home',

  };

render(){
  const {navigate} = this.props.navigation;
  return(
    <View style={styles.container}>
    <View style={{paddingTop:50}}>
      <View style={{flexDirection:'row', marginHorizontal:30, justifyContent:'space-between'}}>
        <Image 
        resizeMode='contain'
        style={{height:30, width:30}}
        source={require('../assets/images/menu.png')}
        />
      <Image 
        style={{
          height:40, 
          width:40, 
          borderRadius:100,
          borderWidth:5,
          borderColor:'#00192D'
        }}
        source={require('../assets/images/profile.jpg')}
        />
      </View>
    </View>

    <View style={{padding:30}}>
      <Text style={{
        color:'#fff',
        fontSize:20,
        fontWeight:'700',
      }}>My Budget</Text>
      <Text style={{
        color:'#fff',
        fontWeight:'700',
        fontSize:30
      }}>$ 521,436</Text>
    </View>

    <View style={{
      height:1000,
      width:'100%',
      backgroundColor:'#fff',
      marginTop:50,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    }}>
      <View style={{flexDirection:'row', paddingTop:20, padding:50}}>
        <TouchableOpacity
        onPress={this.onTabPressed}
        style={{
          paddingVertical:6,
          borderBottomWidth:4,
          borderBottomColor:this.state.todaySelected ? '#00192d':'#fff',
        }}
        >
          <Text style={{
            fontWeight:'bold',
            fontSize:15,
            color:this.state.todaySelected ? '#00192D' : '#8e9aaf',

          }}>TODAY</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={this.onTabPressed}
        style={{
          marginLeft:30,
          borderBottomWidth:4,
          paddingVertical:6,
          borderBottomColor:this.state.todaySelected ? '#fff':'#00192d',
          color:this.state.todaySelected ? '#8e9aaf':'#00192d',
        }}
        >
          <Text style={{
            fontWeight:'bold',
            fontSize:15,
            opacity:0.5
          }}>MONTH</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>14th April 2020</Text>
        <Text style={{fontSize:15, fontWeight:'bold', color:'#e76f51'}}>270</Text>
      </View>
      <View style={{borderBottomWidth:2, width:'85%', marginLeft:30, marginTop:20, opacity:0.3}}></View>

      <View style={{width:'100%', height:'30%'}}>
        <ScrollView>
{/* first Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:45,
              width:45,
              borderRadius:100,
              backgroundColor:'#00192d',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
              resizeMode='contain'
              style={{height:25, width:25}}
              source={require('../assets/images/electricity.png')} />
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              marginLeft:10,
            }}>Electricity</Text>
            </View>
            <Text style={{
              fontSize:15,
              fontWeight:'bold',
              color:'#e76f51',
            }}>40,00</Text>
          </View>

{/* second Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:45,
              width:45,
              borderRadius:100,
              backgroundColor:'#00192d',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
              resizeMode='contain'
              style={{height:25, width:25}}
              source={require('../assets/images/taxi.png')} />
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              marginLeft:10,
            }}>Taxi</Text>
            </View>
            <Text style={{
              fontSize:15,
              fontWeight:'bold',
              color:'#e76f51',
            }}>23,50</Text>
          </View>

{/* third Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:45,
              width:45,
              borderRadius:100,
              backgroundColor:'#00192d',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
              resizeMode='contain'
              style={{height:25, width:25}}
              source={require('../assets/images/food.png')} />
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              marginLeft:10,
            }}>Food & Drinks</Text>
            </View>
            <Text style={{
              fontSize:15,
              fontWeight:'bold',
              color:'#e76f51',
            }}>36,50</Text>
          </View>

{/* Fourth Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:50,
              width:50,
              borderRadius:100,
              backgroundColor:'#00192d',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
              resizeMode='contain'
              style={{height:30, width:30}}
              source={require('../assets/images/train.png')} />
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              marginLeft:10,
            }}>Train</Text>
            </View>
            <Text style={{
              fontSize:15,
              fontWeight:'bold',
              color:'#e76f51',
            }}>40,00</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  </View>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   flex: 1,
   backgroundColor:'#22ce99'
 }
})