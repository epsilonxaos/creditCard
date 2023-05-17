import { useEffect, useState } from "react";
import GtMaps from "./component/GtMaps";
// import * as maptalks from "maptalks";
import * as maptalks from "maptalks/dist/maptalks.es";

function App() {
	const [mapa, setMapa] = useState(false);

	const handlerSetMapa = (mapaInit) => {
		setMapa(mapaInit);
	};

	useEffect(() => {
		if (mapa) {
			var areaTool = new maptalks.AreaTool({
				language: "es-MX",
				symbol: {
					lineColor: "#1bbc9b",
					lineWidth: 2,
					polygonFill: "#fff",
					polygonOpacity: 0.3,
				},
				vertexSymbol: {
					markerType: "ellipse",
					markerWidth: 8,
					markerHeight: 8,
					markerFill: "#000",
					markerLineColor: "#fff",
					markerLineWidth: 2,
				},
				labelOptions: {
					textSymbol: {
						textFaceName: "Barlow",
						textName: "Inicio",
						textSize: 12,
						textFill: "#fff",
						textVerticalAlignment: "right",
						textDx: 15,
					},
					boxStyle: {
						padding: [6, 2],
						symbol: {
							markerType: "square",
							markerFill: "#000",
							markerFillOpacity: 0.9,
							markerLineColor: "#b4b3b3",
						},
					},
				},
				clearButtonSymbol: [
					{
						markerType: "square",
						markerFill: "#000",
						markerLineColor: "#b4b3b3",
						markerLineWidth: 2,
						markerWidth: 15,
						markerHeight: 15,
						markerDx: 2,
					},
					{
						markerType: "x",
						markerWidth: 10,
						markerHeight: 10,
						markerLineColor: "#fff",
						markerDx: 2,
					},
				],
			}).addTo(mapa);

			areaTool.on("drawend", function (param) {
				console.log("%c >>> param  ", "background: #00c49a; color: #ffffff; font-weight: bold");
				console.log(param);
			});
		}
	});

	return (
		<>
			<GtMaps mapa={mapa} handlerSetMapa={handlerSetMapa} />
		</>
	);
}

export default App;
