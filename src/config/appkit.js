// =====================================================
// LaunchFuture
// AppKit Configuration
// =====================================================

import { createAppKit } from "@reown/appkit";

import { EthersAdapter }

from "@reown/appkit-adapter-ethers";

import { defineChain }

from "@reown/appkit/networks";

import {

    PROJECT_ID,

    METADATA

} from "./walletconnect.js";

import {

    NETWORKS

} from "./networks.js";

// =====================================================
// EVOZ
// =====================================================

export const EVOZ = defineChain({

    id:
        NETWORKS.evoz.chainId,

    name:
        NETWORKS.evoz.name,

    caipNetworkId:
        `eip155:${NETWORKS.evoz.chainId}`,

    chainNamespace:
        "eip155",

    nativeCurrency: {

        decimals: 18,

        name: "EVOZ",

        symbol: "EVOZ"

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

            url:

                NETWORKS.evoz.explorer

        }

    }

});

// =====================================================
// Networks
// =====================================================

export const APP_NETWORKS = [

    EVOZ

];

// =====================================================
// Adapter
// =====================================================

export const ethersAdapter =

    new EthersAdapter();

// =====================================================
// Modal
// =====================================================

export const appKit =

    createAppKit({

        adapters: [

            ethersAdapter

        ],

        projectId:

            PROJECT_ID,

        metadata:

            METADATA,

        networks:

            APP_NETWORKS,

        defaultNetwork:

            EVOZ,

        features: {

            analytics: false

        }

    });

// =====================================================
// Export
// =====================================================

export default appKit;
