#!/bin/sh
while true
do
  curl --location --request GET 'https://usedbookstore.herokuapp.com/users/getAreaNames'
done