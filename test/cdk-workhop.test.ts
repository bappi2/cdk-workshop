import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as MyFirstCdk from '../lib/cdk-workhop-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-workhop-stack.ts

test('My First Stack Created', () => {
    const app = new cdk.App();
    const stack = new MyFirstCdk.CdkWorkhopStack(app, 'CdkWorkhopStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'cdk-workshop-lambda-function',
        Runtime: 'nodejs24.x',
        Handler: 'index.handler',
        MemorySize: 128,
    });
});
