import React from 'react';
import UseCouses from '../Hooks/UseCouses';

const SingleCourse = () => {
	const {courses} = UseCouses()
	return (
		<main class="min-h-screen p-2 lg:px-8">

			{
				
			courses.map(course=>
			<>
			<div className="p-1">
				<div>
					<h1 class="text-4xl font-bold">{course.title}</h1>
					<p class="text-xl font-bold text-gray-500 py-1">Multy-Day-Courses</p>
				</div>
				<div class="hero pt-6">
					<div class="flex justify-center gap-1 flex-col lg:flex-row-reverse">
						<div class="flex gap-2 w-12/12 lg:w-6/12">
							<div class="w-12/12 lg:w-6/12">
								<img src="https://placeimg.com/260/400/arch" class="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
							</div>
							<div class="grid gap-y-2 w-12/12 lg:w-6/12">
								<img src="https://placeimg.com/260/400/arch" class="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
								<img src="https://placeimg.com/260/400/arch" class="w-full min-h-full lg:h-48 rounded-lg shadow-2xl" />
							</div>
						</div>
						<div class="w-12/12 lg:w-6/12">
							<p class="text-xl">In this 5 days class will explore artis, Matisse, Van Gogh, among others and recrate paintings using crayon and watercolor.Students will have fun learning about the artis & creating their own art inspired by their work</p>
							<div class="flex items-center gap-1 py-4">
								<img src="https://placeimg.com/80/80/people" class="w-8 rounded-full"/>
								<p class="text-lg font-semibold text-primary">Kimberly R Moseler</p>
							</div>
							<div className="flex gap-2">
								<div class="rating pb-4">
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" checked/>
								</div>
								<p>467 total reviews for this teacher</p>
							</div>
							<div className="flex gap-2">
								<div class="rating pb-4">
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" />
									<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-300" checked/>
								</div>
								<p>5 total reviews for this class</p>
							</div>
							<div className="flex gap-2 lg:gap-4">
								<button class="btn btn-primary rounded-3xl px-8 gap-2 font-semibold">See Class Schedule <i class="far fa-chevron-right"></i></button>
								<button class="text-lg font-bold gap-2 text-primary"><i class="fal fa-heart"></i> Save</button>
								<button class="text-lg font-bold gap-2 text-primary"><i class="fal fa-share"></i> Share</button>
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