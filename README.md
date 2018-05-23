# Shopper README

User Stories

- [x] User should be able to register/login
- [ ] User should be able to create product
- [ ] User should be able to pay for products using PayStack
- [ ] User should get email and SMS confirmation notification after purchase with details of payment
- [ ] Admin dashboard should be integrated

## Installation

Clone the project.

Both the backend and the frontend contain separate `package.json` files. To install everything using one command, run:

```js
npm run install-all
```

## Running

**One Command:**

```js
npm run dev
```

**Or:**

Launch the sails server

```js
cd backend && sails lift
```

Launch Vue

```js
cd frontend && npm run dev
```

Go to [http://localhost:8080](http://localhost:8080)

## Building / Production

```js
cd frontend && npm run build
```

```js
cd ../backend && NODE_ENV=production node app.js
```

[repo](https://bitbucket.org/lauragift21/shopper)
