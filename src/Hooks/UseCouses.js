import { useEffect, useState } from "react";

const UseCouses = () => {
	const [courses, setCourses] =useState();
	const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('data/courses.json')
		.then((res) => res.json())
        .then((data) => setCourses(
        data, setIsLoad(false)));
    }, [isLoad])
	return {courses, setCourses, isLoad, setIsLoad}
};

export default UseCouses;