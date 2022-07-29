export enum Role {
  User = 'user',
  Admin = 'admin',
}

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

export enum EAdminQueueEvent {
  ADMIN_DEPLOY_CONTRACT = 'deploy_erc721_contract',
  ADMIN_TRANSFER_TOKEN = 'transfer_native_token',
}

export enum EQueueEvent {
  // Rinkeby
  RINKEBY_CREATE_PROJECT = 'rinkeby.create_project',
  RINKEBY_CREATE_COLLECTION = 'rinkeby.create_collection',
  RINKEBY_CREATE_NFT = 'rinkeby.create_NFT',
  RINKEBY_CREATE_NFT_1155 = 'rinkeby.create_NFT_1155',
  RINKEBY_DEPLOY_ERC721_CONTRACT = 'rinkeby.deploy_erc721_contract',
  RINKEBY_DEPLOY_ERC1155_CONTRACT = 'rinkeby.deploy_erc1155_contract',
  RINKEBY_ASSIGN_NFT_TO_PLAYER = 'rinkeby.assign_nft_to_player',
  RINKEBY_ASSIGN_NFTS_TO_PLAYER = 'rinkeby.assign_nfts_to_player',
  RINKEBY_ASSIGN_NFT_1155_TO_PLAYER = 'rinkeby.assign_nft_1155_to_player',
  RINKEBY_ASSIGN_NFTS_1155_TO_PLAYER = 'rinkeby.assign_nfts_1155_to_player',
  RINKEBY_BUY_PREPARE = 'rinkeby.buy_prepare',
  RINKEBY_SELL_PREPARE = 'rinkeby.sell_prepare',

  // Polygon
  POLYGON_CREATE_PROJECT = 'polygon.create_project',
  POLYGON_DEPLOY_ERC721_CONTRACT = 'polygon.deploy_erc721_contract',
  POLYGON_CREATE_NFT = 'polygon.create_NFT',
  POLYGON_CREATE_NFT_1155 = 'polygon.create_NFT_1155',
  POLYGON_ASSIGN_NFT_TO_PLAYER = 'polygon.assign_nft_to_player',
  POLYGON_ASSIGN_NFT_1155_TO_PLAYER = 'polygon.assign_nft_1155_to_player',
  POLYGON_ASSIGN_NFTS_TO_PLAYER = 'polygon.assign_nft_to_player',
  POLYGON_ASSIGN_NFTS_1155_TO_PLAYER = 'polygon.assign_nft_to_player',

  // BSC
  BSC_CREATE_PROJECT = 'bsct.create_project',
  BSC_DEPLOY_ERC721_CONTRACT = 'bsct.deploy_erc721_contract',
  BSC_CREATE_NFT = 'bsct.create_NFT',
  BSC_CREATE_NFT_1155 = 'bsct.create_NFT_1155',
  BSC_ASSIGN_NFT_TO_PLAYER = 'bsct.assign_nft_to_player',
  BSC_ASSIGN_NFTS_TO_PLAYER = 'bsct.assign_nfts_to_player',
  BSC_ASSIGN_NFT_1155_TO_PLAYER = 'bsct.assign_nft_1155_to_player',
  BSC_ASSIGN_NFTS_1155_TO_PLAYER = 'bsct.assign_nfts_1155_to_player',

  // ONE
  ONE_CREATE_PROJECT = 'one.create_project',
  ONE_DEPLOY_ERC721_CONTRACT = 'one.deploy_erc721_contract',
  ONE_CREATE_NFT = 'one.create_NFT',
  ONE_CREATE_NFT_1155 = 'one.create_NFT_1155',
  ONE_ASSIGN_NFT_TO_PLAYER = 'one.assign_nft_to_player',
  ONE_ASSIGN_NFT_1155_TO_PLAYER = 'one.assign_nft_1155_to_player',
  ONE_ASSIGN_NFTS_TO_PLAYER = 'one.assign_nfts_to_player',
  ONE_ASSIGN_NFTS_1155_TO_PLAYER = 'one.assign_nfts_1155_to_player',

  // Starknet
  CREATE_STARKNET_PROJECT = 'starknet.create_project',
  CREATE_STARKNET_NFT = 'starknet.create_NFT',
  ASSIGN_STARKNET_NFT = 'starknet.assign_NFT',
  TRANSFER_STARKNET_NFT = 'starknet.transfer_NFT',
  ASSIGN_NFT_NEW_PLAYER = 'starknet.assign_NFT_new_player',
  WITHDRAW_NFT = 'starknet.withdraw_NFT',
  MINT_ON_L1 = 'starknet.mint_on_l1',
  TRANSFER_ON_L1 = 'starknet.transfer_on_l1',

  // Solana
  SOLANA_CREATE_PROJECT = 'solana.create_project',
  SOLANA_CREATE_NFT = 'solana.create_NFT',
  SOLANA_CREATE_NFT_1155 = 'solana.create_NFT_1155',
  SOLANA_ASSIGN_NFT_TO_PLAYER = 'solana.assign_nft_to_player',
  SOLANA_ASSIGN_NFT_1155_TO_PLAYER = 'solana.assign_nft_1155_to_player',
  SOLANA_ASSIGN_NFTS_TO_PLAYER = 'solana.assign_nfts_to_player',
  SOLANA_ASSIGN_NFTS_1155_TO_PLAYER = 'solana.assign_nfts_1155_to_player',

  // Offchain
  OFFCHAIN_CREATE_PROJECT = 'offchain.create_project',
  OFFCHAIN_CREATE_NFT = 'offchain.create_NFT',
  OFFCHAIN_BUY_PREPARE = 'offchain.buy_prepare',
  OFFCHAIN_SELL_PREPARE = 'offchain.sell_prepare',
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
  OFFCHAIN = 'offchain',
}

export enum Category {
  ART = 'art',
  COLLECTIBLE = 'collectible',
}

export enum ETokenStatus {
  CREATED = 'created',
  DELETED = 'deleted',
  CREATE_OFF_CHAIN = 'create_off_chain',
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

export enum CollectionStatus {
  COLLECTION_CREATING = 'collection_creating',
  COLLECTION_UPDATING_MASTER_ACCOUNT = 'collection_updating_master_account',
  COLLECTION_CREATED_OFF_CHAIN = 'collection_created_off_chain',
  COLLECTION_DEPLOYING_CONTRACT = 'collection_deploying_contract',
  COLLECTION_CREATED_ON_CHAIN = 'colleciton_created_on_chain',
  COLLECTION_INACTIVE = 'collection_inactive',
}

export enum ETransactionGroupStatus {
  WAITING_FOR_PAYMENT = 'waiting_for_payment',
  PAYMENT_CREATED = 'payment_created',
  PAYMENT_SUCCESS = 'payment_success',
  PAYMENT_CANCEL = 'payment_cancel',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum ETransactionStatus {
  WAITING_FOR_CONFIRMATION = 'waiting_for_confirmation',
  LOCK = 'lock',
  INQUEUE = 'inqueue',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum ENftType {
  ERC721 = 'erc721',
  ERC1155 = 'erc1155',
}
