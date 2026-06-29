// src/config/networks.js

export const NETWORKS = {

    evoz: {

        id: "evoz",

        name: "EVOZ Mainnet",

        chainId: 805,

        chainHex: "0x325",

        symbol: "EVOZ",

        decimals: 18,

        rpc: "https://rpc.evozscan.com",

        explorer: "https://evozscan.com",

        contracts: {

            treasury:
                "0x50Cd30Ff7f0fbBD9d0FDe1F60DE8c52D6F390c5C",

            token:
                "0x62B9559F193d111aF92d9a5604d79024BFB1C847",

            exchange:
                "0x9680B43F695d5245062e59CCA92ad92DE5aed56e",

            deployer:
                "0x3f81E785628D452A8Aae1536D15A3586B490F0c5",

            factory:
                "0xcd86Ca358283f06581365635372E5bF0D30271D3"

        }

    },

    ethereum: {

        id: "ethereum",

        name: "Ethereum",

        chainId: 1,

        chainHex: "0x1",

        symbol: "ETH",

        decimals: 18,

        rpc: "",

        explorer: "",

        contracts: {}

    },

    bsc: {

        id: "bsc",

        name: "BNB Smart Chain",

        chainId: 56,

        chainHex: "0x38",

        symbol: "BNB",

        decimals: 18,

        rpc: "",

        explorer: "",

        contracts: {}

    },

    polygon: {

        id: "polygon",

        name: "Polygon",

        chainId: 137,

        chainHex: "0x89",

        symbol: "POL",

        decimals: 18,

        rpc: "",

        explorer: "",

        contracts: {}

    }

};

export const DEFAULT_NETWORK = "evoz";
