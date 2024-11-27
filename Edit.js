import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import {datasource} from "./Data";

const Edit = ({ navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View style={{padding: 10}}>
            <View style={{padding:10}}>
                <Text>Letter:</Text>
                <TextInput
                    maxLength={1} style={{borderWidth:1}} value={letter} onChangeText={(text) => setLetter(text)} placeholder="Enter a letter"/>
            </View>
            <View style={{flexDirection: 'row', padding:10 , justifyContent: 'space-between'}}>
                <View style={{margin:10, flex:1}}>
                    <Button title="SAVE" onPress={()=> {
                        let indexNum = 1
                        if (route.params.type == 'Vowels') {
                            indexNum = 0;
                        }
                        datasource[indexNum].data[route.params.index].key=letter;
                        navigation.navigate("Home")
                        }
                    }/>
                </View>
                <View style={{margin:10, flex:1}}>
                    <Button title="DELETE"
                            onPress={()=> {
                            let indexNum = 1
                            if (route.params.type == 'Vowels') {
                                indexNum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{text: 'Yes', onPress: () => {
                                        datasource[indexNum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home")
                                    }},
                                    {text: 'No'}])
                            }
                        }
                    />
                </View>
            </View>
        </View>
    );
};


export default Edit;
