import React from "react";
import {View, Text, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: '#212121', padding: 15}}>

                {/*User Row */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: '#cacaca', 
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10,
                        }}/>

                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Adrone M</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 *</Text>
                    </View>
                </View>
                {/*Message Row */}
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#919191',
                    borderTopWidth: 1,
                    borderTopColor: '#919191',
                    paddingVertical: 5,
                    marginVertical: 10,
                }}>
                <Pressable onPress={() => {console.warn('Message')}}>
                    <Text style={{color: 'white'}}>Message</Text>
                </Pressable>
                </View>
                {/*Do more */}
                <Pressable onPress={() => {console.warn('Do more with your account')}}>
                    <Text style={{color: '#dddddd', paddingVertical: 5,}}>Do more with your account</Text>
                </Pressable>
                {/*Make Money */}
                <Pressable onPress={() => {console.warn('Make Money Driving')}}>
                    <Text style={{color: 'white'}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;