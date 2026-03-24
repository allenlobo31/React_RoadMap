import React from "react";

const cardData = {
	image: "https://4kwallpapers.com/images/wallpapers/one-piece-season-15-3840x2160-22064.jpg",
	title: "One Piece",
	description: "Watch Onepiece",
	price: "Free",
	buttonText: "Start Now",
}

export default function Card() {
	return (
		<div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-md hover:shadow-lg">
			<img src={cardData.image} alt={cardData.title} className="h-52 w-full object-cover" />

			<div className="space-y-3 p-5">
				<h3 className="text-xl font-semibold text-blue-900">{cardData.title}</h3>
				<p className="text-sm text-slate-600">{cardData.description}</p>

				<div className="flex items-center justify-between">
					<h1 className="text-lg font-bold text-slate-900">{cardData.price}</h1>
					<button
						type="button"
						className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
					>
						{cardData.buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}
