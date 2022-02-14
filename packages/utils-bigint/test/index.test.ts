/* globals describe it */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('lepton-monorepo', function tests() {
  this.timeout(120000);

  it('Should run mock test', async function run() {
    expect(1 + 1).to.equal(2);
  });
});
