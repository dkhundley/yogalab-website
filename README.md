# Yoga Lab Website
This README is intended to serve as source of documentation in order to educate an individual on the core functionalities of this site in the case that the original site creator (David Hundley) is no longer able to support the stack.



## Technical Stack
This website is built largely using the JavaScript framework known as `Next.js` and deployed to the `Vercel` platform. Next.js is built on top of another JavaScript framework known as `React`. In order to make alterations to this site on your local machine, you will need to install **Node.js**. This is the core package manager for installing `Next.js` and JavaScript packages in general. I personally used **Visual Studio Code (VS Code)** as an IDE to help me build this site, but VS Code is not a hard dependency. For transparency, I largely made use of **GitHub Copilot** as an AI coding tool to help build this website. To ensure transparency and understandability of this code base, I personally reviewed all AI-generated code and annotated all code appropriately with human readable comments that I wrote myself.



## Project Structure
This website's repository is largely structured as any typical Next.js / React website, but to be extra clear, let's cover the directory structure of this repository:

- **/public**: This is where all artifacts supporting the website are stored
    - **/fonts**: This is where any proprietary fonts are stored that are used across the website. For example, the Lulo Clean font is stored in this directory.
    - **/icons**: This directory contains any icons use across the website, including the favicon.
    - **/images**: This directory contains any images that are displayed on the website.
    - **/videos**: This directory contains any videos that are displayed on the website.
- **/src**: This directory contains all the source code that builds this website.
    - **main.jsx**: This is the primary "entrypoint" script for the website.
    - **App.jsx**: Referenced by `main.jsx`, this is the primary script that sets up the primary homepage of the website and how the user may navigate to other sites.
    - **/app**: This directory only contains a singular file: `globals.css`, which contains the CSS to manage the look and feel of the website holistically. Generally speaking, the CSS is directly embedded within each of the respective components with React / Next.js code. The CSS also manifests as Tailwind CSS.
    - **/pages**: This directory contains all the respective sites that may be displayed across the Yoga Lab / Lab Coffee sites, such as class offerings, coffee menu offerings, and more.
    - **/context**: This directory contains how the site manages its state so that it knows things like when a user is navigating the Yoga Lab side of things vs. the Lab Coffee things.
    - **/components**: This directory contains the individual "building blocks" that are leveraged by files within the `/pages` directory.
- **index.html**: This is the "starter" HTML entrypoint for the website. It contains the traditional `header` information to indicate things like general metadata about the website and favicon. It also points to `/src/main.jsx`, which is the primary entrypoint for all the other website scripts.
- **.gitignore**: This file is used to indicate files that should not be pushed up to GitHub. For example, `node_modules` are generally not pushed up to GitHub since they can easily be reinstalled by any user (see "Previewing the Website") and would bloat the GitHub remote repository.
- **package.json and package-lock.json**: These files behave similarly. `package.json` is specifically where we note all the Node dependencies that our project relies on, whereas `package-lock.json` notes the very particular dependencies that were downloaded when `npm install` is run. (See section: "Previewing the Website"). If you need to add / adjust any dependencies, it is recommended to do so in `package.json`.
- `eslint.config.mjs`: This file configures ESLint for the project. The intention is to enable recommended JavaScript linting tools. Generally speaking, this is one of those "set it and forget it" kind of files. I personally made no alterations to this file throughout the duration of development.
- `postcss.config.mjs`: This file helps to import Tailwind CSS, which is largely leveraged across this website to set the look and feel of the site.
- `vite.config.js`: Vite is what we use for local development purposes. It defines the configuration for what happens when we run `npm run dev`, such as setting the `localhost` port to 3000.



## Previewing the Website
In order to preview the website on your local machine, you will need to have `Node.js` installed. I'm not going to replicate instructions here. Essentially, all you need to do is to Google how to install Node.js. If you are on a macOS device, this is as simple as running a Homebrew command.

Once you have Node.js installed, you will be able to locally preview this website, you will first need to sync all the dependencies by running the following command:

`npm install`

Once these Node dependencies have been installed, you will be able to review the website by running the following command:

`npm run dev`



## External Integrations
The Yoga Lab website relies on two external dependencies: **Momence** and **Square**. Momence is the platform Yoga Lab uses to book customers into classes and display reviews from those customers, and Square is the platform in which customers are able to order food / drink items from Lab Coffee. In order to integrate each of these respective items, no special authentication was required. I did have to embed these respectively as `iframes`, which caused a bit of tenstion given that these embedded iframes had the tendency to overwrite other CSS, but otherwise, you should have no issue embedding these elements without any need for authorization credentials.