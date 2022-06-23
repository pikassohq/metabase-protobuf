export enum EUserStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'in_active',
  VERIFY_EMAIL = 'verify_email',
  VERIFY_WALLET = 'verify_wallet',
  INIT_USER = 'init_user',
}

export const ETokenTypes = {
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail',
};

export enum EPlayerStatus {
  SIGNUP_EMAIL = 'SIGNUP_EMAIL',
  MISSING_WALLET = 'MISSING_WALLET',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum EQueueEvent {
  // Rinkeby
  RINKEBY_CREATE_PROJECT = 'rinkeby.create_project',
  RINKEBY_CREATE_NFT = 'rinkeby.create_NFT',
  RINKEBY_DEPLOY_ERC721_CONTRACT = 'rinkeby.deploy_erc721_contract',
  RINKEBY_ASSIGN_NFT_TO_PLAYER = 'rinkeby.assign_nft_to_player',

  // Polygon
  POLYGON_CREATE_PROJECT = 'polygon.create_project',
  POLYGON_DEPLOY_ERC721_CONTRACT = 'polygon.deploy_erc721_contract',
  POLYGON_CREATE_NFT = 'polygon.create_NFT',
  POLYGON_ASSIGN_NFT_TO_PLAYER = 'polygon.assign_nft_to_player',

  // BSC
  BSC_CREATE_PROJECT = 'bsct.create_project',
  BSC_DEPLOY_ERC721_CONTRACT = 'bsct.deploy_erc721_contract',
  BSC_CREATE_NFT = 'bsct.create_NFT',
  BSC_ASSIGN_NFT_TO_PLAYER = 'bsct.assign_nft_to_player',

  // ONE
  ONE_CREATE_PROJECT = 'one.create_project',
  ONE_DEPLOY_ERC721_CONTRACT = 'one.deploy_erc721_contract',
  ONE_CREATE_NFT = 'one.create_NFT',
  ONE_ASSIGN_NFT_TO_PLAYER = 'one.assign_nft_to_player',

  // Starknet
  CREATE_STARKNET_PROJECT = 'starknet.create_project',
  CREATE_STARKNET_NFT = 'starknet.create_NFT',
  ASSIGN_STARKNET_NFT = 'starknet.assign_NFT',
  TRANSFER_STARKNET_NFT = 'starknet.transfer_NFT',
  ASSIGN_NFT_NEW_PLAYER = 'starknet.assign_NFT_new_player',
  WITHDRAW_NFT = 'starknet.withdraw_NFT',
  MINT_ON_L1 = 'starknet.mint_on_l1',
  TRANSFER_ON_L1 = 'starknet.transfer_on_l1',
}

export enum EChain {
  STARKNET = 'starknet',
  ETHEREUM = 'ethereum',
  RINKEBY = 'rinkeby',
  ZKSYNC = 'zksync',
  SOLANA = 'solana',
  POLYGON = 'polygon',
  BSCT = 'bsct',
  ONE = 'one',
}

export enum ETokenStatus {
  MINTING = 'minting',
  TRANSFERING = 'transfering',
  SUCCESS = 'success',
  FAILED = 'failed',
  TRANSFER_SUCCESS = 'transfer_success',
  TRANSFER_FAILED = 'transfer_failed',
  WITHDRAWN = 'withdrawn to L1',
}

export enum EProjectStatus {
  CREATING_ACCOUNT = 'creating_account',
  CREATING_ERC721_CONTRACT = 'creating_erc721_contract',
  FAILED = 'failed',
  SUCCESS = 'success',
}

export enum ETransactionStatus {
  WAITING = 'waiting',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}
