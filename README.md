# DFaucet
## Here I made my own token called DAMN token. Every new user can collect 10,000 DAMN tokens. The application also has the functionality of checking user balance by entering the principal identity of account. It also has a transfer functionality by which we can transfer the tokens from one users wallet to another. It also has login feature which uses login by Internet identity but this functionality has been commented out as this code is also used in another NFT marketplace app.

1. First install all required dependencies
```
npm i
```

2. Find out your principal id:

```
dfx identity get-principal
```

3. Replace the <REPLACE WITH YOUR PRINCIPAL> in main.mo with the principal you got from step 1.

```
  let owner : Principal = Principal.fromText("<REPLACE WITH YOUR PRINCIPAL>");
```

4. Open up a new terminal in this VSCode project and deploy the token canister:

```
dfx deploy
```

5. Start the frontend:

```
npm start
```

6. Set the canister id to a local variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

7. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

8. Claim the tokens from the faucet on the frontend website.

8. We can view the principal identity of the user acoount to whom the money has been transferred in the dfx start console screen.
