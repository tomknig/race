#! /bin/bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
SEED_DIR=$SCRIPT_DIR/seed

mongoimport --host mongo --port 27017 --db race --collection authors --mode upsert --type json --file ${SEED_DIR}/airtableAuthors.json --jsonArray
mongoimport --host mongo --port 27017 --db race --collection applications --mode upsert --type json --file ${SEED_DIR}/airtableApplications.json --jsonArray
