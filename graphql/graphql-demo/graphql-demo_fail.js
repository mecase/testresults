var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { printError } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    uid: String!
    gecps: String!
    uidNumber: Int!
    eppns: [String!]
    status: Status
  }
  type Status {
    trainingUptodate: Boolean!
    lastAccountActivity: String!
  }

  type Query {
    getUser(uid: String): User
  }
`);

// This class implements the RandomDie GraphQL type
class User {
  constructor(uid, gecos, uidNumber, eppns, status) {
    this.uid = uid;
    this.gecos = gecos;
    this.uidNumber = uidNumber;
    this.eppns = eppns;
    this.status = status;
  }
}

class Status {
  constructor (trainingUptodate, lastAccountActivity) {
    this.trainingUptodate = trainingUptodate;
    this.lastAccountActivity = lastAccountActivity;
  }
}

var users = [];
users[0] = new User(
  "axj",
  "Alice Jones",
  1111,
  [ "alice@gmail.com", "a.jones@stanford.edu" ],
  new Status( 
            true,
            "2022-03-01T15:48:12Z"
        )
  );

function find(uid) {
    for ( i = 0; i < users.length; i++) {
      if ( users[i].uid == this.user_id ) {
        return users[i]
      }
    }
  }

printError(users[0]);

// The root provides the top-level API endpoints
var root = {
  printError(users[0]);
  getUser: ({uid}) => {
    return find(uid);
  }
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4002);
console.log('Running a GraphQL API server at localhost:4002/graphql');
