# 🎯 OrcaStrike AI: Autonomous WDK-Powered Arbitrage Agent

![Version](https://img.shields.io/badge/version-3.0_PoC-blue)
![Track](https://img.shields.io/badge/Hackathon_Track-Agent_Wallets_(WDK)-success)
![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen)

## 💡 Overview
OrcaStrike AI is an autonomous, high-frequency Trading Agent designed to hunt for low-risk stablecoin arbitrage opportunities across omni-chain liquidity pools. 

By integrating **Tether's Wallet Development Kit (WDK)** for secure, non-custodial asset management and **OpenRouter AI (LLMs)** for real-time economic reasoning, OrcaStrike represents the next generation of Web3 Autonomous Agents. It bridges the gap between AI's analytical power and decentralized finance's execution layer.

## 🚀 Key Features
* **WDK Core Integration:** Fully utilizes `@tetherto/wdk` and `@tetherto/wdk-wallet-evm` to generate non-custodial wallets, sign transactions, and manage capital securely without third-party custodians.
* **AI-Driven Risk Assessment:** Instead of hardcoded `if/else` logic, the agent sends live spread data to LLMs via OpenRouter to analyze slippage, gas fees, and profitability before making an `EXECUTE` or `IGNORE` decision.
* **Omni-Stable Scanner:** Continuously monitors multi-DEX liquidity pools for stablecoin pairs (USDT/USDC, USDT/DAI, USDT/PYUSD) to capture micro-arbitrage opportunities.
* **Automated Capital Compounding:** Reinvests profits autonomously into the WDK-managed capital pool.

## 🛠️ How It Works (The Workflow)
1. **SCAN:** The agent monitors 20+ simulated DEXs/CEXs every 5 seconds for USDT discrepancies.
2. **REASON:** Identifies the maximum spread and prompts the AI Engine (Gemini/Llama via OpenRouter) with potential profit and estimated gas costs.
3. **EXECUTE:** If the AI determines the trade is economically rational (Net Profit > Safe Threshold), it triggers the WDK to sign and broadcast the flash-swap transaction.

## 🧰 Tech Stack
* **Wallet Management:** Tether WDK (`@tetherto/wdk`), `@tetherto/wdk-wallet-evm`
* **AI Engine:** OpenRouter API (Gemini / Llama)
* **Environment:** Node.js, JavaScript, dotenv
* **Network:** Ethereum Sepolia Testnet (RPC Integration)

---

## 📈 The Evolution (DoraHacks Hackathon Journey)
To build a robust AI Agent within the hackathon timeframe, OrcaStrike was developed and completed in three major iterations explicitly for this DoraHacks event:

* **v1.0 (The Foundation):** Successfully integrated `WDK Core` to generate wallets, fetch balances on Sepolia, and prepare the execution layer.
* **v2.0 (The Brain):** Replaced hardcoded trading logic with an LLM Engine (via OpenRouter), enabling the bot to read `gas fees` vs `profit` and autonomously output `EXECUTE` or `IGNORE`.
* **v3.0 (The Omni-Scanner - Current Demo):** Built a high-frequency Terminal UI that simulates scanning 20+ liquidity pools for stablecoin spreads, managing a $1,000 capital pool with compounded returns.

---

## 🗺️ Roadmap: Post-Hackathon Research & Development
The current version (v3.0) serves as our completed Proof of Concept (PoC) for the Tether WDK Hackathon. Following the conclusion of this event, we plan to research and develop the following phases to transition OrcaStrike into a production-ready Mainnet protocol:

### 🔹 Phase 1: Live Market Integration (v4.0)
* **Real-time Oracles:** Replace simulated prices with live data feeds from Binance API and decentralized Oracles (Chainlink).
* **Mempool Scanning:** Implement WebSockets to read pending transactions in the Ethereum Mempool to detect arbitrage opportunities before they are minted.
* **Smart Contract Deployment:** Deploy a custom Solidity Smart Contract to handle atomic swaps (ensuring trades only execute if profitable, reverting otherwise).

### 🔹 Phase 2: Flash Loans & MEV (v5.0)
* **Zero-Capital Arbitrage:** Integrate with Aave or Uniswap V3 Flash Loans to borrow capital instantly, execute arbitrage, repay the loan, and keep the profit using the WDK wallet.
* **MEV Protection:** Implement Flashbots RPC to prevent our transactions from being front-run in the dark forest of Ethereum.

### 🔹 Phase 3: Cross-Chain Expansion (v6.0)
* **Layer 2 Networks:** Expand WDK scanning capabilities to low-fee networks like Arbitrum, Optimism, and Base for high-frequency trading.

---

## 💻 Installation & Setup (For Judges)
Clone the repository and install dependencies:
\`\`\`bash
git clone https://github.com/YOUR_GITHUB_USERNAME/OrcaStrike-AI-Agent.git
cd OrcaStrike-AI-Agent
npm install
\`\`\`

Create a `.env` file in the root directory:
\`\`\`env
SEED_PHRASE="your_12_word_seed_phrase_here"
OPENAI_API_KEY="your_openrouter_api_key_here"
\`\`\`

Run the Agent Terminal:
\`\`\`bash
node agent.js
# Or run start.cmd on Windows for the stylized UI
\`\`\`

## 🏆 Hackathon Target
Built for the **Tether WDK Hackathon on DoraHacks**, specifically targeting the **Agent Wallets (WDK / OpenClaw Integration)** track. OrcaStrike proves that WDK is the perfect financial engine for autonomous AI actors.
