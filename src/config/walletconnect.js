// =====================================================
// LaunchFuture
// WalletConnect Configuration
// =====================================================

import { NETWORKS } from "./networks.js";

// =====================================================
// Project
// =====================================================

export const PROJECT_ID =
    "b3638c2c0b3054eab331f253f336ac11";

// =====================================================
// Application Metadata
// =====================================================

export const METADATA = {

    name:
        "LaunchFuture",

    description:
        "Professional Multichain Launch Platform",

    url:
        "https://evozxlabs.github.io/Launch-Future/",

    icons: [

        "https://evozxlabs.github.io/Launch-Future/assets/logo.png"

    ]

};

// =====================================================
// Default Network
// =====================================================

export const DEFAULT_NETWORK =

    NETWORKS.evoz;

// =====================================================
// Supported Networks
// =====================================================

export const SUPPORTED_NETWORKS = [

    NETWORKS.evoz,

    NETWORKS.ethereum,

    NETWORKS.bsc,

    NETWORKS.polygon

];

// =====================================================
// Helpers
// =====================================================

export function getSupportedNetworks(){

    return SUPPORTED_NETWORKS;

}

export function getDefaultNetwork(){

    return DEFAULT_NETWORK;

}

export function getProjectId(){

    return PROJECT_ID;

}

export function getMetadata(){

    return METADATA;

}

export function findNetworkById(

    id

){

    return SUPPORTED_NETWORKS.find(

        network =>

            network.id === id

    );

}

export function findNetworkByChainId(

    chainId

){

    return SUPPORTED_NETWORKS.find(

        network =>

            network.chainId === chainId

    );

}

export function isSupportedChain(

    chainId

){

    return (

        findNetworkByChainId(

            chainId

        ) !== undefined

    );

}
