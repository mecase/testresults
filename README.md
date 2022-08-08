testresults
README.md

It is weird to be writing this up in this way.

I. 
===

cdk_demo shows the things I was learning/trying in terms of setting up AWS and how far I got.

Error looks like the following. All the google results for 'this' not assignable to parameter of type 'Construct' have not yeilded a solution.

(mecvenv) ➜  cdk-demo git:(master) ✗ cdk deploy
/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:859
    return new TSError(diagnosticText, diagnosticCodes, diagnostics);
           ^
TSError: ⨯ Unable to compile TypeScript:
lib/cdk-demo-stack.ts:14:25 - error TS2345: Argument of type 'this' is not assignable to parameter of type 'Construct'.
  Type 'CdkDemoStack' is missing the following properties from type 'Construct': onValidate, onPrepare, onSynthesize

14     const vpc = new Vpc(this, 'MainVpc',{
                           ~~~~

    at createTSError (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:859:12)
    at reportTSError (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:863:19)
    at getOutput (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:1077:36)
    at Object.compile (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:1433:41)
    at Module.m._compile (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:1617:30)
    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/michaelecase/Desktop/AWSLearning/cdk-demo/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19) {
  diagnosticCodes: [ 2345 ]
}

Subprocess exited with error 1

To set up the cdk_demo, you need to have all the AWS requirements and get to this point:
https://aws.amazon.com/getting-started/guides/setup-cdk/module-three/

I only provided the files I changed from that repo, following the instructions and got stuck.

Startup:
cdk deploy


II.
===

On the Strawberry Rocks front I got only so far. I could not actually get the Status to be the way I wanted. I also think from your first line I was lost. I thought that by learning the components I would eventually be able to understand how to build a microservice. In any case, this is just a dump of two users from the information you provided, hard-coded in the python, so not the right idea.

Startup:
strawberry server schema


III.
===

On the GraphQL side of things I basically ran the die rolling demo, graphql-demo.js. I then started to explore, again, doing it the way I wanted (without fully understanding the environment I'm working in, Node.js)

That is graphql-demo_fail.js. If I were to explain it to you I could tell you what I was thinking and why I tried what I did try.

In neither case did I get far enough to consider mutations. 

Startup:
node graphql-demo_fail.js
node graphql-demo.js


IV.
===

I just tried to figure out how to get the data you gave me into MongoDB Atlas. I have nothing to show for that tonight. I'll keep playing, maybe switch over to one of their data sets after this 'test' is over.


AND finally:

V.
===

I downloaded Docker for the Mac, it required hyperkit but also, my Mac OS is too old to run it.


