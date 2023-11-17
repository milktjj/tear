#!/bin/bash

docker build -t milktjj/tear-web:latest . --no-cache

# docker tag 

docker push milktjj/tear-web:latest
