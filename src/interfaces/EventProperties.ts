//
// Interface des propriétés pour les événements historiques.
//
export type EventProperties = Record<
	string,
	{
		label: string;
		date: string;
	}[]
>[];