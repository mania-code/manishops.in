# Deploy to EC2

These instructions assume you are using **Amazon Linux 2023** (AWS's current default).

## 1. Connect to your EC2 Instance
```bash
ssh -i /path/to/key.pem ec2-user@your-ec2-ip
```

## 2. Install Git and Docker
```bash
sudo yum update -y
sudo yum install -y git docker
```

Start Docker and enable it to run on boot:
```bash
sudo service docker start
sudo systemctl enable docker
```

Add your user to the docker group (avoid using sudo for docker commands):
```bash
sudo usermod -aG docker ec2-user
```
**Logout and log back in** for the group change to take effect.

## 3. Install Docker Compose
```bash
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
```

Verify installation:
```bash
docker compose version
```

## 4. Allow Traffic
In your **AWS Security Group** settings for this instance, ensure:
- Port **80** (HTTP) is open to `0.0.0.0/0` (Anywhere)
- Port **22** (SSH) is open to your IP

## 5. Clone and Run
Clone your repository (you may need to set up SSH keys or use HTTPS with a token):
```bash
git clone https://github.com/YOUR_USERNAME/manishops.in.git
cd manishops.in
```

Start the application:
```bash
docker compose up -d --build
```
- `-d`: Runs in background (detached mode)
- `--build`: Forces a rebuild of images

## 6. Access
Navigate to your EC2 instance's public IP in your browser: `http://your-ec2-ip`
