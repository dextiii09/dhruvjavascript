// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, creator, description, dateCreated) {
  const nft = {
    name: name,
    creator: creator,
    description: description,
    dateCreated: dateCreated
  };

  nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log(`NFT #${index + 1}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Creator: ${nft.creator}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Date Created: ${nft.dateCreated}`);
    console.log('----------------------');
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}

// Call your functions below this line
mintNFT("NFT 1", "Creator A", "This is the first NFT", "2023-06-01");
mintNFT("NFT 2", "Creator B", "This is the second NFT", "2023-06-02");
mintNFT("NFT 3", "Creator C", "This is the third NFT", "2023-06-03");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
