// let itemsList = document.querySelector('.items')

// if (itemsList) {
//   let partyId = document.querySelector('[data-party-id]').getAttribute('data-party-id')


//   fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then((response) => {
//       response.json().then((data) => {
//           let items = data.items

//           setInterval(() => {
//             fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then((response) => {
//               response.json().then((data) => {
//                 let freshItems = data.items

//                 if (items.length !== freshItems.length) {
//                   // TODO: refresh data
//                 }
//               });
//             });
//           }, 2000);
//       });
//     });  
// } else console.log('no item list')


