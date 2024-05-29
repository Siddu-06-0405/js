// npm i translate
// npm install translate
// add type : module as shown below in package.json file

// {
//     "type": "module",
//     "dependencies": {
//       "express": "^4.19.2",
//       "prompt-sync": "^4.2.0",
//       "translate": "^3.0.0",
//       "zod": "^3.23.8"
//     }
// }

import translate from "translate";

const text = await translate(
    "aap kaun hai?",
    {
        from: "hi",
        to:"en"
    }
);

console.log(text);