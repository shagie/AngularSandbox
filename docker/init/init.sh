#!/bin/sh

echo "ok"

# TODO check to see if database already properly instantiated

curl -X PUT http://couchdb:5984/_users
curl -X PUT http://couchdb:5984/_replicator
curl -X PUT http://couchdb:5984/_global_changes

curl -X PUT http://couchdb:5984/students
curl --upload-file students/design_views.json http://couchdb:5984/students/_design/views

# TODO better scripting

curl -X PUT http://couchdb:5984/teachers
curl --upload-file teachers/1.json http://couchdb:5984/teachers/1
curl --upload-file teachers/2.json http://couchdb:5984/teachers/2
curl --upload-file teachers/3.json http://couchdb:5984/teachers/3
curl --upload-file teachers/4.json http://couchdb:5984/teachers/4
curl --upload-file teachers/5.json http://couchdb:5984/teachers/5