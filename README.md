## This is suppose to be a SW Siege Emulatorso taht we can run ML algorithms against it.

# Steps for setup:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install npm

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
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main