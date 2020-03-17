if (navigator.share) {
  console.log("Support du share")
  document.querySelectorAll('[data-share-url]').forEach(($shareableEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $shareableEl.parentNode.append($button);

    $button.addEventListener('click', share.bind(this, $shareableEl));
  });
} else console.warn("Pas de support du share :(")


function share($shareEl) {
  navigator
  .share({
    title: $shareEl.getAttribute('data-share-title'),
    text: $shareEl.getAttribute('data-share-text'),
    url: $shareEl.getAttribute('data-share-url'),
  })
}

