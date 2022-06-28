---
sidebar_position: 1
---

# Integrating Passport in your DApp

Congratulations on making this far 🚀

Here, we will learn how to integrate gitcoin passport-reader-sdk into your NextJS application.

## Getting Started

Get started by **creating new NextJS Project**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Project from the basic NextJS template.

The classic template will automatically be added to your project after you run the command:

```bash
git clone https://github.com/RahulBansal123/Next-tailwind-web3.git
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run basic react project.

## Start your site

Run the development server:

```bash
cd Next-tailwind-web3
npm run dev
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

## Install passport reader sdk

Run the development server:

```bash
npm i @gitcoinco/passport-sdk-reader
```

## Reading a passfort from ceramic

In containers/main/index.jsx, make the following changes:

```javascript
import Head from 'next/head';
import PassportReader from '@gitcoinco/passport-sdk-reader'

import Header from '../../components/layout/Header';

const reader = new PassportReader('https://ceramic-clay.3boxlabs.com', '1');

const Main = ({ account }) => {
  const passport = await reader.getPassport(account);
  console.log(passport)

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container py-4 flex flex-col md:flex-row">hi</div>
    </div>
  );
};

export default Main;
```

When you open the terminal, you will get a list of all the stamps that have been collected for a given wallet address.

`Tip:` You can also restrict access to your DApp on the basis of trust score.
