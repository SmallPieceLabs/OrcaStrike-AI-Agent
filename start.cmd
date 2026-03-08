@echo off
title OrcaStrike v5.0 Controller
color 0b

:: ============================================================================
:: ORCASTRIKE v5.0 - DUAL-TERMINAL LAUNCHER
:: This script initializes the OmniScanner (Data) and AI Strategist (Logic).
:: Ensure 'npm install' is run and '.env' is configured before executing.
:: ============================================================================

echo [SYSTEM] Launching OrcaStrike v5.0 Dual-Terminal Architecture...

:: 1. Launch The Eye (18-Node Scanner)
echo [SYSTEM] Booting OmniScanner...
start "OrcaStrike - OmniScanner (The Eye)" node orchestrator.js

:: Wait for 2 seconds to allow the scanner to bind (hiding the countdown text)
timeout /t 2 /nobreak >nul

:: 2. Launch The Brain (AI General)
echo [SYSTEM] Booting AI Strategist...
start "OrcaStrike - AI Strategist (The Brain)" node strategist.js

echo [SYSTEM] All modules online. Closing launcher...
timeout /t 2 >nul
exit
