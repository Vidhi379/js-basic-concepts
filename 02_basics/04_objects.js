// const tinderUser = new Object() // singleton object, constructor method
// const tinderUser1 = {} // not a singleton object, object literal
// console.log(tinderUser);
// console.log(tinderUser1);

// tinderUser1.id = "123abc";
// tinderUser1.name = "Vidhi"
// console.log(tinderUser1);

// const regularUser = {
//     userDets: {
//         firstName:'Vidhi',
//         lastName: 'Shah',
//         favFood:{
//             chineese: 'manchurian',
//             streetFood: ['panipuri', 'vadapav','sevpuri', 'maggi'],
//             italian: 'pizza',
//         }
//     }
// }

// console.log(regularUser.userDets.favFood.streetFood[2]);
// console.log(regularUser.userDets.favFood.chineese);

// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"c", 4:"d"};
// const obj4 = {5:"e", 6:"f"};
// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4); // combines two objects into a single object 
// console.log(obj3); 

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {id:1, gmailId: 'v@gmail.com'}, {id:2, gmailId:'h@gmail.com'}
// ];
// console.log(users[1].gmailId);

// console.log(Object.keys(users)); // this function of object is used retrieve keys of the object here it is users obj
// console.log(Object.values(users))// this method is used to get the values of obj (users);
// console.log(Object.entries(users)); // splits the object (key value pairs) into one array  - Returns an array of key/values of the enumerable properties of an object
// console.log(users.hasOwnProperty('h@gmail.com'));

// Destucturing of Objects 

const course ={
    id: 1,
    courseInstructor: 'Hitesh',
    courseTopic: 'JS Basics'
}

// console.log(course.courseInstructor);
const {courseInstructor: instructor} = course // whenever curly braces are used it means objects are destructured 
// console.log(courseInstructor); 
console.log(instructor);

//json format similar to object syntax
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }