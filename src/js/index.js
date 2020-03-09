import 'babel-polyfill';
import _ from 'lodash';
import './../sass/styles.scss';
import { request, GraphQLClient } from "graphql-request";
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../index.html')
}
const query = `
  query {
    country(code: "BR") {
      name
      native
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
const url = "https://countries.trevorblades.com/";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
// const client = new GraphQLClient('https://snowtooth.moonhighway.com/', {
//   mode: 'no-cors'
//  })

// const query = `
//   query {
//     Lift(id: "panorama") {
//       name
//       status
//     }
//   }
// `;

// client.request(query)
//   .then(console.log)
//   .catch(console.error);

// const query = `
//   query Courses {
//     courses {
//       topic
//     }
//   }
// `;
// const url = "http://localhost:3000/";
// const opts = {
//   method: "POST",
//   mode: 'no-cors',
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query })
// };
// fetch(url, opts)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);


// fetch('http://localhost:3000/', {
//   method: 'POST',
//   mode: 'no-cors',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     query: `
//       query {
//         Courses {
//           courses {
//             topic
//           }
//         }
//       }
//     `
//   })
// })
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
//   }).catch((err) => {
//     console.log(err)
//   })

// https://api.chucknorris.io/jokes/random

// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(console.log);