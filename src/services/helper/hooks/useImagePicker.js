import { useState, useCallback } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { imagePickerOptions } from '../../constants';

const useImagePicker = () => {

    const options=imagePickerOptions
    const [image, setImage] = useState(null);

    // Function to open the image picker for the camera
    const openCamera = useCallback(() => {
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                // User cancelled image picker
            } else if (response.error) {
                // Error with image picker
            } else {
                // Image selected successfully
                console.log('ImagePicker.launchCamera response: ', response)
                const assetObj = response?.assets[0]
                let imageObj = {
                    uri: assetObj.uri,
                    type: assetObj.type,
                    name: assetObj.fileName
                }
                setImage(imageObj)
            }
        });
    }, []);

    // Function to open the image picker for the library
    const openLibrary = useCallback(() => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                // User cancelled image picker
            } else if (response.error) {
                // Error with image picker
            } else {
                // Image selected successfully
                console.log('ImagePicker.launchImageLibrary response: ', response)
                const assetObj = response?.assets[0]
                let imageObj = {
                    uri: assetObj.uri,
                    type: assetObj.type,
                    name: assetObj.fileName
                }
                setImage(imageObj)
            }
        });
    }, []);

    return {
        image,
        openCamera,
        openLibrary,
    };
};

export default useImagePicker;
