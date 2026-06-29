// =====================================================
// LaunchFuture
// Wallet Engine
// =====================================================

import { state } from "../app/state.js";

// =====================================================
// Wallet State
// =====================================================

export function isConnected() {

    return state.wallet.connected;

}

export function getAccount() {

    return state.wallet.address;

}

export function getProvider() {

    return state.wallet.provider;

}

export function getSigner() {

    return state.wallet.signer;

}

export function getChainId() {

    return state.wallet.chainId;

}

export function getBalance() {

    return state.wallet.balance;

}

// =====================================================
// Wallet Update
// =====================================================

export function setProvider(

    provider

) {

    state.wallet.provider =

        provider;

}

export function setSigner(

    signer

) {

    state.wallet.signer =

        signer;

}

export function setAccount(

    address

) {

    state.wallet.address =

        address;

}

export function setChainId(

    chainId

) {

    state.wallet.chainId =

        chainId;

}

export function setBalance(

    balance

) {

    state.wallet.balance =

        balance;

}

export function setConnected(

    connected

) {

    state.wallet.connected =

        connected;

}

// =====================================================
// Connect
// =====================================================

export function connect(

    data

) {

    state.wallet.connected =

        true;

    state.wallet.provider =

        data.provider;

    state.wallet.signer =

        data.signer;

    state.wallet.address =

        data.address;

    state.wallet.chainId =

        data.chainId;

    state.wallet.balance =

        data.balance ?? "0";

}

// =====================================================
// Disconnect
// =====================================================

export function disconnect() {

    state.wallet.connected =

        false;

    state.wallet.provider =

        null;

    state.wallet.signer =

        null;

    state.wallet.address =

        null;

    state.wallet.chainId =

        null;

    state.wallet.balance =

        "0";

}

// =====================================================
// Helpers
// =====================================================

export function shortAddress(

    address

) {

    if (

        !address

    ) {

        return "-";

    }

    return (

        address.slice(

            0,

            6

        )

        +

        "..."

        +

        address.slice(

            -4

        )

    );

}

export function isCorrectChain(

    expectedChainId

) {

    return (

        state.wallet.chainId ===

        expectedChainId

    );

}
