#!/bin/bash -x

# /srv/scripts/wait-for-it.sh -t 360 ${RABBITMQ_HOST:-'rabbit'}:${RABBITMQ_PORT:-'5672'}

if [ -z "$TESTING" ]; then
  npm run start
else
  npm run start:testing
  fi
