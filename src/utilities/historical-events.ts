import type { EventProperties } from "../interfaces/EventProperties";

//
// Liste des événements historiques organisés par région.
//
export const eventsByRegion: Record<string, EventProperties[]> = {
	"Europe & General": [
		{ label: "Moon landing (1969-07-20)", date: "1969-07-20T20:17" },
		{
			label: "Fall of the Berlin Wall (1989-11-09)",
			date: "1989-11-09T00:00"
		},
		{
			label: "First powered flight (1903-12-17)",
			date: "1903-12-17T10:35"
		},
		{
			label: "Start of World War II (1939-09-01)",
			date: "1939-09-01T00:00"
		},
		{
			label: "Magna Carta signed (1215-06-15)",
			date: "1215-06-15T00:00"
		},
		{
			label: "Printing press invented (1440-01-01)",
			date: "1440-01-01T00:00"
		},
		{
			label: "Declaration of Independence USA (1776-07-04)",
			date: "1776-07-04T00:00"
		},
		{
			label: "French Revolution begins (1789-07-14)",
			date: "1789-07-14T00:00"
		},
		{
			label: "Fall of Constantinople (1453-05-29)",
			date: "1453-05-29T00:00"
		}
	],
	"Africa": [
		{
			label: "Great Zimbabwe construction begins (~1100)",
			date: "1100-01-01T00:00"
		},
		{
			label: "Mali Empire peak (Mansa Musa, 1312)",
			date: "1312-01-01T00:00"
		},
		{
			label: "Apartheid ends in South Africa (1994)",
			date: "1994-04-27T00:00"
		}
	],
	"Asia": [
		{
			label: "Invention of paper (China, 105 AD)",
			date: "0105-01-01T00:00"
		},
		{ label: "Mongol Empire founded (1206)", date: "1206-01-01T00:00" },
		{
			label: "Meiji Restoration (Japan, 1868)",
			date: "1868-01-03T00:00"
		}
	],
	"South America": [
		{
			label: "Machu Picchu built (Inca Empire, 1450)",
			date: "1450-01-01T00:00"
		},
		{
			label: "Independence of Brazil (1822)",
			date: "1822-09-07T00:00"
		},
		{
			label: "End of the Mayan calendar (2012-12-21)",
			date: "2012-12-21T11:11"
		}
	],
	"Middle East": [
		{
			label: "Birth of Prophet Muhammad (~570)",
			date: "0570-04-22T00:00"
		},
		{
			label: "Ottoman Empire founded (1299)",
			date: "1299-07-27T00:00"
		}
	],
	"Global & Other": [
		{
			label: "Discovery of America (1492-10-12)",
			date: "1492-10-12T00:00"
		},
		{
			label: "Industrial Revolution begins (1760)",
			date: "1760-01-01T00:00"
		},
		{
			label: "First email sent (1971-10-29)",
			date: "1971-10-29T00:00"
		},
		{ label: "Fall of Roman Empire (476)", date: "0476-09-04T00:00" },
		{
			label: "Nelson Mandela released (1990-02-11)",
			date: "1990-02-11T00:00"
		},
		{ label: "Renaissance begins (~1300)", date: "1300-01-01T00:00" },
		{
			label: "Chernobyl disaster (1986-04-26)",
			date: "1986-04-26T01:23"
		},
		{
			label: "Berlin Wall built (1961-08-13)",
			date: "1961-08-13T00:00"
		},
		{
			label: "2038 problem (Unix time overflow, 2038-01-19)",
			date: "2038-01-19T03:14:07"
		}
	]
};