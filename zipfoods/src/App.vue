<template>
  <div id="app">
    <img alt="ZipFoods logo" id='logo' src="@/assets/images/zipfoods-logo.png">

    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='{ name: link}' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the firestore product from Firebase
import 'firebase/firestore';

export default {
  name: 'App',
  components: {},
  data: function() {
    return {
          links: ['home','products','categories'],
    };
  },
  mounted: function() {
    // Initialize firebase
    let projectId = 'e28-zipfoods-sm';
    firebase.initializeApp({
        apiKey: 'AIzaSyAFzUWzTf3YSeZkkXsz-Izp6XKR9Emd6g0',
        authDomain: projectId + '.firebaseapp.com',
        databaseURL: 'https://' + projectId + '.firebaseio.com',
        projectId: projectId,
    });

    // Initialize firestore
    let api = firebase.firestore();
  api.collection('products')
    //.doc('ODaS6AFDcNHVqcaNIXrc')
    .where('slug', '==', 'driscolls-strawberries')
    .get()
//    .then(function(doc) {
//        console.log(doc.data());
    .then(function(querySnapshot) {
        console.log(querySnapshot.docs.shift().data());
    })
    .catch(function(error) {
        console.log('Error getting documents: ' + error);
    });

    /*api.collection('products')
      .add({
        slug: 'driscolls-strawberries',
        name: 'Driscoll’s Strawberries',
        description: 'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
        price: 4.99,
        available: 0,
        weight: 1,
        perishable: true, 
        categories: ['produce', 'fruits']
      })
      .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
          console.error("Error adding document: ", error);
      });*/
    }  
};
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
