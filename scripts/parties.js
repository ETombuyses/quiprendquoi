if (typeof party !== 'undefined') {
  console.log('party', party);
  localStorage.setItem(location.href, party.name);
}