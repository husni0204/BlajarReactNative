import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Api from '../../services/api';

import { BACKEND_API_URL } from '@env';

const PostsIndex = ({ navigation }) => {
    //init posts state
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    //fetch data
    const fetchDataPosts = async () => {
        //set Loading true
        setLoading(true);

        await Api.get('/api/posts').then((response) => {
            //assign data to state
            setPosts(response.data.data);

            //set Loading false
            setLoading(false);
        });
    };

    //hook useEffect
    useEffect(() => {
        fetchDataPosts();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tutorial Express + React Native</Text>
            <View style={styles.line} />
            {/* data posts */}
            {loading ? (
                <ActivityIndicator size={'large'} color={'#e91e63'} style={'marginTop: 20'} />
            ) : (
                posts.map((post, index) => (
                    <View key={index} style={styles.postContainer}>
                        <Image
                            source={{
                                uri: `${BACKEND_API_URL}/uploads/${post.image}`,
                            }}
                            style={styles.avatar}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>{post.title}</Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.push('PostEdit', { id: post.id })}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {}}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
};

export default PostsIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    line: {
        marginTop: 15,
        width: '100%',
        backgroundColor: '#ddd',
        height: 2,
    },
    postContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: '#e91e63',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
});
