// =====================================================
// LaunchFuture
// WalletConnect Configuration
// =====================================================

import { NETWORKS } from "./networks.js";

export const PROJECT_ID =
    "b3638c2c0b3054eab331f253f336ac11";

export const APP_METADATA = {

    name:
        "LaunchFuture",

    description:
        "Professional Multichain Launch Platform",

    url:
        "https://evozxlabs.github.io/Launch-Future/",

    icons: [

        "https://evozxlabs.github.io/Launch-Future/logo.png"

    ]

};

export const SUPPORTED_NETWORKS = [

    NETWORKS.evoz,

    NETWORKS.ethereum,

    NETWORKS.bsc,

    NETWORKS.polygon

];

export const DEFAULT_NETWORK =
    NETWORKS.evoz;

export function getSupportedChainIds(){

    return SUPPORTED_NETWORKS.map(

        network =>

            network.chainId

    );

}

export function getNetworkById(

    id

){

    return SUPPORTED_NETWORKS.find(

        network =>

            network.id === id

    );

}

export function getNetworkByChainId(

    chainId

){

    return SUPPORTED_NETWORKS.find(

        network =>

            network.chainId === chainId

    );

}

export function isSupportedNetwork(

    chainId

){

    return getSupportedChainId(

        chainId

    ) !== undefined;

}

function getSupportedChainId(

    chainId

){

    return SUPPORTED_NETWORKS.find(

        network =>

            network.chainId === chainId

    );

}
