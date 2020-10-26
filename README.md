# From Front-end to Full Stack – Next.js Conf 2020

> This project demonstrates the architecture changes Amplify JS needed to support Next.js,
> authentication & data-access in a client-side application,
> and how to move logic to the server for better performance.

![Screenshot of app](screenshot.png)

## Setup

1. Clone this repo

   ```shell
   git clone git@github.com:ericclemmons/next.js-conf-2020.git
   ```

1. Change into the directory & install the dependencies

   ```shell
   cd next.js-conf-2020

   yarn install
   ```

1. **Next, choose your own adventure:**:

   1. You can either continue with the [`live-demo`](https://github.com/ericclemmons/next.js-conf-2020/tree/live-demo) branch and re-use the backend configuration from the presentation.
   1. Or, you can checkout the [`main`](https://github.com/ericclemmons/next.js-conf-2020/tree/main) branch & setup Amplify from scratch (e.g. `amplify init`, `amplify add auth`, `amplify add api`).

## Existing Backend ([`live-demo`](https://github.com/ericclemmons/next.js-conf-2020/tree/live-demo))

1. Initialize Amplify

   ```shell
   amplify init
   ```

   <details>
   <summary>
   More details&hellip;
   </summary>

   ```console
   $ amplify init
   ? Do you want to use an existing environment? Yes
   ? Choose the environment you would like to use: dev
   ? Choose your default editor: Visual Studio Code
   ```

   </details>

1. Deploy your backend to the cloud

   ```shell
   amplify push
   ```

   <details>
   <summary>
   More details&hellip;
   </summary>

   ```console
   ? Do you want to generate code for your newly created GraphQL API Yes
   ? Choose the code generation language target javascript
   ? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
   ? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
   ? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
   ```

   </details>

1. Run the app locally

   ```shell
   yarn dev
   ```

Visit http://localhost:3000/ to view the app!
