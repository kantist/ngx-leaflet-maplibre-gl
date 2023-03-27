import * as L from 'leaflet';

declare module 'leaflet' {
	function maplibreGL(options: any): any;
}
