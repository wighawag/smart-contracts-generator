import {expect} from './chai-setup';
import {ethers, deployments, getUnnamedAccounts} from '@nomiclabs/buidler';

describe('GobelinRegistry', function () {
  it('should work', async function () {
    await deployments.fixture();
    const gobelinRegistryContract = await ethers.getContract('GobelinRegistry');
    expect(gobelinRegistryContract.address).to.be.a('string');
  });

  it('should fails', async function () {
    await deployments.fixture();
    const gobelinRegistryContract = await ethers.getContract('GobelinRegistry');
    expect(gobelinRegistryContract.fails('testing')).to.be.revertedWith('fails');
  });

  it('setMessage works', async function () {
    await deployments.fixture();
    const others = await getUnnamedAccounts();
    const gobelinRegistryContract = await ethers.getContract('GobelinRegistry', others[0]);
    const testMessage = 'Hello World';
    await expect(gobelinRegistryContract.setMessage(testMessage))
      .to.emit(gobelinRegistryContract, 'MessageChanged')
      .withArgs(others[0], testMessage);
  });
});
