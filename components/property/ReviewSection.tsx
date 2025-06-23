const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
	return (
		<div className="mt-8">
			<h3 className="text-2xl text-gray-700">REVIEWS</h3>
			{
				reviews.length > 0
					? reviews.map((review, index: number) => (
						<div key={index} className="border-b pb-4 mb-4">
							{/* reviewer avatar */}
							<div className="flex items-center">
								<img src={review.avatar} alt={review.name} className="w-12 h-12 rounde-full mr-4" />
								<div>
									<p className="font-bold">{review.name}</p>
									<p className="text-yellow-500">{review.rating} stars</p>
								</div>
							</div>
							<p>{review.comment}</p>
						</div>
					))
					: <p className="py-6">NO REVIEWS YET</p>
			}
		</div>
	);
};

export default ReviewSection;
