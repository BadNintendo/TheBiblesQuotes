# 🔒 Secure Your Node.js App
### 3. Install & Generate SSL Certificates
Generate a self-signed SSL certificate using OpenSSL:
```sh
cd web
sudo apt install openssl -y
openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt
```
Alternatively, for a specific domain with limitations:
```sh
sudo apt install openssl -y
sudo openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt -subj "/CN=*.thebiblesquotes.com"
```

### 5. Secure Database Access (Optional) If troubles try root:root instead of ubuntu:ubuntu
Prevent unauthorized access to the generated `database.json` file:
```sh
cd json
sudo chmod 600 database.json
cd ../
sudo chmod 600 .env
sudo chmod 600 server.key
sudo chmod 644 server.crt
sudo chown ubuntu:ubuntu server.key server.crt
sudo chown ubuntu:ubuntu json/database.json
```

## **2️⃣ Set Folder Permissions**
```sh
# Restrict sensitive data
sudo chmod 700 data          # Only ubuntu can read/write
# Allow template rendering
sudo chmod 755 views         # Readable by web server, writable only by ubuntu
# Public assets (served by web server)
sudo chmod 755 public        # Readable by all, writable only by ubuntu
# App entry point
sudo chmod 755 app.js        # Executable, readable by all
```

## **3️⃣ Correct Ownership**
```sh
# Give ubuntu full control
sudo chown -R ubuntu:ubuntu app.js views data

# Allow www-data to serve public assets
sudo chown -R ubuntu:www-data public
```

### 🔍 Step 1: Check Your Node Version
Run:
```sh
node -v
```
If it’s **below v14**, optional chaining will throw a syntax error.

### 🛠️ Step 2: Upgrade Node.js (Cleanest Way)
```sh
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
```

### Extra (If doesnt run after try some extra packages)
Run the following command to install the required npm packages:
```sh
sudo npm install -y wrtc domexception@1.0.1
sudo npm install -g node-pre-gyp
sudo npm install -g forever
```

This installs **Node.js v18**, which fully supports optional chaining and is stable for production.

Then verify:
```bash
node -v
npm -v
```

Once upgraded, run app:
```sh
sudo npm i
sudo node app.js
```

🚀 **Done! Your app is secure & ready to run!** 🔐 


## ✅ Best Practice: Let systemd Run as Root Directly

### 🔧 Updated `start-web.service
```sh
sudo nano /etc/systemd/system/my-node-app.service
```

```ini
[Unit]
Description=Start TheBiblesQuotes.com Node.js App
After=network-online.target
ExecStartPre=/bin/sleep 5

[Service]
ExecStart=/usr/bin/node /home/ubuntu/web/app.js
Restart=always
User=root
Environment=PATH=/usr/bin:/usr/local/bin
WorkingDirectory=/home/ubuntu/web
ExecStartPre=/bin/sleep 5

[Install]
WantedBy=multi-user.target

```

```sh

sudo systemctl daemon-reload 
sudo systemctl start start-web.service
```

```bash
#!/bin/bash

cd /home/ubuntu/web
forever start app.js
```

---

## ✅ Enable and Start the Service

```sh
sudo systemctl daemon-reexec
sudo systemctl enable start-web.service
sudo systemctl start start-web.service
```

Check status:
```sh
sudo systemctl status start-web.service
sudo systemctl enable --now my-node-app.service

```

---

## 🧘 Bonus: Logging

To view logs:
```sh
journalctl -u start-web.service -f
```

Or configure `forever` to log to a file:
```sh
forever start -l /home/ubuntu/web/forever.log app.js
```

