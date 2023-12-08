#!/bin/bash

docker build -t milktjj/tear-web:latest .

# docker tag 

docker push milktjj/tear-web:latest
