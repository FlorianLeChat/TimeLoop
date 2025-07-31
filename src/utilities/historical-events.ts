import type { EventProperties } from "../interfaces/EventProperties";

//
// Liste des événements historiques organisés par région.
//
export const eventsByRegion: Record<string, EventProperties[]> = {
	"Europe": [
		{
			label: "Fall of Roman Empire (476)",
			date: "0476-09-04T00:00",
			link: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"
		},
		{
			label: "Magna Carta signed (1215-06-15)",
			date: "1215-06-15T00:00",
			link: "https://en.wikipedia.org/wiki/Magna_Carta"
		},
		{
			label: "Black Death peak in Europe (1347-1351)",
			date: "1347-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Black_Death"
		},
		{
			label: "French Revolution begins (1789-07-14)",
			date: "1789-07-14T00:00",
			link: "https://en.wikipedia.org/wiki/French_Revolution"
		},
		{
			label: "Berlin Wall built (1961-08-13)",
			date: "1961-08-13T00:00",
			link: "https://en.wikipedia.org/wiki/Berlin_Wall"
		},
		{
			label: "Death of Francisco Franco (1975-11-20)",
			date: "1975-11-20T00:00",
			link: "https://en.wikipedia.org/wiki/Francisco_Franco"
		},
		{
			label: "Chernobyl disaster (1986-04-26)",
			date: "1986-04-26T01:23",
			link: "https://en.wikipedia.org/wiki/Chernobyl_disaster"
		},
		{
			label: "Fall of the Berlin Wall (1989-11-09)",
			date: "1989-11-09T00:00",
			link: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall"
		},
		{
			label: "Birth of Linux (1991-08-25)",
			date: "1991-08-25T00:00",
			link: "https://en.wikipedia.org/wiki/Linux"
		},
		{
			label: "European Union founded (1993-11-01)",
			date: "1993-11-01T00:00",
			link: "https://en.wikipedia.org/wiki/European_Union"
		},
		{
			label: "Euro introduced (2002-01-01)",
			date: "2002-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Euro"
		},
		{
			label: "Brexit referendum (2016-06-23)",
			date: "2016-06-23T00:00",
			link: "https://en.wikipedia.org/wiki/Brexit_referendum"
		},
		{
			label: "Paris Agreement on climate change (2015-12-12)",
			date: "2015-12-12T00:00",
			link: "https://en.wikipedia.org/wiki/Paris_Agreement"
		},
		{
			label: "Russian invasion of Ukraine (2022-02-24)",
			date: "2022-02-24T01:50",
			link: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"
		}
	],
	"North America": [
		{
			label: "Declaration of Independence USA (1776-07-04)",
			date: "1776-07-04T00:00",
			link: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"
		},
		{
			label: "Manahattan Project (1942-08-13)",
			date: "1942-08-13T00:00",
			link: "https://en.wikipedia.org/wiki/Manhattan_Project"
		},
		{
			label: "First computer (ENIAC, 1945)",
			date: "1945-12-10T00:00",
			link: "https://en.wikipedia.org/wiki/ENIAC"
		},
		{
			label: "ARPANET commissioned (1969-10-29)",
			date: "1969-10-29T22:30",
			link: "https://en.wikipedia.org/wiki/ARPANET"
		},
		{
			label: "First email sent (1971-10-29)",
			date: "1971-10-29T00:00",
			link: "https://en.wikipedia.org/wiki/Email"
		},
		{
			label: "World Trade Center attacks (2001-09-11)",
			date: "2001-09-11T12:46",
			link: "https://en.wikipedia.org/wiki/September_11_attacks"
		},
		{
			label: "First iPhone released (2007-06-29)",
			date: "2007-06-29T00:00",
			link: "https://en.wikipedia.org/wiki/IPhone"
		},
		{
			label: "Launch of ChatGPT (2022-11-30)",
			date: "2022-11-30T00:00",
			link: "https://en.wikipedia.org/wiki/ChatGPT"
		}
	],
	"Africa": [
		{
			label: "Great Zimbabwe construction begins (~1100)",
			date: "1100-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Great_Zimbabwe"
		},
		{
			label: "Mali Empire peak (Mansa Musa, 1312)",
			date: "1312-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Mali_Empire"
		},
		{
			label: "Independence of Algeria (1962-07-05)",
			date: "1962-07-05T00:00",
			link: "https://en.wikipedia.org/wiki/Independence_of_Algeria"
		},
		{
			label: "Nelson Mandela released (1990-02-11)",
			date: "1990-02-11T00:00",
			link: "https://en.wikipedia.org/wiki/Nelson_Mandela"
		},
		{
			label: "Rwandan genocide begins (1994-04-07)",
			date: "1994-04-07T00:00",
			link: "https://en.wikipedia.org/wiki/Rwandan_genocide"
		},
		{
			label: "Apartheid ends in South Africa (1994)",
			date: "1994-04-27T00:00",
			link: "https://en.wikipedia.org/wiki/Apartheid_in_South_Africa"
		}
	],
	"Asia": [
		{
			label: "Invention of paper (China, 105 AD)",
			date: "0105-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Paper"
		},
		{
			label: "Mongol Empire founded (1206)",
			date: "1206-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Mongol_Empire"
		},
		{
			label: "Meiji Restoration (Japan, 1868)",
			date: "1868-01-03T00:00",
			link: "https://en.wikipedia.org/wiki/Meiji_Restoration"
		},
		{
			label: "Hiroshima and Nagasaki bombings (1945-08-06, 09)",
			date: "1945-08-06T08:15",
			link: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"
		},
		{
			label: "Korean War begins (1950-06-25)",
			date: "1950-06-25T00:00",
			link: "https://en.wikipedia.org/wiki/Korean_War"
		},
		{
			label: "First artificial satellite (Sputnik, 1957)",
			date: "1957-10-04T00:00",
			link: "https://en.wikipedia.org/wiki/Sputnik_1"
		},
		{
			label: "First human in space (Yuri Gagarin, 1961-04-12)",
			date: "1961-04-12T00:00",
			link: "https://en.wikipedia.org/wiki/Yuri_Gagarin"
		},
		{
			label: "Death of Mao Zedong (1976-09-09)",
			date: "1976-09-09T00:00",
			link: "https://en.wikipedia.org/wiki/Mao_Zedong"
		}
	],
	"South America": [
		{
			label: "Machu Picchu built (Inca Empire, 1450)",
			date: "1450-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Machu_Picchu"
		},
		{
			label: "Discovery of America (1492-10-12)",
			date: "1492-10-12T00:00",
			link: "https://en.wikipedia.org/wiki/Discovery_of_America"
		},
		{
			label: "Independence of Brazil (1822)",
			date: "1822-09-07T00:00",
			link: "https://en.wikipedia.org/wiki/Independence_of_Brazil"
		},
		{
			label: "Cuban Revolution (1953-01-01)",
			date: "1953-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Cuban_Revolution"
		},
		{
			label: "End of the Mayan calendar (2012-12-21)",
			date: "2012-12-21T11:11",
			link: "https://en.wikipedia.org/wiki/Maya_calendar"
		}
	],
	"Middle East": [
		{
			label: "Birth of Prophet Muhammad (~570)",
			date: "0570-04-22T00:00",
			link: "https://en.wikipedia.org/wiki/Muhammad"
		},
		{
			label: "Ottoman Empire founded (1299)",
			date: "1299-07-27T00:00",
			link: "https://en.wikipedia.org/wiki/Ottoman_Empire"
		},
		{
			label: "Fall of Constantinople (1453-05-29)",
			date: "1453-05-29T00:00",
			link: "https://en.wikipedia.org/wiki/Fall_of_Constantinople"
		},
		{
			label: "Suez Canal opened (1869-02-17)",
			date: "1869-02-17T00:00",
			link: "https://en.wikipedia.org/wiki/Suez_Canal"
		},
		{
			label: "U.S. invasion of Iraq (2003-03-20)",
			date: "2003-03-20T00:00",
			link: "https://en.wikipedia.org/wiki/Iraq_War"
		},
		{
			label: "Arab Spring begins (2010-12-17)",
			date: "2010-12-17T00:00",
			link: "https://en.wikipedia.org/wiki/Arab_Spring"
		},
		{
			label: "Fall of Assad regime in Syria (2024-12-08)",
			date: "2024-12-08T00:00",
			link: "https://en.wikipedia.org/wiki/Syrian_Civil_War"
		}
	],
	"Global": [
		{
			label: "Renaissance begins (~1300)",
			date: "1300-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Renaissance"
		},
		{
			label: "Printing press invented (1440-01-01)",
			date: "1440-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Printing_press"
		},
		{
			label: "Industrial Revolution begins (1760)",
			date: "1760-01-01T00:00",
			link: "https://en.wikipedia.org/wiki/Industrial_Revolution"
		},
		{
			label: "First Olympic Games (1896-04-06)",
			date: "1896-04-06T00:00",
			link: "https://en.wikipedia.org/wiki/1896_Summer_Olympics"
		},
		{
			label: "First powered flight (1903-12-17)",
			date: "1903-12-17T10:35",
			link: "https://en.wikipedia.org/wiki/Wright_brothers"
		},
		{
			label: "Start of World War I (1914-07-28)",
			date: "1914-07-28T00:00",
			link: "https://en.wikipedia.org/wiki/World_War_I"
		},
		{
			label: "Discovery of penicillin (1928-09-28)",
			date: "1928-09-28T00:00",
			link: "https://en.wikipedia.org/wiki/Penicillin"
		},
		{
			label: "Start of World War II (1939-09-01)",
			date: "1939-09-01T00:00",
			link: "https://en.wikipedia.org/wiki/World_War_II"
		},
		{
			label: "Start of the Cold War (1947-03-12)",
			date: "1947-03-12T00:00",
			link: "https://en.wikipedia.org/wiki/Cold_War"
		},
		{
			label: "United Nations founded (1945)",
			date: "1945-10-24T00:00",
			link: "https://en.wikipedia.org/wiki/United_Nations"
		},
		{
			label: "Moon landing (1969-07-20)",
			date: "1969-07-20T20:17",
			link: "https://en.wikipedia.org/wiki/Moon_landing"
		},
		{
			label: "Petrol crisis (1973-10-17)",
			date: "1973-10-17T00:00",
			link: "https://en.wikipedia.org/wiki/1973_oil_crisis"
		},
		{
			label: "World Wide Web launched (1991-08-06)",
			date: "1991-08-06T00:00",
			link: "https://en.wikipedia.org/wiki/World_Wide_Web"
		},
		{
			label: "Kyoto Protocol adopted (1997-12-11)",
			date: "1997-12-11T00:00",
			link: "https://en.wikipedia.org/wiki/Kyoto_Protocol"
		},
		{
			label: "International Space Station launched (1998-11-20)",
			date: "1998-11-20T00:00",
			link: "https://en.wikipedia.org/wiki/International_Space_Station"
		},
		{
			label: "First smartphone released (2000-01-09)",
			date: "2000-01-09T00:00",
			link: "https://en.wikipedia.org/wiki/Smartphone"
		},
		{
			label: "Global financial crisis (2008)",
			date: "2008-09-15T00:00",
			link: "https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008"
		},
		{
			label: "COVID-19 pandemic begins (2019-12-31)",
			date: "2019-12-31T00:00",
			link: "https://en.wikipedia.org/wiki/COVID-19_pandemic"
		},
		{
			label: "2038 problem (Unix time overflow, 2038-01-19)",
			date: "2038-01-19T03:14:07",
			link: "https://en.wikipedia.org/wiki/Year_2038_problem"
		}
	]
};