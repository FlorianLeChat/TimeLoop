import dayjs from "dayjs";

//
// Calcule le temps restant entre deux dates.
//
export function calculateRemaining( startDate: string, endDate: string )
{
	if ( !startDate || !endDate )
	{
		// Pas de dates valides fournies, retourner un objet avec des valeurs par défaut.
		return {
			centuries: 0,
			years: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}

	const start = dayjs( startDate );
	const end = dayjs( endDate );

	let diffSec = end.diff( start, "second" );
	if ( diffSec < 0 ) diffSec = 0;

	// Siècles.
	const centuries = Math.floor( diffSec / ( 100 * 365.25 * 24 * 3600 ) );
	let remainder = diffSec % ( 100 * 365.25 * 24 * 3600 );

	// Années.
	const years = Math.floor( remainder / ( 365.25 * 24 * 3600 ) );
	remainder = remainder % ( 365.25 * 24 * 3600 );

	// Jours.
	const days = Math.floor( remainder / ( 24 * 3600 ) );
	remainder = remainder % ( 24 * 3600 );

	// Heures.
	const hours = Math.floor( remainder / 3600 );
	remainder = remainder % 3600;

	// Minutes.
	const minutes = Math.floor( remainder / 60 );

	// Secondes.
	const seconds = remainder % 60;

	return { centuries, years, days, hours, minutes, seconds };
}