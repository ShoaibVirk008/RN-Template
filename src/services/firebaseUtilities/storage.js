import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';

export const uploadImage = async ({ image }) => {

    let response = null
    const { uri, name, type } = image;
    const directory = '/images/users'
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const storage_directory = directory + '/' + filename
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    console.log('storage_directory: ', storage_directory)
    console.log('uploadUri: ', uploadUri)
    //setUploading(true);
    //setTransferred(0);

    const reference = storage().ref(storage_directory)
    await reference
        .putFile(uploadUri)
        .then(async res => {
            if (res) {
                await reference.getDownloadURL()
                    .then(res => {
                        if (res) {
                            response = res
                        }
                    })
            }
        })


    // set progress state
    // task.on('state_changed', snapshot => {
    //       setTransferred(
    //         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    //       );
    // });

    // task.then(() => {
    //     console.log('Image uploaded to the bucket!');
    // });

    // try {
    //     await task;
    // } catch (e) {
    //     console.error(e);
    // }

    // setUploading(false);

    // setImage(null);
    return response
};