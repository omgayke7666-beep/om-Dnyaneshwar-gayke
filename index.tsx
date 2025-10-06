import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const input = prompt("Enter your investment in USD:");
  const entryPrice = prompt("Enter Entry Price (USD):");
  const exitPrice = prompt("Enter Exit Price (USD):");
  const leverage = prompt("Enter Leverage (e.g. 10):");
  const fxRate = prompt("Enter USD to INR rate (e.g. 83):");

  const invest = parseFloat(input);
  const entry = parseFloat(entryPrice);
  const exit = parseFloat(exitPrice);
  const lev = parseFloat(leverage);
  const fx = parseFloat(fxRate);

  const profitUSD = ((exit - entry) / entry) * invest * lev;
  const profitINR = profitUSD * fx;

  const message = `
  🪙 OM CRYPTO CALCULATOR 2025 🪙
  Investment: $${invest}
  Entry Price: $${entry}
  Exit Price: $${exit}
  Leverage: ${lev}x
  -------------------------
  Profit: $${profitUSD.toFixed(2)} 
  Profit in INR: ₹${profitINR.toFixed(2)}
  `;

  alert(message);
  return message;
}

main();
