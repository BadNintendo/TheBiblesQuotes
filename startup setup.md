---

### 🧰 Step 1: Create a Startup Script

Let’s create a shell script that replicates your manual steps:

```bash
sudo nano /home/ubuntu/start-web.sh
```

Paste this:

```bash
#!/bin/bash
screen -dmS web bash -c 'cd /home/ubuntu/web && sudo node app.js'
```

Then make it executable:

```bash
chmod +x /home/ubuntu/start-web.sh
```

---

### ⚙️ Step 2: Create a systemd Service

Now create a systemd unit to run that script on boot:

```bash
sudo nano /etc/systemd/system/web-screen.service
```

Paste this:

```ini
[Unit]
Description=Start Node.js App in Screen Session
After=network.target

[Service]
Type=simple
ExecStart=/home/ubuntu/start-web.sh
RemainAfterExit=true
User=ubuntu

[Install]
WantedBy=multi-user.target
```

---

### 🔄 Step 3: Enable and Start the Service

```bash
sudo systemctl daemon-reload
sudo systemctl enable web-screen.service
sudo systemctl start web-screen.service
```

---

### 🧪 Step 4: Verify It Works

After reboot or power loss, SSH in and run:

```bash
screen -r web
```

You should see your app’s console output just like you started it manually.

---

### 🧠 Bonus Tips

- To make `sudo node app.js` safer, consider using `setcap`:
  ```bash
  sudo setcap 'cap_net_bind_service=+ep' $(which node)
  ```
  This lets Node bind to low ports without needing full root.

- You can also log output to a file inside the screen session:
  ```bash
  screen -dmS web bash -c 'cd /home/ubuntu/web && sudo node app.js >> logs.txt 2>&1'
  ```