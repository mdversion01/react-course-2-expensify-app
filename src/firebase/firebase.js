import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // Add on subscribers
// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_change
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });

// // Setting up a subscription for changes to array data
// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);    
// // });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Rent is due',
//     amount: 50000,
//     createdAt: 0
// });

// // database.ref('expenses').push({
// //     description: 'Groceries',
// //     note: 'Yummy food',
// //     amount: 30000,
// //     createdAt: 0
// // });

// // database.ref('expenses').push({
// //     description: 'Entertainment',
// //     note: 'Went to the movies',
// //     amount: 2000,
// //     createdAt: 0
// // });

// // database.ref('notes/-Lo6Ekl9QF_yNZw5FyAA').update({
// //     body: 'Buy food'
// // })

// // Create New things in Array
// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React, Angular, Python'
// // })

// // Working with Arrays with Firebase
// // const firebaseNotes = {
// //     notes: {
// //         abc: {
// //             title: 'First note!',
// //             body: 'This is my note.'
// //         },
// //         def: {
// //             title: 'Another note!',
// //             body: 'This is my note.'
// //         }
// //     }
// // }

// // Fetch Data from Database
// // Setting up a subscription
// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // }, (e) => {
// //     console.log('Error fetching data: ', e)
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error fetching data: ', e)
// // });

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 3500);

// // Turn off subscription
// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(34);
// // }, 10500);

// // Fetch Data from database
// //   database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data: ', e)
// //     });

// //   database.ref().set({
// //     name: 'Mathew Daugherty',
// //     age: 49,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: "Reston",
// //         country: "United States"
// //     }
// //   }).then(() => {
// //       console.log('Data is saved');
// //   }).catch((e) => {
// //       console.log('This failed: ', e)
// //   });

// // Remove with set(null)
// //   database.ref('isSingle').set(null);

// // Delete data
// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data is deleted');
// //     })
// //     .catch((e) => {
// //         console.log('Deletion failed: ', e);
// //     });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle' 
// // });


// // database.ref().set('This is my data');
// // database.ref('age').set(50);
// // database.ref('location/city').set('Herndon');

// // database.ref('attributes').set({
// //     height: 69.6,
// //     weight: 195
// // }).then(() => {
// //     console.log('Data is saved and updated');
// // }).catch((e) => {
// //     console.log('This failed: ', e)
// // });;

// // or separately
// // database.ref('attributes/height').set(6);
// // database.ref('attributes/weight').set(195);

