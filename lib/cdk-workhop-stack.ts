import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkWorkhopStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    new lambda.Function(this, 'lambdaFucntion', {
      functionName: 'cdk-workshop-lambda-function',
      code: lambda.Code.fromAsset('dist/src'),
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(30)
    });
  }
}
