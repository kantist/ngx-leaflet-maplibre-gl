# @dvina/ngx-leaflet-maplibre-gl

> Leaflet Maplibre extension to the @asymmetrik/ngx-leaflet package for Angular.io
> Provides Leaflet Maplibre integration into Angular projects. Compatible with Leaflet v1.x and Leaflet @maplibre/maplibre-gl-leaflet

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [API](#api)
-   [Contribute](#contribute)
-   [License](#license)
-   [Credits](#credits)

## Install

Install the package and its peer dependencies via npm (or yarn):

```shell
npm install leaflet
npm install maplibre-gl
npm install @maplibre/maplibre-gl-leaflet
npm install @dvina/ngx-leaflet-maplibre-gl
```

If you intend to use this library in a typescript project (utilizing the typings), you will need to also install the leaflet typings via npm:

```shell
npm install --save-dev @types/leaflet
```

## Usage

### Import Code Dependencies and Module

This project is exported using UMD and it includes typings.
So, you shouldn't have to do anything special to use it if you're building your project in Typescript.

#### Typescript Angular.io Module Import

Before you can use the module in your Angular.io app, you'll need to import it in your application.
Note that you also need to import the ngx-leaflet module as well.

For example, in your `app.module.ts`, add:

```js
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMaplibreGlModule } from '@dvina/ngx-leaflet-maplibre-gl';

...
imports: [
	...
	LeafletModule,
	LeafletMaplibreGlModule
]
...
```

### Create and Configure a Map with the Geoman

To create a map, use the `leaflet` attribute directive in app. This directive must appear init before using `leafletMaplibreGl` directive.

```html
<div leaflet leafletMaplibreGl></div>
```
