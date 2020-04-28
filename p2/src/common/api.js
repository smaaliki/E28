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
                //querySnapshot.forEach(function (doc) {
                    //console.log(doc.id, ' => ', doc.data());
                //});
                console.log(querySnapshot.size);
                
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
     * Get a document from a collection by its id
     */
    get(collection, slug) {
        return this.find(collection, 'slug', slug);
    }

    /**
     * Get all the documents from a collection
     */
    async all(collection) {
        let results = {};
        const querySnapshot = await this.api
            .collection(collection)
            .get();
        querySnapshot.forEach(doc => {
            results[doc.id] = doc.data();
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
    save(collection, id) {
        this.api
            .collection(collection)
            .doc(id)
            .set();
    }

    /**
     * Delete a document from a collection by slug
     */
    delete(collection, id) {        

        this.api
            .collection(collection)
            .doc(id)
            .delete();
    }
}