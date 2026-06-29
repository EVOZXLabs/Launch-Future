export function renderApp() {

    document.querySelector(

        "#app"

    ).innerHTML =

`
<div id="layout">

<header id="topbar">

<div class="brand">

<h1>

LaunchFuture

</h1>

<p>

Professional Multichain Launch Platform

</p>

</div>

<div class="topbarActions">

<button

id="networkButton">

EVOZ Mainnet

</button>

<button

id="connectWalletButton">

Connect Wallet

</button>

</div>

</header>

<main id="workspace">

<section id="wizardPanel">

<h2>

Welcome

</h2>

<p>

Select a network and connect your wallet to begin creating your token.

</p>

</section>

<aside id="previewPanel">

<h3>

Live Preview

</h3>

<p>

Waiting for project information...

</p>

</aside>

</main>

</div>
`;

}
