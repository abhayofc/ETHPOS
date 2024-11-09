// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract ETHPay {
    // Constructor to set the contract owner
 
   address public shopOwner;
   mapping(address => Shopkeeper) public shopkeepers;


    struct Shopkeeper{
        address walletAddress;
        string shopName;
        bool isRegistered;
    }

    // connect wallet

    function registerShop(string memory _shopName) public {

        shopkeepers[msg.sender] = Shopkeeper({
            walletAddress:msg.sender,
            shopName:_shopName,
            isRegistered:true
        });
        shopOwner = msg.sender;
    }
    
    function getShopName(address _owner) public {
        
    }


    


    
}
