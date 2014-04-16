function formatTrello(data) {
  var logo = '<i>trello</i> '
  var name = data.action.memberCreator.initials
  var action

  switch(data.action.type) {
    case 'createCard':
      action = 'created <a href="https://trello.com/c/' + data.action.data.card.shortLink + '">' + data.action.data.card.name + '</a>'
      break
    case 'commentCard':
      action = 'commented on <a href="https://trello.com/c/' + data.action.data.card.shortLink + '">' + data.action.data.card.name + '</a>'
      break
    case 'updateCard':
      action = 'moved <a href="https://trello.com/c/' + data.action.data.card.shortLink + '">' + data.action.data.card.name + '</a> ' +
                'from ' + data.action.data.listBefore.name + ' to ' + data.action.data.listAfter.name
      break
    default:
      console.log(JSON.stringify(data, null, 2))
      action = 'modified <a href="'+ data.model.shortUrl +'">' + data.model.name + '</a>'
    }

  return name + ' ' + action
}

module.exports = formatTrello
