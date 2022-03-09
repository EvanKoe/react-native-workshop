Cloning this repo, you will see an example of a counter app.

If you want to see the todo app, follow the commented instructions in App.tsx

# Installation 
After cloning the repo, execute the following command : `yarn` to install the needed dependencies

and then run it with `yarn start`

## For Ubuntu users
If you encounter any problem, execute the following command in your terminal :
```bash
npm i -g gatsby
```

then, add this line to your package.json (in the script field):
```json
  "build": "export NODE_OPTIONS=--openssl-legacy-provider && expo start"
```

and run the program with `yarn build`

