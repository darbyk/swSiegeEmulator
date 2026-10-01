## This is suppose to be a SW Siege Emulatorso taht we can run ML algorithms against it.

# Steps for setup:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install npm
brew install gh

confirm:
node -v
npm -v

Projectx setup:
npm init -y

npm install -D typescript ts-node @types/node

npx tsc --init

npm install --no-audit --no-fund



Running project:
npm run build

Initialize Git:

git init

git add .

git commit -m "Initial commit"

git branch -M main

git remote set-url origin git@github.com:darbyk/swSiegeEmulator.git

git push -u origin main


gh auth login

ssh-keygen -t ed25519 -C "dhk5t@virginia.edu"

eval "$(ssh-agent -s)"

touch ~/.ssh/config

    Host github.com

        AddKeysToAgent yes

        UseKeychain yes

        IdentityFile ~/.ssh/id_ed25519
        