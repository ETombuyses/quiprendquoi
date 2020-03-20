(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _this=void 0;navigator.clipboard?(console.log("Support du presse papier"),document.querySelectorAll("[data-clipboard]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Copier",a.parentNode.append(b),b.addEventListener("click",copyToClipboard.bind(_this,a,b))})):console.warn("Pas de support clippboard :(");function copyToClipboard(a,b){navigator.clipboard.writeText(a.getAttribute("data-clipboard")).then(function(){b.innerHTML="Copi\xE9 !",setTimeout(function(){return b.innerHTML="Copier"},2e3)})["catch"](function(a){return console.warn(a)})}

},{}],2:[function(require,module,exports){
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
"use strict";

},{}],3:[function(require,module,exports){
"use strict";Notification?(console.log("notification supported"),document.querySelectorAll("[data-notify]").forEach(function(a){a.addEventListener("click",function(){Notification.requestPermission(),console.log("request notification permission")})}),document.querySelectorAll("[data-notify-item]").forEach(function(a){var b=a.getAttribute("data-notify-item"),c=a.getAttribute("data-notify-user");a.addEventListener("click",function(){"granted"===Notification.permission&&new Notification("Item supprim\xE9 !",{body:"".concat(c," n'apportera plus : ").concat(b)})})})):console.log("notification not supported");

},{}],4:[function(require,module,exports){
"use strict";"undefined"!=typeof party&&(console.log("party",party),localStorage.setItem(location.href,party.name));

},{}],5:[function(require,module,exports){
"use strict";var _this=void 0;navigator.share?(console.log("Support du share"),document.querySelectorAll("[data-share-url]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Partager",a.parentNode.append(b),b.addEventListener("click",share.bind(_this,a))})):console.warn("Pas de support du share :(");function share(a){navigator.share({title:a.getAttribute("data-share-title"),text:a.getAttribute("data-share-text"),url:a.getAttribute("data-share-url")})}

},{}]},{},[1,2,3,4,5]);
