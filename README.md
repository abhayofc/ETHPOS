
# ETHPoS

ETH Point-of-Sale (ETHPoS) is a decentralized application designed to help shopkeepers accept payments in Ethereum. Built with a React and Tailwind CSS frontend, the app leverages Ethereum smart contracts written in Solidity and deployed on the Sepolia Ethereum testnet to provide a secure, decentralized payment solution. ETHPoS enables shopkeepers to generate a QR code for customer payments in ETH, automatically updates transaction status, and supports dynamic currency conversions.

## Features

- **Ethereum Payment Processing**: Facilitates payments in ETH using a smart contract deployed on the Sepolia testnet.
- **QR Code Generation**: Converts payment amounts into a QR code for seamless customer transactions.
- **Real-Time Payment Status**: Automatically updates payment status once transactions are confirmed on the blockchain.
- **Multi-Currency Support**: Accepts payment amount inputs in any currency and converts it to ETH.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Smart Contract**: Solidity
- **Blockchain Network**: Sepolia Ethereum Testnet

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) >= 14.x
- [MetaMask](https://metamask.io/) (or another Ethereum wallet) connected to the Sepolia testnet

## Getting Started

Follow these steps to set up and run the application locally.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ETHPoS.git
cd ETHPoS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root to store environment variables:

```plaintext
REACT_APP_INFURA_PROJECT_ID=your-infura-project-id
REACT_APP_CONTRACT_ADDRESS=your-smart-contract-address
REACT_APP_SEPOLIA_PRIVATE_KEY=your-private-key-for-sepolia
```

### 4. Compile and Deploy Smart Contract (Optional)

If you'd like to redeploy the contract, install [Hardhat](https://hardhat.org/) and use it for deployment.

1. Install Hardhat:

   ```bash
   npm install --save-dev hardhat
   ```

2. Compile and deploy the contract:

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network sepolia
   ```

Copy the deployed contract address and update it in the `.env` file.

### 5. Run the Application

```bash
npm start
```

This command will start the application on `http://localhost:3000`.

## How to Use

1. **Open the ETHPoS App**: Visit `http://localhost:3000` to access the point-of-sale interface.
2. **Enter Payment Amount**: Input the desired amount in any supported currency.
3. **Generate QR Code**: Click "Generate QR Code" to create a QR code representing the ETH amount.
4. **Make Payment**: Customers scan the QR code and complete payment via MetaMask or a compatible wallet.
5. **Payment Confirmation**: Once the payment is confirmed on the Sepolia testnet, the app will automatically update the payment status.

## Smart Contract Overview

The smart contract is written in Solidity and deployed on the Sepolia Ethereum testnet. It handles payment processing, verifying transactions, and storing transaction records.

### Functions

- `generateQRCode(uint256 amount)\`: Generates a QR code for a specified amount.
- `checkPaymentStatus(address shopkeeperAddress)`: Checks if payment is confirmed.
- `updateStatusOnPayment(uint256 transactionId)\`: Updates the transaction status upon confirmation.

## Folder Structure

```
ETHPoS/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── contracts/      # Solidity contract
│   ├── pages/          # Main pages of the app
│   ├── utils/          # Helper functions and utilities
│   └── App.js          # Main React app component
├── .env                # Environment variables
└── README.md
```

## License

This project is licensed under the MIT License.
