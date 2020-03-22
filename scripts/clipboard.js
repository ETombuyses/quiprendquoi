if (navigator.clipboard) {
  console.log("Support du presse papier")
  document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Copier le lien de partage';
    $clipboardEl.parentNode.append($button);

    $clipboardEl.remove()

    $button.addEventListener('click', copyToClipboard.bind(this, $clipboardEl, $button));
  });
} else console.warn("Pas de support clippboard :(")


function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
  .writeText($clipboardEl.getAttribute('data-clipboard'))
  .then(() => {
    $button.innerHTML = 'Lien copié !';
    setTimeout(() => ($button.innerHTML = 'Copier le lien de partage'), 2000)})
  .catch((err) => console.warn(err));
}