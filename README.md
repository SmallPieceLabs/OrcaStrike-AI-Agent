# 🎯 SmallPieceLabs: OrcaStrike AI Agent v5.0

### Dual-Terminal Autonomous HFT & Arbitrage Architecture

![Version](https://img.shields.io/badge/version-5.0_Production-blue)
![Track](https://img.shields.io/badge/Hackathon_Track-Agent_Wallets_(WDK)-success)
![Status](https://img.shields.io/badge/Status-Fully_Operational-brightgreen)

## 📽️ Quick Links & Documentation

* **📄 Technical Pitch (PDF):** [OrcaStrike AI v5.0 Whitepaper](https://github.com/SmallPieceLabs/OrcaStrike-AI-Agent/blob/main/docs/OrcaStrike-AI-v5.0-The-Distributed-Apex-Predator-of-DeFi-Arbitrage.pdf)
* **🎬 Live Demo (YouTube):** [Watch OrcaStrike in Action](https://www.youtube.com/watch?v=WWOe0ohZCA8)

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

## 📈 The Evolution: Architectural Journey to v5.0

Building an enterprise-grade Autonomous Trading Agent within a constrained hackathon timeline required rigorous iterations. The OrcaStrike architecture evolved through five major phases, each meticulously engineered to resolve critical bottlenecks in latency, execution logic, and system scalability.

### 🔹 v1.0: The Foundation (WDK Core Integration)

**Init `agent.js` v1.0 (WDK Foundation):**

* Successfully integrated the Tether Wallet Development Kit (WDK) to initialize a secure, non-custodial wallet environment.
* Established the baseline architectural connection to the Sepolia Testnet, enabling the agent to autonomously fetch and verify on-chain balances without relying on any centralized custody or third-party intermediaries.

### 🔹 v2.0: The Brain (AI Reasoning Engine Integration)

**Feature Update: Integrate AI reasoning engine & WDK execution (v2.0):**

* Seamlessly integrated the OpenRouter API (utilizing the Gemini Flash model) to serve as the core intelligence for autonomous, data-driven trade decision-making.
* Engineered and implemented rigorous profit-versus-gas ratio logic to mathematically validate arbitrage opportunities before any execution is triggered.
* Significantly enhanced the terminal User Interface (UI) by introducing professional, enterprise-grade English logging and comprehensive system status tracking.
* Resolved critical core infrastructure bugs, specifically fixing Node.js exit assertion errors to guarantee uninterrupted stability and continuous uptime on Windows deployment environments.

### 🔹 v3.0: The Prototype (Production Release)

**Release: SmallPieceLabs OrcaStrike AI v3.0 (Production):**

* Officially launched the v3.0 production milestone featuring an expansive 18-node multi-exchange scanning matrix (monitoring 6 major exchanges across 3 core stablecoin pairs).
* Achieved full, end-to-end integration with the proprietary SmallPieceLabs Tactical Execution Engine.
* Enabled real-time, high-fidelity on-chain balance synchronization and autonomous cryptographic transaction signing powered directly by Tether WDK.
* Vastly enhanced the AI reasoning capabilities via Gemini Flash, allowing the agent to perform highly complex, autonomous arbitrage decision-making under volatile market conditions.
* Delivered a fully polished, professional, and production-ready terminal UI complete with standardized, English-only operational logging for international deployability.

### 🔹 v4.0: Live Edition (18-Node Matrix & WDK Core)

🚀 **Finalize monolithic architecture for Hackathon demo:**

* Integrate Tether WDK Core for dynamic ETH gas deduction & non-custodial EVM settlement.
* Expand Omni-Scanner to full 18-Node Matrix (6 Exchanges x 3 Stablecoin pairs).
* Implement Gemini AI JSON reasoning for real-time spread vs gas evaluation.
* Overhaul terminal UI for enterprise-grade HFT observability (100% English).

### 🔹 v4.1.0: Live RPC Integration & Multi-Node Oracle

**Release Updates:**

* Upgraded Orchestration Engine to v4.1.0 (Live Production).
* Integrated real-time on-chain balance fetching for ETH (Gas) and USDT (Capital).
* Implemented live network Gas Price estimation via RPC provider.
* Expanded scanning matrix to 18 nodes (6 exchanges x 3 stablecoin pairs).
* Stabilized Gemini-2.0-Flash reasoning via OpenRouter.
* Full localization of terminal logs to English for international standards.

### 🔹 v5.0: Dual-Terminal Distributed Architecture (The Paradigm Shift)

* **The Critical Bottleneck:** As the 18-Node Matrix scaled, we encountered the fundamental limitation of Node.js's single-threaded Event Loop.
The monolithic architecture was unable to simultaneously handle high-frequency REST API polling while waiting for heavy asynchronous LLM reasoning requests.
This created dangerous latency bottlenecks where AI network delays could block the data aggregation loop, resulting in micro-second blind spots in market monitoring.
* **The Solution:** The architecture was decoupled into two isolated and concurrently running micro-processes:
1. **`orchestrator.js` (The Eye):** A dedicated ultra-low-latency data aggregation engine.
It asynchronously polls Binance REST APIs and RPC providers while rendering the 18-Node Matrix using absolute cursor positioning (`\x1b[2J\x1b[H`).
This ensures a cinematic real-time dashboard that remains completely unblocked by AI processing latency.
2. **`strategist.js` (The Brain):** The core intelligence module that strictly utilizes **Tether WDK Core (`@tetherto/wdk`)** as its mandatory non-custodial wallet provider.
While `ethers.js` acts as a high-speed oracle for real-time blockchain state synchronization, all agent identities, wallet derivation, and transaction signing flows are handled exclusively through WDK.
This guarantees secure autonomous asset management fully aligned with the hackathon’s non-custodial infrastructure requirement.


* **The Result:** Zero data-blocking, maximized CPU thread utilization, and a robust distributed agent ecosystem capable of parallel processing.
By combining WDK's secure wallet infrastructure with a decoupled architecture, **OrcaStrike v5.0** achieves institutional-grade stability and high-performance concurrency.

---

## 🗺️ Roadmap: Post-Hackathon Research & Development (Towards v10.0)

The current v5.0 architecture serves as a highly optimized, functional Proof of Concept (PoC). Following the DoraHacks event, SmallPieceLabs is committed to transitioning OrcaStrike from an experimental agent into a fully autonomous, institutional-grade DeFi execution network.

### 🚀 Phase 1: Mempool Supremacy & Dark Routing (v6.0)

Currently, the agent reacts to post-block data. To achieve true High-Frequency Trading (HFT) dominance, the AI must preempt the market state.

* **WebSocket Mempool Sniping:** We will replace standard REST/HTTP polling with direct WebSocket (WSS) connections to Ethereum/BSC validator nodes. This allows the agent to scan unconfirmed transactions in the mempool, identifying massive swaps (whale movements) that will create arbitrage spreads *milliseconds before* they are officially minted into a block.
* **MEV-Shielded Execution & Toxic Flow Avoidance:** Public mempools are infested with predatory MEV bots conducting sandwich attacks. We will integrate **Flashbots RPC** and private transaction routing. The agent's signed payloads will be sent directly to block builders, guaranteeing zero slippage, bypassing public mempools entirely, and rendering the agent immune to front-running.
* **Atomic Smart Contract Vaults:** Deployment of custom Solidity contracts. Instead of basic EOA transfers, the AI will trigger a smart contract that batches multi-hop swaps (e.g., USDT -> USDC -> DAI -> USDT) in a single, atomic transaction. If the precise mathematically calculated profit margin is not met at the exact millisecond of execution, the entire transaction reverts automatically, costing only a minimal gas base fee.

### 🚀 Phase 2: Zero-Collateral Capital Efficiency (v7.0)

The current model requires locked USDT capital. We will revolutionize the agent's capital efficiency to infinite APY models.

* **Flash Loan Integration (JIT Liquidity):** The AI will be upgraded to autonomously interact with lending protocols like Aave, Balancer, or Uniswap V3 Flash protocols. Upon detecting a profitable spread, the agent will borrow up to $10,000,000 in uncollateralized liquidity, execute the arbitrage, and repay the flash loan within the *exact same block*—keeping the net profit minus the ~0.05% protocol fee, all with zero initial capital risk.
* **Dynamic EIP-1559 Fee Escalation:** We will train the LLM to understand EIP-1559 priority fees dynamically. If a highly lucrative spread is detected, the agent will autonomously calculate and attach the optimal priority fee (bribing the validators) to ensure block inclusion priority over competing MEV bots, essentially automating a bidding war for block space.

### 🚀 Phase 3: The Omni-Chain Intent Ecosystem (v8.0)

Liquidity is highly fragmented across Layer 1s, Layer 2s, and emerging app-chains. OrcaStrike must evolve into an omni-chain apex predator.

* **Layer 2 Native Deployment:** Expanding the execution environment directly onto high-throughput networks like Arbitrum, Optimism, Base, and Monad. Lower gas fees exponentially increase the frequency of profitable micro-arbitrage opportunities that are currently economically unviable on Ethereum Mainnet.
* **Autonomous Intent-Based Bridging:** Integrating interoperability protocols like LayerZero or Wormhole. The AI Strategist will evaluate global yield maps. If it detects a sustained higher APY or severe liquidity imbalance on a different network, it will autonomously formulate an "intent" and bridge its stablecoin reserves across chains to maximize capital deployment efficiency without human intervention.

### 🚀 Phase 4: Decentralized Agentic Swarms (v9.0)

* **Multi-Agent Orchestration:** Evolving from a single Strategist to a complete Swarm Architecture. We will deploy specialized sub-agents running locally:
* **Risk Assessment Agent:** Evaluates smart contract vulnerabilities and honeypot risks.
* **Gas Prediction Agent:** Uses machine learning models to forecast base fee fluctuations.
* **Execution Agent:** Signs and broadcasts the final transaction.
These agents will communicate via localized RPCs, voting and reaching consensus before a single dollar is moved.



### 🚀 Phase 5: Institutional zk-AI Integration (v10.0)

* **Zero-Knowledge Proofs for AI (zkML):** To onboard institutional capital, trust must be mathematically guaranteed. We will implement zkML (Zero-Knowledge Machine Learning) so the agent can generate cryptographic proofs of its AI reasoning. Institutions can verify on-chain that the trade was executed exactly according to the AI's risk parameters without exposing the proprietary weights or prompts of the OrcaStrike model.

---

## 💻 Installation & Setup (v5.0 Dual-Terminal)

To run the OrcaStrike v5.0 architecture locally, follow these steps to initialize both the Omni-Scanner and the AI Strategist.

### 1. Clone the repository & Install Dependencies

```bash
git clone https://github.com/SmallPieceLabs/OrcaStrike-AI-Agent.git
cd OrcaStrike-AI-Agent
npm install

```
