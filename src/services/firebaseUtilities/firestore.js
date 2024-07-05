import firestore from '@react-native-firebase/firestore'
import { getFirestoreDate } from '../../helper/methods';



export const setDocument = async ({ collection, id, data }) => {
    let response = null
    const tempData = {
        ...data,
        created_at: getFirestoreDate()
    }
    await firestore()
        .collection(collection)
        .doc(id)
        .set(tempData)
        .then(() => {
            //console.log('Document set!');
            response = data
        });
    return response
}

export const getDocumentById = async ({ collection, id }) => {
    let response = null
    const docSnap = await firestore().collection(collection).doc(id).get()
    if (docSnap._exists) {
        // console.log("getDocumentById docSnap: ", docSnap);
        // console.log("getDocumentById docSnap data:", docSnap._data);
        response = docSnap._data
    } else {
        console.log('No Record found')
    }
    return response
}
export const getDocumentSnapshotById = async ({ collection, id, callback }) => {
    firestore()
        .collection(collection)
        .doc(id)
        .onSnapshot(documentSnapshot => {
            if (documentSnapshot.exists) {
                //console.log('getDocumentSnapshotById res: ', documentSnapshot.data());
                callback && callback(documentSnapshot.data())
            } else {
                console.log('No Record found')
            }

        });
}

export const getDocumentByUserId = async ({ collection, userId }) => {
    let response = null
    const docSnap = await firestore().collection(collection).where('user_id', '==', userId).get()
    if (docSnap._exists) {
        // console.log("docSnap: ", docSnap);
        // console.log("docSnap data:", docSnap._data);
        response = docSnap._data
    } else {
        console.log('No Record found')
    }
    return response
}


export const updateDocument = async ({ collection, id, data }) => {
    let response = null

    const tempData = {
        ...data,
        updated_at: getFirestoreDate()
    }

    await firestore()
        .collection(collection)
        .doc(id)
        .update(tempData)
        .then(() => {
            // console.log('Document updated');
            response = data
        }).catch(error => {
            console.log('updateDocument error: ', error)
        });
    return response
}

export const deleteDocument = async ({ collection, id }) => {
    let response = null

    await firestore()
        .collection(collection)
        .doc(id)
        .delete()
        .then(() => {
            const res = true
            console.log('deleteDocument response: ', res);
            response = res
        }).catch(error => {
            console.log('deleteDocument error: ', error)
        });
    return response
}

export const addDocument = async ({ collection, data }) => {
    let response = null
    const tempData = {
        ...data,
        created_at: getFirestoreDate()
        //created_at: new Date()
    }
    await firestore()
        .collection(collection)
        .add(tempData)
        .then(() => {
            // console.log('Document added');
            response = data
        });
    return response
}




export const getDocuments = async ({ collection }) => {
    let response = null
    await firestore()
        .collection(collection)
        // Filter results
        // .orderBy("createdAt", "desc")
        //limit results
        //   .limit(20)
        .get()
        .then(querySnapshot => {
            console.log('getDocuments querySnapshot:', querySnapshot)
            const tempData = [];
            querySnapshot.forEach((doc) => {
                const tempItem = { ...doc.data() }
                tempData.push(tempItem);
            });
            console.log('getDocuments tempData:', tempData)
            response = tempData
        });
    return response
}

export const getDocumentsSnapShot = ({ collection, callback }) => {
    firestore()
        .collection(collection)
        // Filter results
        // .orderBy("createdAt", "desc")
        //limit results
        //   .limit(20)
        //.get()
        .onSnapshot(querySnapshot => {
            const tempData = [];
            querySnapshot.forEach((doc) => {
                const tempItem = { ...doc.data() }
                tempData.push(tempItem);
            });
            //console.log('getProducts:', tempData)
            callback && callback(tempData)
        });
}