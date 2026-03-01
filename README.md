# 🎯 SmallPieceLabs: OrcaStrike AI Agent v3.0
### Autonomous WDK-Powered Arbitrage Engine

![Version](https://img.shields.io/badge/version-3.0_Production-blue)
![Track](https://img.shields.io/badge/Hackathon_Track-Agent_Wallets_(WDK)-success)
![Status](https://img.shields.io/badge/Status-Fully_Operational-brightgreen)

## 💡 Overview
**OrcaStrike AI** is an autonomous, high-frequency Trading Agent developed by **SmallPieceLabs**. It is specifically designed to hunt for low-risk stablecoin arbitrage opportunities across omni-chain liquidity pools.

By integrating **Tether's Wallet Development Kit (WDK)** for secure, non-custodial asset management and **OpenRouter AI (Gemini Flash-001)** for real-time economic reasoning, OrcaStrike represents the next generation of Web3 Autonomous Agents. It bridges the gap between AI's analytical power and decentralized finance's execution layer.

## 🚀 Key Features
* **WDK Core Integration:** Fully utilizes `@tetherto/wdk` and `@tetherto/wdk-wallet-evm` to generate non-custodial wallets, sign transactions, and manage capital securely without third-party custodians on Sepolia Testnet.
* **AI-Driven Risk Assessment:** Instead of hardcoded logic, the agent sends live matrix data to LLMs via OpenRouter (Gemini Flash) to analyze slippage, gas fees, and profitability before making an `EXECUTE` or `IGNORE` decision.
* **18-Node Omni-Scanner:** Continuously monitors a matrix of **6 major exchanges** (Binance, Bybit, OKX, Uniswap, Curve, Pancake) and **3 stablecoin pairs** (USDT/USDC, USDT/DAI, USDT/PYUSD) to capture micro-arbitrage opportunities.
* **Automated Capital Compounding:** Reinvests profits autonomously into the WDK-managed capital pool, with real-time visual tracking in the terminal.
* **Professional Terminal UI:** Features a branded SmallPieceLabs dashboard with high-density data feeds and real-time gas reserve monitoring.

## 🛠️ How It Works (The Workflow)
1. **SCAN:** The agent monitors **18 liquidity nodes** every 5 seconds for price discrepancies.
2. **REASON:** Identifies the maximum spread and prompts the SmallPieceLabs AI Engine with potential profit and estimated gas costs.
3. **EXECUTE:** If the AI determines the trade is economically rational (Net Profit > Threshold), it triggers the WDK to sign and broadcast the transaction.

## 🧰 Tech Stack
* **Wallet Management:** Tether WDK (`@tetherto/wdk`), `@tetherto/wdk-wallet-evm`
* **AI Engine:** OpenRouter API (Gemini-Flash-001)
* **Environment:** Node.js, JavaScript, dotenv
* **Network:** Ethereum Sepolia Testnet (RPC Integration)

---

## 📈 The Evolution (DoraHacks Hackathon Journey)
To build a robust AI Agent within the hackathon timeframe, OrcaStrike was developed and completed in three major iterations by **SmallPieceLabs**:

* **v1.0 (The Foundation):** Successfully integrated `WDK Core` to generate wallets and fetch balances on Sepolia.
* **v2.0 (The Brain):** Replaced hardcoded trading logic with an LLM Engine (via OpenRouter), enabling autonomous `EXECUTE` decisions.
* **v3.0 (The Omni-Scanner):** Finalized the production-ready Terminal UI with an 18-node matrix scanner and real-time WDK balance syncing.

---

## 🗺️ Roadmap: Post-Hackathon Research & Development
The current v3.0 serves as our completed Proof of Concept (PoC). Following the event, we plan to transition into a production-ready protocol:

### 🔹 Phase 1: Live Market Integration (v4.0)
* **Real-time Oracles:** Replace simulated prices with live data feeds from Binance API and Chainlink.
* **Mempool Scanning:** Implement WebSockets to detect arbitrage opportunities before they are minted.
* **Smart Contract Deployment:** Custom Solidity contracts to handle atomic swaps.

### 🔹 Phase 2: Flash Loans & MEV (v5.0)
* **Zero-Capital Arbitrage:** Integrate with Aave/Uniswap Flash Loans to borrow capital instantly using the WDK wallet.
* **MEV Protection:** Implement Flashbots RPC to prevent front-running.

### 🔹 Phase 3: Cross-Chain Expansion (v6.0)
* **L2 Expansion:** Expand WDK capabilities to Arbitrum, Optimism, and Base for lower fees.

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/SmallPieceLabs/OrcaStrike-AI-Agent.git](https://github.com/SmallPieceLabs/OrcaStrike-AI-Agent.git)
   cd OrcaStrike-AI-Agent


