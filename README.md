# osu! Twitch Requests Bot

This bot is meant for osu! Twitch streamers who want to have their beatmap requests sent to their osu! DMs.

## Twitch Commands
- !req &lt;beatmap url&gt; - Sends beatmap to the player's DM
- !np - Reads `np.txt` inside the StreamCompanion directory (haven't tested with gosumemory, only works with .txt files). If the file doesn't exist, the command is ignored.
- !nppp - Reads `nppp.txt` inside the StreamCompanion directory.

## Requirements
- [node.js v16 & npm v7](https://nodejs.org/en/) 

## Installation
```console 
$ npm install
```

## Setup
For setup you'll first need to get your [Bancho IRC password](https://osu.ppy.sh/p/irc) and [osu! API key](https://osu.ppy.sh/p/api).

Once you get your API key, you'll also need to [generate a Twitch OAuth token](https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=gp762nuuoqcoxypju8c569th9wz7q5&redirect_uri=https://twitchtokengenerator.com&scope=chat:read+chat:edit&state=frontend|dit0ZFo2WmpjeVpaTGcvV29LbzlBZz09&force_verify=true).

Then create a file called .env with the following variables (&lt;&gt; = required):
```env
BANCHO_USER=<your bancho username>
BANCHO_PASS=<your bancho IRC password>
BANCHO_APIKEY=<your bancho API key>
REQUESTS_USER=<the bancho user who receives the requests>
TWITCH_OAUTH=oauth:<the access token you generated>
TWITCH_BOT_NAME=<the name of the twitch bot>
TWITCH_CHANNEL=<the name of the twitch channel>
COMMAND_PREFIX=!
STREAMCOMPANION_PATH=[path to your StreamCompanion directory with the np and nppp files]
```

## Running
```console
$ npm start
```
You can also use run.bat to run with logs