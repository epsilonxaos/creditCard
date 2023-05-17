import { useEffect } from "react";
import * as maptalks from "maptalks/dist/maptalks";

const GtMaps = ({ mapa, handlerSetMapa }) => {
	const configMap = {
		center: [-0.113049, 51.498568],
		zoom: 14,
		baseLayer: new maptalks.TileLayer("base", {
			urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
			subdomains: ["a", "b", "c", "d"],
			attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
		}),
		locale: "es",
	};

	useEffect(() => {
		if (!mapa) {
			handlerSetMapa(new maptalks.Map("map", configMap));
		}
	}, []);

	return (
		<>
			<div id="map" style={{ height: "100vh" }}></div>
		</>
	);
};

export default GtMaps;
