// =====================================================
// LaunchFuture
// Contract Registry
// =====================================================

export const CONTRACTS = {

    evoz: {

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

    },

    ethereum: {},

    bsc: {},

    polygon: {}

};

export function getContracts(

    network

){

    return CONTRACTS[

        network

    ];

}

export function getFactory(

    network

){

    return CONTRACTS[

        network

    ].factory;

}

export function getExchange(

    network

){

    return CONTRACTS[

        network

    ].exchange;

}

export function getToken(

    network

){

    return CONTRACTS[

        network

    ].token;

}

export function getTreasury(

    network

){

    return CONTRACTS[

        network

    ].treasury;

}
