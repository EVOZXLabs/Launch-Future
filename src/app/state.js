import {

    DEFAULT_NETWORK

} from "../config/networks.js";

export const state = {

    network:

        DEFAULT_NETWORK,

    wallet: {

        connected: false,

        address: null,

        provider: null,

        signer: null

    },

    deployment: {

        fee: null,

        gas: null,

        result: null

    }

};
