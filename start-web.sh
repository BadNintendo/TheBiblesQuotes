#!/bin/bash
PASSWORD=$(< /etc/web-password.secret)
export PASSWORD
cd /home/ubuntu/web
node  app.js