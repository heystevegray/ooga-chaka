<div align="center">
<br />
<br />
<h1>ooga-chaka</h1>
<p>A collection of my custom React Hooks</p>
<a href="https://www.npmjs.com/package/ooga-chaka">
<img src="https://img.shields.io/npm/v/ooga-chaka" alt="npm package" />
</a>
<a href="https://www.npmjs.com/package/ooga-chaka">
<img src="https://img.shields.io/npm/dt/ooga-chaka" alt="npm downloads" />
</a>
</div>

- [Installation](#installation)
- [Hooks](#hooks)
  - [Window Events](#window-events)
    - [`useOnlineStatus`](#useonlinestatus)
  - [Document](#document)
    - [`useStyleSheets`](#usestylesheets)
  - [Utility](#utility)
    - [`useRandomBetween`](#userandombetween)

# Installation

<pre align="center">npm install <a href="https://www.npmjs.com/package/ooga-chaka">ooga-chaka</a></pre>

# Hooks

## Window Events

### [`useOnlineStatus`](https://github.com/heystevegray/ooga-chaka/wiki/useOnlineStatus)

A React Hook that subscribes to `window` [online](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event) and [offline](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event) events.

## Document

### [`useStyleSheets`](https://github.com/heystevegray/ooga-chaka/wiki/useStyleSheets)

A React Hook that disables or enables all [CSS stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) in your application.

## Utility

### [`useRandomBetween`](https://github.com/heystevegray/ooga-chaka/wiki/useRandomBetween)

A React Hook that returns a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) between the specified `min` and `max` values.
