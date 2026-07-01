// ======================================================
// LaunchFuture
// Reown AppKit Configuration
// ======================================================

import { createAppKit } from "@reown/appkit";

import { EthersAdapter } from "@reown/appkit-adapter-ethers";

import { defineChain } from "@reown/appkit/networks";

import {

    PROJECT_ID,
    METADATA

} from "./walletconnect.js";

import { NETWORKS } from "./networks.js";

// ======================================================
// EVOZ Network
// ======================================================

export const EVOZ = defineChain({

    id: NETWORKS.evoz.chainId,

    name: NETWORKS.evoz.name,

    chainNamespace: "eip155",

    caipNetworkId: `eip155:${NETWORKS.evoz.chainId}`,

    nativeCurrency: {

        name: NETWORKS.evoz.symbol,

        symbol: NETWORKS.evoz.symbol,

        decimals: NETWORKS.evoz.decimals

    },

    rpcUrls: {

        default: {

            http: [

                NETWORKS.evoz.rpc

            ]

        }

    },

    blockExplorers: {

        default: {

            name: "EVOZ Explorer",

            url: NETWORKS.evoz.explorer

        }

    }

});

// ======================================================
// Adapter
// ======================================================

export const ethersAdapter =
    new EthersAdapter();

// ======================================================
// Networks
// ======================================================

export const APP_NETWORKS = [

    EVOZ

];

// ======================================================
// AppKit
// ======================================================

export const appKit =
    createAppKit({

        projectId:

            PROJECT_ID,

        metadata:

            METADATA,

        adapters: [

            ethersAdapter

        ],

        networks:

            APP_NETWORKS,

        defaultNetwork:

            EVOZ,

        enableWalletConnect:

            true,

        enableInjected:

            true,

        enableCoinbase:

            false,

        features: {

            analytics:

                false

        }

    });

// ======================================================
// Exports
// ======================================================

export {

    createAppKit,

    EthersAdapter

};

export default appKit;
