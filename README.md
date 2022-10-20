# crypto-cli
Command line interface written in Node.js to check cryptocurrency prices

Register and get an API key at https://nomics.com(There are other plaforms that offer a free tier)

# Usage

```
npm install

npm link

```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR

```

