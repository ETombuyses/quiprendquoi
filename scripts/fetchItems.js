const itemsList = document.querySelector('.items')

if (itemsList) {
  const partyId = document.querySelector('[data-party-id]').getAttribute('data-party-id')
  const partyName = document.querySelector('[data-party-id]').textContent

  fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then((response) => {
    response.json().then((data) => {
      const items = data.items
      const itemsIds = []

      data.items.forEach(item => {
        itemsIds.push(item._id)
      })
      console.log('itemsIDS', itemsIds)

      setInterval(() => {
        fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then((response) => {
          response.json().then(data => {
            const freshItems = data.items
            const freshItemsIds = []
            let reload = false

            freshItems.forEach(item => {
              freshItemsIds.push(item._id)
            })

            // notify if new item
            freshItems.forEach(freshItem => {
              if (itemsIds.indexOf(freshItem._id) === -1) {
                if (Notification) {
                  if (Notification.permission === 'granted') {
                    new Notification(`Item ajouté à ${partyName}!`, {
                      body: `${freshItem.user} a décidé d'apporter : ${freshItem.name}`
                    });
                  }
                }      
                reload = true        
              }
            })

            // notify if deleted item
            items.forEach(item => {
              if (freshItemsIds.indexOf(item._id) === -1) {
                if (Notification) {
                  if (Notification.permission === 'granted') {
                    new Notification(`Item supprimé de ${partyName}!`, {
                      body: `${item.user} n'apportera plus : ${item.name}`
                    });
                  }
                  reload = true
                }
              }
            })

            if (reload) document.location.reload()
          });
        });
      }, 5000);
    });
  });  
} else console.log('no item list')


