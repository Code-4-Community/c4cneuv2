# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Setup

Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Install node version 20+:

```shellscript
nvm install 20
nvm use 20
```

Run ```git clone https://github.com/Code-4-Community/c4cneuv2.git``` in the terminal of your choice

Run the install script in the directory of the project ```/c4cneuv2```:

```shellscript
npm install
```

## Development

You will need to have the proper keys in your .env file at the root of the project

When working on a ticket, you should make a new branch and push all your code into that branch.
It should follow the naming convention of `your-name/feature-name`
For example: `git checkout -b "david/update-readme"`

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
