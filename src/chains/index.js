import {

    NETWORKS

} from "../config/networks.js";

export function getNetwork(

    id

){

    return NETWORKS[id];

}

export function getCurrentNetwork(

    state

){

    return NETWORKS[

        state.network

    ];

}
