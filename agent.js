import 'dotenv/config';
import WDK from '@tetherto/wdk';
import WalletManagerEvm from '@tetherto/wdk-wallet-evm';

// Version v1.0 - Core Foundation Initialization
async function main() {
    console.log("=======================================================");
    console.log("   [///] ORCASTRIKE AI - v1.0 (THE FOUNDATION)         ");
    console.log("   Status: INITIALIZING WDK CORE MODULE...             ");
    console.log("=======================================================\n");

    try {
        if (!process.env.SEED_PHRASE) {
            throw new Error("Missing SEED_PHRASE in .env file!");
        }

        console.log("⏳ [SYSTEM] Loading Seed Phrase and initializing WDK...");
        
        // 1. Initialize WDK with Seed Phrase
        const wdkWithWallets = new WDK(process.env.SEED_PHRASE)
            .registerWallet('ethereum', WalletManagerEvm, { 
                provider: 'https://sepolia.drpc.org' // Connect to Sepolia Testnet
            });

        // 2. Retrieve Agent Wallet Information
        const ethAccount = await wdkWithWallets.getAccount('ethereum', 0);
        const address = await ethAccount.getAddress();
        console.log(`✅ [WDK CORE] Agent Wallet initialized successfully!`);
        console.log(`📍 [NETWORK] Wallet Address: ${address}`);

        // 3. Query Balance
        console.log("⏳ [SYSTEM] Checking balance on-chain...");
        const balance = await ethAccount.getBalance();
        
        // Convert wei to ETH for readability
        const ethBalance = Number(balance) / 10**18;
        
        console.log(`💰 [NETWORK] Available Balance: ${balance.toString()} wei (${ethBalance} ETH)\n`);

        console.log("✅ V1.0 COMPLETE: WDK Execution Hand is ready.");
        console.log("🚀 Awaiting v2.0 upgrade to integrate AI Brain (OpenRouter)...");
        
        process.exit(0);
    } catch (error) {
        console.error("❌ [SYSTEM ERROR]:", error.message);
        process.exit(1);
    }
}

main();