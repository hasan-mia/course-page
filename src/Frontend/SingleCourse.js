import React from 'react';
import UseCouses from '../Hooks/UseCouses';

const SingleCourse = () => {
	const {courses} = UseCouses()
	return (
		<main className="min-h-screen p-2 lg:px-8">

			{
				
			courses.slice(0,1).map(course=>
			<>
			<div className="p-1">
				<div>
					<h1 className="text-4xl font-bold">{course.title}</h1>
					<p className="text-xl font-bold text-gray-500 py-1">{course.category}</p>
				</div>
				<div className="hero pt-6">
					<div className="flex justify-center gap-1 flex-col lg:flex-row-reverse">
						<div className="flex gap-2 w-12/12 lg:w-6/12">
							<div className="w-12/12 lg:w-6/12">
								<img src={course.img1} className="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
							</div>
							<div className="grid gap-y-2 w-12/12 lg:w-6/12">
								<img src={course.img2} className="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
								<img src={course.img3} className="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
							</div>
						</div>
						<div className="w-12/12 lg:w-6/12">
							<p className="text-xl">{course.description}</p>
							<div className="flex items-center gap-1 py-4">
								<img src={course.seller_img} className="w-8 rounded-full"/>
								<p className="text-lg font-semibold text-primary">{course.seller}</p>
							</div>
							<div className="flex gap-2">
								<div className="rating pb-4">
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" checked/>
								</div>
								<p>{course.t_rating} total reviews for this teacher</p>
							</div>
							<div className="flex gap-2">
								<div className="rating pb-4">
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" checked/>
								</div>
								<p>{course.s_rating} total reviews for this class</p>
							</div>
							<div className="flex gap-2 lg:gap-4">
								<button className="btn btn-primary rounded-3xl px-8 gap-2 font-semibold">See Class Schedule <i className="far fa-chevron-right"></i></button>
								<button className="text-lg font-bold gap-2 text-primary"><i className="fal fa-heart"></i> Save</button>
								<button className="text-lg font-bold gap-2 text-primary"><i className="fal fa-share"></i> Share</button>
							</div>
						</div>
					</div>
				</div>	
			</div>
			</>
			)
		
			}
			
		</main>
	);
};

export default SingleCourse;