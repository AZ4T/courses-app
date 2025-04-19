import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	return (
		<div>
			<Header />
			<Courses
				mockedCoursesList={mockedCoursesList}
				mockedAuthorsList={mockedAuthorsList}
				onShowCourse={() => {}}
			/>
		</div>
	);
}

export default App;
