# Example: Use TestCafe with an External TypeScript Compiler

This simple JavaScript project explains how to use TestCafe with an *external* TypeScript compiler.

## The rationale

TestCafe can run TypeScript tests out of the box. When you laumch a TypeScript fixture, the framework uses the [built-in TypeScript compiler](https://testcafe.io/documentation/402824/guides/intermediate-guides/typescript-and-coffeescript) to generate JavaScript code.

Some users may prefer to use an **external** TypeScript compiler: to have more control over TypeScript compilation, or simply use a different version of TypeScript. 

## In this example

This example demonstrates how to create a TestCafe project with TypeScript tests that **does not** use the framework's built-in TypeScript compiler.

* The `test.ts` file contains a simple test.
* The `tsconfig.json` file contains custom TypeScript compilation settings.
* The `package.json` file contains scripts that compile the test into JavaScript and launch it with TestCafe.

## Run the example

1. Install the dependencies (`testcafe` and `typescript@5`):

    ```shell
    npm install
    ```

2. Run the script:

    ```shell
    npm run test:all
    ```
