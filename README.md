# Welcome to your CDK TypeScript project

My notes for creating and deploying a Lambda function with AWS CDK and TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute the app.

## Commands I have used for this project

- `npm install -g aws-cdk`
- `cdk --version`
- `npm install -g typescript`
- `mkdir cdk-workshop && cd cdk-workshop`
- `cdk init --language typescript`

## Lambda stack

In `lib/cdk-workhop-stack.ts`:

```typescript
import * as lambda from 'aws-cdk-lib/aws-lambda';

// Inside the stack constructor
new lambda.Function(this, 'lambdaFucntion', {
  functionName: 'cdk-workshop-lambda-function',
  code: lambda.Code.fromAsset('dist/src'),
  runtime: lambda.Runtime.NODEJS_24_X,
  handler: 'index.handler',
  timeout: cdk.Duration.seconds(30)
});
```

## Lambda handler

In `src/index.ts`:

```typescript
export const handler = async (event: { name: string }) => {
  const result: string = event.name ? `Good Job ${event.name}!` : 'Good Job';
  return result;
};
```

## Build and deploy

With `"noEmit": false` and `"outDir": "dist"` in `tsconfig.json`, the build generates `dist/src/index.js`, which Lambda needs.

In `cdk.json`, `"@aws-cdk/aws-lambda:useCdkManagedLogGroup": false` lets Lambda reuse its existing log group and avoids an `AlreadyExists` deployment error.

- `npm run build`
- `cdk diff`
- `cdk bootstrap` — prepare the AWS account and Region before the first deployment
- `cdk deploy`

## Test the Lambda

Open `cdk-workshop-lambda-function` in the AWS Lambda console and choose **Test** with this event:

```json
{
  "name": "mohammad"
}
```

Expected response:

```json
"Good Job mohammad!"
```

## CI/ CD added 
.github/workflows/ci.yml
.github/workflows/cd.yml

## Cleanup

- `cdk destroy` — delete the deployed workshop stack when finished
