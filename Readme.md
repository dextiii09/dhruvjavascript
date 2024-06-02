# NFT Minting Project

This project allows you to create and manage NFTs (Non-Fungible Tokens) with metadata such as name, creator, description, and creation date.

## Description

This project provides a simple way to mint NFTs, list their metadata, and get the total number of NFTs minted. Each NFT is represented as an object with metadata properties, and the collection of NFTs is stored in an array.

## Getting Started

### Installing

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/nft-minting-project.git
    cd javascriptproject.js
    ```

2. **Ensure you have Node.js installed:**
   
    You can download Node.js from [here](https://nodejs.org/).

### Executing the Program

1. **Open your terminal and navigate to the project directory.**
2. **Run the following command to execute the program:**

    ```bash
    node nft_minting.js
    ```

### Example Usage

You can mint new NFTs and list them as follows:

```javascript
mintNFT("NFT 1", "Creator A", "This is the first NFT", "2023-06-01");
mintNFT("NFT 2", "Creator B", "This is the second NFT", "2023-06-02");
mintNFT("NFT 3", "Creator C", "This is the third NFT", "2023-06-03");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
