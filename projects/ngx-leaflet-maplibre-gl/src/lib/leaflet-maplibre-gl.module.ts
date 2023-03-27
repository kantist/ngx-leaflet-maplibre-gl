/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LeafletMaplibreGlDirective } from './core/leaflet-maplibre-gl.directive';

@NgModule({
	imports: [LeafletModule],
	exports: [LeafletMaplibreGlDirective],
	declarations: [LeafletMaplibreGlDirective],
})
export class LeafletMaplibreGlModule {}
