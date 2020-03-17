if (Notification) {
  console.log('notification supported')
  document.querySelectorAll('[data-notify]').forEach(button => {
    button.addEventListener('click', function() {
      Notification.requestPermission();
      console.log('request notification permission')
      // wait for permission
    })
  })

  document.querySelectorAll('[data-notify-item]').forEach(deleteButton => {
    const item = deleteButton.getAttribute('data-notify-item')
    const user = deleteButton.getAttribute('data-notify-user')
    console.log('utem', item)
    deleteButton.addEventListener('click', () => {
      console.log('trigerred notif', Notification.permission)
      if (Notification.permission === 'granted') {
        new Notification('Item supprimé !', {
          body: `${user} n'apportera plus : ${item}`
        });
      }
    })
  })
} else console.log('notification not supported')