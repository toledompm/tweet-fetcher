## Description

API to fetch and save tweets that contain a given #hashtag

## Setup

```bash
# This application requires some auth keys from the twitter api
# You can fill them out in the .env file
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=
TWITTER_API_KEY=
TWITTER_API_KEY_SECRET=
```

## Installation

```bash
$ npm install
```

## Run migrations

```bash
# Start database
$ make db-up

# Build app (typeorm looks for entities/migrations in the dist/ directory)
$ npm run build

# Run migrations
$ npm run migration:run
```

## Running the app

```bash
# Development
$ make db-up
$ npm run start:dev

# Running the app on docker-container
# Change .env DB_HOST to db
$ docker-compose up
```

## Send requests!

```bash
GET @ localhost:3000/tweet/:hashtag
```

example response:

```
{
    "twitterId": "1234",
    "body": "this is a tweet with a #hashtag",
    "hashtags": [
        {
            "text": "hashtag",
            "searchHashtag": true
        }
    ],
    "id": 3
}
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

Created with:
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
