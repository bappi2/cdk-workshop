import { handler } from "../src";

describe('My First CDK App Tests', () => {

    it('returns name and tekst', async () => {
        const output = await handler({ name: 'mohammad' });
        expect(output).toStrictEqual('Good Job mohammad!')
    })

    it('returns no name and tekst', async () => {
        const output = await handler({ name: '' });
        expect(output).toStrictEqual('Good Job')
    })
});