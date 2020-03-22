# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- Ajout d'un item (`app.js`, `party.pug`)
- Affichage des items (`app.js`, `party.pug`)
- Suppression d'un item (`app.js`, `party.pug`)
- Notification en cas de suppression d'un item par nous même (`notification.js`)
- Notification si suppression ou ajout d'un item grâce à un fetch toutes les 5 secondes --> rafraichissement automatique (`fetchItems.js`)
- CSS convenable (`style.scss`)
- Mise en ligne sur Heroku (`https://qui-prend-quoi.herokuapp.com/`)

PS : J'ai rencontré un problème avec la redirection d'URL effectuée par l'application au moment d'ajouter un item. Je n'ai malheureusement pas encore trouvé la solution pour éviter de rediriger la page APRES avoir obtenu une acceptation ou un refus des notifications. Il faudra peut être donc autoriser manuellement les notifications pour qu'elles fonctionnement

## Article personnel

### Sujet : API Web Notifications

Les web notifications sont des notifications que l'utilisateur reçoit sur son système d'exploitation.
Elles permettent de notifier l'utilisateur de certains "évènements" qui ont lui sur le site qu'ils utilisent. Par exemple, lorsque l'on reçoit une notification sur notre ordinateur ou téléphone nous prevenant que nous avons reçu un message sur un réseau social.

Pour vérifier que le browser comprend bien les notifications, il doit pouvoir y avoir accès
`
if (Notification) {
  // I can handle notifications !!!
}
`

Afin de les utiliser, il faut encore demander la permission à l'utilisateur grâce à 
`Notification.requestPermission().then(() => {
  // wait for the user to make a choice, then do something
})`

Cela va déclancher une fenêtre de dialogue du browser (la forme dépend de celui-ci) en demandant si l'on souhait ou non recevoir des notifications de la part du site en question. L'utilisateur peut alors accepter ou décliner.

La permission de l'Interface Notification avoit comme valeur :

- default: l'utilisateur n'a pas fait son choix, par défaut, cela revient à dire qu'il n'a pas accepté
- granted : l'utilisateur a accepté de recevoir des notifications
- denied : l'utilisateur a refusé de recevoir des notifications

Idéalement, il ne faut demander qu'une seule fois la permission à l'utilisateur pour éviter de le spammer.


Si l'on a obtenu la permission, on peut encoyer des notifications dont voici un exemple :
`new Notification('I am the notification's title !', {
  body: `I am the notification's body`
});`

Le paramètre utilisé pour créer une notification est un objet d'options. Les principales options sont les suivantes : 
`{
  "body": "<String>",
  "icon": "<URL String>",
  "image": "<URL String>",
  "badge": "<URL String>",
  "vibrate": "<Array of Integers>",
  "sound": "<URL String>",
  "dir": "<String of 'auto' | 'ltr' | 'rtl'>",
}`

On peut ainsi personnaliser nos notifications avec un titre, une icône, une image et bien d'autre encore.


