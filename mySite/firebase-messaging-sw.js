importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyDAPBUU4LdXZGMmtQIaGSvzLdEfg1KzDg4',
    authDomain: 'karpwa-dea36.firebaseapp.com',
    databaseURL: 'https://karpwa-dea36.firebaseio.com',
    projectId: 'karpwa-dea36',
    storageBucket: 'karpwa-dea36.appspot.com',
    messagingSenderId: '311785159077',
    appId: '1:311785159077:web:8df23cd38417fe4c11504c'
});

const messaging = firebase.messaging();
