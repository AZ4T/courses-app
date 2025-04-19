export default function getCourseDuration(date) {
	const hh = Math.floor(date / 60);
	const mm = date % 60;
	let duration = hh < 10 ? '0' : hh;
	duration += ':';
	duration += mm < 10 ? '0' : mm;
	duration += hh === 1 ? ' hour' : ' hours';
	return duration;
}
