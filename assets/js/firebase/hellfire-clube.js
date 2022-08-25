import {getFirestore, collection, addDoc} from './apps.js';


export async function subscribeToHellfireClub(subscription){
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-clube');
    const docRef = await addDoc(hellfireClubCollection, subscription);
    return docRef.id;
}