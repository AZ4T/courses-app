import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	return (
		<div>
			<Header />
			{/* <Courses
				mockedCoursesList={mockedCoursesList}
				mockedAuthorsList={mockedAuthorsList}
				onShowCourse={() => {}}
			/> */}
			<CreateCourse />
		</div>
	);
}

export default App;
