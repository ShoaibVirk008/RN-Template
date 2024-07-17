import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';

export const uploadFile = async ({ file, directory, onProgress }) => {
    const { uri, name, type } = file;

    // Create a storage directory path
    const _directory = directory || 'videos';  // Replace with your desired path
    const storage_directory = `${_directory}/${name}`;

    // Handle platform-specific URI modifications
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    try {
        const fetchedVideo = await fetch(uploadUri);
        const videoBlob = await fetchedVideo.blob();
        const reference = storage().ref(storage_directory);

        // Use Firebase Storage's putFile method to upload the video directly
        const task = reference.put(videoBlob);

        // Monitor the upload progress and handle errors
        task.on('state_changed', (snapshot) => {
            const _progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // console.log('Progress:', _progress);
            onProgress && onProgress(_progress)
        });

        await task;

        const downloadURL = await reference.getDownloadURL();
        console.log('Video uploaded successfully! Download URL:', downloadURL);
        return downloadURL;  // Return the download URL

    } catch (error) {
        console.error('Error uploading video:', error);
        // Handle errors appropriately (e.g., show error message to user)
        throw error;  // Re-throw the error for further handling if needed
    }
};

// export const uploadImage = async ({ image }) => {

//     let response = null
//     const { uri, name, type } = image;
//     const directory = '/images/users'
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const storage_directory = directory + '/' + filename
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

//     console.log('storage_directory: ', storage_directory)
//     console.log('uploadUri: ', uploadUri)
//     //setUploading(true);
//     //setTransferred(0);

//     const reference = storage().ref(storage_directory)
//     await reference
//         .putFile(uploadUri)
//         .then(async res => {
//             if (res) {
//                 await reference.getDownloadURL()
//                     .then(res => {
//                         if (res) {
//                             response = res
//                         }
//                     })
//             }
//         })


//     // set progress state
//     // task.on('state_changed', snapshot => {
//     //       setTransferred(
//     //         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
//     //       );
//     // });

//     // task.then(() => {
//     //     console.log('Image uploaded to the bucket!');
//     // });

//     // try {
//     //     await task;
//     // } catch (e) {
//     //     console.error(e);
//     // }

//     // setUploading(false);

//     // setImage(null);
//     return response
// };