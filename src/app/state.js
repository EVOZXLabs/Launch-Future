// =====================================================
// LaunchFuture
// Global State
// =====================================================

import {

    DEFAULT_NETWORK

} from "../config/networks.js";

export const state = {

    app: {

        initialized: false,

        loading: false

    },

    network:

        DEFAULT_NETWORK,

    wallet: {

        connected: false,

        address: null,

        provider: null,

        signer: null,

        chainId: null,

        balance: "0",

        walletName: null

    },

    deployment: {

        fee: null,

        gas: null,

        txHash: null,

        contractAddress: null,

        result: null

    },

    token: {},

    metadata: {},

    features: {}

};
