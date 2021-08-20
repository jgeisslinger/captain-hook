| :zap:        This is stll WIP - Do not use yet   |
|--------------------------------------------------|

# :anchor: GitHook App
 
GitHook is a simple javascript tool based on node.js to listen for git webhooks and deploy automatically on webserver. You can use this tool maintain your webprojects on a git repo and deploy changes automatically to your development or client servers. 

## :building_construction: Prerequisits

There are some prerequisits needed to use the tool:

- You use a git repo with webhooks capability (e.g. Github, Gitlab, Gitea)
- A linux server with either Apache or Nginx installed as webserver (IIS is currently not supported)
- Node.js installed on the server (npm)
- Firewall (UFW) opened on port 5000 to receive webhook


## :electric_plug: Installation

Githook is a node app running on your server. Login to your server via SSH. In your working directory pull the latest release, move into the folder and run the install.sh script.  

```bash
wget https://github.com/jgeisslinger/githook/archive/master.zip
unzip master.zip
cd ./githook
sudo bash install.sh
```

The script will automatically move the installation files to /var/www/githook, install the systemd script and enables the app as system process. You can also choose some configurations during the installation. 

## :bulb: Usage

TBD

### :triangular_ruler: Configuration


### :page_with_curl: Log
You can observe incoming webhooks by watching the log. Githook has volleyball included to log easy-to-read HTTP requests in your console.

```bash
journalctl -u node-app-service-name
```

