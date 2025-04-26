export default function getCourseDuration(durationStr = '') {
	const totalMinutes = parseInt(durationStr, 10) || 0;
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	const pad = (n) => n.toString().padStart(2, '0');
	return `${pad(hours)}:${pad(minutes)}`;
}
