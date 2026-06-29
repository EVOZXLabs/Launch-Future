import {

    Topbar

}

from

"../components/topbar.js";

import {

    Workspace

}

from

"../components/workspace.js";

export function renderApp(){

    document.querySelector(

        "#app"

    ).innerHTML =

`

<div id="layout">

${Topbar()}

${Workspace()}

</div>

`;

}
