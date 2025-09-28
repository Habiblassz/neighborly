export type MarkerData = {
	lat: number;
	lng: number;
	type: "pothole" | "streetlight" | "waste";
	title: string;
};

// Leaflet instance types
export interface LeafletMapInstance {
	setView: (center: [number, number], zoom: number) => LeafletMapInstance;
	remove: () => void;
	on: (event: string, callback: (event: LeafletEvent) => void) => void; // Added 'on' method
}

export interface LeafletMarkerInstance {
	addTo: (map: LeafletMapInstance) => LeafletMarkerInstance;
	bindPopup: (content: string) => LeafletMarkerInstance;
	setLatLng: (latlng: [number, number]) => void;
}

export interface LeafletEvent {
	latlng: {
		lat: number;
		lng: number;
	};
}

// Fixed Leaflet module type
export interface LeafletModule {
	map: (element: HTMLElement) => LeafletMapInstance;
	tileLayer: (
		url: string,
		options?: { attribution?: string }
	) => { addTo: (map: LeafletMapInstance) => void };
	marker: (
		latlng: [number, number],
		options?: { icon?: any; draggable?: boolean }
	) => LeafletMarkerInstance;
	divIcon: (options: {
		className?: string;
		html?: string;
		iconSize?: [number, number];
	}) => any;
	Icon: {
		Default: {
			prototype: {
				_getIconUrl?: string;
			};
			mergeOptions: (options: any) => void;
		};
	};
}

// For dynamic imports that have a default property
export interface LeafletModuleWithDefault {
	default: LeafletModule;
}

// Feather icons module type
export interface FeatherIconsModule {
	replace: () => void;
}

export interface FeatherIconsModuleWithDefault {
	default: FeatherIconsModule;
}
