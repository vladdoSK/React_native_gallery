import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector} from "react-redux/es/exports";
import { add_img } from "./redux/reducer";


export default Main_gallery = ({ navigation }) => {
    //----WITH REDUX------------
    /*const dispatch = useDispatch();
    const gallery_redux = useSelector(state => state.images);*/
    //--------------------------
    
    //------WITH REACT HOOKS--------------
    let data_gallery;
    const [gallery, setGallery] = useState([])
    let gallery_mas = [];
    //-------------------------------


    useEffect( () => {
        start_api();
    }, [])

    const start_api = async () => {
        data_gallery = await fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
            .then(response => response.json());

        for (let i = 0; i < data_gallery.length; i++) {
            gallery_mas.push(data_gallery[i].urls.regular + '*' + data_gallery[i].user.name);
        }
        await setGallery(gallery_mas);
        
        //------WITH REDUX-------
        //dispatch(add_img());

    }

    const load_img = (img_source) => {
        navigation.navigate('One_img', img_source);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text_content}>My React-native gallery</Text>

                {gallery.map((img_src, index) => {
                    let data_paint = img_src.split("*");
                    return (
                        <View style={styles.container} key={index}>
                            <TouchableOpacity onPress={() => load_img(data_paint[0])}>
                                <Image source={{ uri: data_paint[0] }} key={index} style={{ width: 200, height: 200, resizeMode: 'contain', backgroundColor: "#99CEFA", marginTop: 20 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>{data_paint[1]}</Text>
                        </View>)
                }
                )}
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text_content: {
        marginBottom: 20,
        marginTop: 40,
        fontSize: 25,

    }
});