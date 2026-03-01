@echo off
:: Set the Terminal Title to match your brand
title SmallPieceLabs - OrcaStrike AI v3.0 Terminal
:: Optimized window size: 110 columns x 35 lines to fit the 18-node matrix
mode con: cols=110 lines=35
:: Professional Theme: 0b (Aqua on Black) for a high-tech trading look
color 0b

echo =======================================================
echo    [///] SMALLPIECELABS - AGENT BOOT SEQUENCE
echo    Initializing OrcaStrike AI Production Engine v3.0...
echo =======================================================
echo.

:: Automatic environment check
if not exist node_modules (
    echo [SYSTEM] Local dependencies missing. Running 'npm install'...
    npm install
)

:: Execute the Production Agent
node agent.js

echo.
echo =======================================================
echo    [!] AGENT PROCESS TERMINATED BY SYSTEM
echo =======================================================
pause
