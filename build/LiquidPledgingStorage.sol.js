/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ILiquidPledgingPluginAbi = [{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
exports.ILiquidPledgingPluginByteCode = "0x"
exports.ILiquidPledgingPluginRuntimeByteCode = "0x"
exports['_./contracts/ILiquidPledgingPlugin.sol_keccak256'] = "0x5428d88ef6856b67f0d3271065542aa4b7e6d73428b35bf1b434e5f507d3b88b"
exports.ILPVaultAbi = [{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
exports.ILPVaultByteCode = "0x"
exports.ILPVaultRuntimeByteCode = "0x"
exports.LiquidPledgingStorageAbi = [{"constant":true,"inputs":[],"name":"whitelistDisabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
exports.LiquidPledgingStorageByteCode = "0x60606040526005805460ff19169055341561001957600080fd5b610100806100286000396000f30060606040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631c8e85688114604d578063fbfa77cf146071575b600080fd5b3415605757600080fd5b605d60aa565b604051901515815260200160405180910390f35b3415607b57600080fd5b608160b3565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60055460ff1681565b600554610100900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582074d9d7bbdf9db1111999ed5df541c7c34bae37949773a356678e251f819f25260029"
exports.LiquidPledgingStorageRuntimeByteCode = "0x60606040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631c8e85688114604d578063fbfa77cf146071575b600080fd5b3415605757600080fd5b605d60aa565b604051901515815260200160405180910390f35b3415607b57600080fd5b608160b3565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60055460ff1681565b600554610100900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582074d9d7bbdf9db1111999ed5df541c7c34bae37949773a356678e251f819f25260029"
exports['_./contracts/LiquidPledgingStorage.sol_keccak256'] = "0x81ef504efbc50c58acec1b85784d9be3cb0bd761b3e9d013b19aa5f0d5169a08"
exports._solcVersion = "0.4.18+commit.9cf6e910.Darwin.appleclang"