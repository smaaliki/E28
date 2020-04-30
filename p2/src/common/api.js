import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class Api {

    /**
     * 
     */
    constructor(options) {
        firebase.initializeApp({
            apiKey: options.apiKey,
            authDomain: options.projectId + '.firebaseapp.com',
            databaseURL: 'https://' + options.projectId + '.firebaseio.com',
            projectId: options.projectId
        });

        this.api = firebase.firestore();
    }

    /**
     * Get a document from a `collection` where `field` == `value`
     * ex: get('products', 'slug', 'bare-coconut-chips')
     */
    async find(collection, field, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, "==", value)
                .get();
            
                return querySnapshot.docs.shift().data();
        }
        catch (error) {
            return 'Error getting documents: ' + error;
        }
    }

    async count(collection, field, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, "==", value)
                .get();
                
            return querySnapshot.size;
        }
        catch (error) {
            return 'Error getting documents: ' + error;
        }
    }

    /**
     * Get a document from a collection by its slug
     */
    get(collection, id) {
        return this.find(collection, 'id', id);
    }

    /**
     * Get all the documents from a collection
     */
    async all(collection) {
        let results = [];
        const querySnapshot = await this.api
            .collection(collection)
            .get();
        querySnapshot.forEach(doc => {
            const myDoc = doc.data()
                    myDoc.id = doc.id
                    results.push(myDoc)
        });
        return results;
    }

    /**
     * Add a document to a collection
     */
    async add(collection, document) {
        try {
            const docRef = await this.api
                .collection(collection)
                .add(document);
            return docRef.id;
        }
        catch (error) {
            return 'Error adding document: ' + error;
        }
    }

    /**
     * Update a document to a collection
     */
    async update(collection, id, document) {
        console.log('Update ', document.id, document);
        try {
            const docRef = await this.api
                .collection(collection)
                .doc(document.id)
                .set(document);
            return docRef.id;
        }
        catch (error) {
            return 'Error updating document: ' + error;
        }
    }

    /**
     * Delete a document from a collection by id
     */
    delete(collection, id) {        
        this.api
            .collection(collection)
            .doc(id)
            .delete();
    }
}