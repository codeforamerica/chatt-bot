# chatt-bot
*the name is very clever*

## Installation

```
$ npm install
```

## Running
Certain environment variables are expected (documented below).
Once those are set, simply

```
$ npm start
```

### Environment

For local development, create and env script and `source env` prior to running.
An example is provided in `env.template`

For Heroku, use `$ heroku config:set foo=bar`

- CHATBOT_URL
  - Full publically accessible URL (including http:// or https://) of the bot
- PORT
  - e.g. 8080 (on Heroku, this is set automtically)
- HIPCHAT_TOKEN
  - The account APIv1 token (from the Group Admin / API page)
- HIPCHAT_TRELLO_ROOM
  - The room token (from the Rooms / <room name> / Tokens page)
- TRELLO_KEY
  - App key (generate one from https://trello.com/docs/gettingstarted/index.html#getting-an-application-key)
- TRELLO_TOKEN
  - User token (see https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user)
- TRELLO_BOARD_ID
  - Get it from the API (see https://trello.com/docs/api/member/#get-1-members-idmember-or-username-boards)

## License
(c) MMXIV Code for America. Licensed under MIT license.