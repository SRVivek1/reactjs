# React Local System Setup (Linux Ubuntu/Pop!_OS)
## Method 1: Install from Pop!_OS Repository (Stable)
  - ***Best for most users who want stability.***
  - **Update package lists:** 
    - *sudo apt update && sudo apt upgrade -y* 
  - **Install Node.js:** 
    - *sudo apt install nodejs npm -y*
  - **Check Node.js Version:** 
    - *node -v*
  - **Check NPM Version:** 
    - *npm -v*


## Method 2: Install Latest Version Using NodeSource (Latest)
  - ***Best for users who want the latest version.***
  - **Update package lists:** 
    - *sudo apt update && sudo apt upgrade -y*
  - **Install dependencies:** 
    - *sudo apt install curl -y*
  - **Add the NodeSource repository (for the latest Node.js 20 LTS):** 
    - *curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -*
  - **Install Node JS:** 
    - *sudo apt install nodejs -y*
  - **Check Node.js Version:** 
    - *node -v*
  - **Check NPM Version:** 
    - *npm -v*


## Method 3: Install Using NVM (Node Version Manager)
  - ***Best if you want to manage multiple Node.js versions.***
  - **Update package lists:** 
    - *sudo apt update && sudo apt upgrade -y*
  - **Install dependencies:** 
    - *sudo apt install curl -y*
  - **Install NVM:** 
    - *curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash*
  - **Reload shell configuration**
    - *source ~/.bashrc  # or source ~/.zshrc if using Zsh*
  - **Install Node.js LTS:** 
    - *nvm install --lts*
  - **Set the default Node.js Version:**
    - *nvm use --lts*
    - *nvm alias default lts/**
  - **Check Node.js Version:** 
    - *node -v*
  - **Check NPM Version:** 
    - *npm -v*

## Which method to use
  - **For stability:** 
    - *Method 1 (Pop!_OS repo)*
  - **For the latest version:** 
    - *Method 2 (NodeSource)*
  - **For multiple versions:** 
    - *Method 3 (NVM)*
  
## Additional Notes
  - **Ensure you have a compatible version of Linux** for optimal performance.
  - **Consider using LTS versions** for better stability and support.
  - **Always check the official documentation** for the latest updates and changes.
  - **Review and update your setup periodically** to incorporate any improvements or security patches.


---
<center>
<h1> ------ End ------ </h1>
</center>

<!-- HTML styling -->
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  heading {
    color: blue;
    font-size: 20px;
  }
</style>