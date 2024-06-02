let nfts = [];

function mintNFT(name, creator, description, dateCreated) {
  const nft = {
    name: name,
    creator: creator,
    description: description,
    dateCreated: dateCreated
  };

  nfts.push(nft);
}

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

function getTotalSupply() {
  return nfts.length;
}

mintNFT("NFT 1", "Creator A", "This is the first NFT", "2023-06-01");
mintNFT("NFT 2", "Creator B", "This is the second NFT", "2023-06-02");
mintNFT("NFT 3", "Creator C", "This is the third NFT", "2023-06-03");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
