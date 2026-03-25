import React from "react";
import Card from "./card.jsx";

const cards = [
	{
		id: 1,
		title: "One Piece",
		description: "Adventure anime series",
		image:
			"https://4kwallpapers.com/images/wallpapers/one-piece-season-15-3840x2160-22064.jpg",
	},
	{
		id: 2,
		title: "Naruto",
		description: "Ninja action anime",
		image:
			"https://imgs.search.brave.com/VkWmd1aRy7gYu1glDivSOwImubLYBVu77swe06Cm9R4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2M5L05h/cnV0b19sb2dvLnN2/Zy8yNTBweC1OYXJ1/dG9fbG9nby5zdmcu/cG5n",
	},
	{
		id: 3,
		title: "Demon Slayer",
		description: "Sword fighting fantasy",
		image:
			"https://imgs.search.brave.com/x4ejZbPWHhx14Vkxsz3EBB_rwcSl8ynEhxLwuT_YFvw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56RXpZamhr/WVRjdE1XTm1aUzAw/TVRjNUxXSTRPV1V0/WmpGa056TmtZVE5r/TVRKbFhrRXlYa0Zx/Y0djQC5qcGc",
	},
	{
		id: 4,
		title: "Attack on Titan",
		description: "Dark fantasy action",
		image:
			"https://imgs.search.brave.com/5NHFVQl7CKbh-DcWyWOhePwwl8w9hPgJSVRGo9kshoY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0ODIx/Njc1LndlYnA",
	},
];

export default function CardGrid() {
	return (
		<div className="mx-auto w-full max-w-6xl px-4 py-8">
			<div className="grid grid-cols-4 gap-6 ">     {/*sm:grid-cols-2 lg:grid-cols-4*/}
				 {cards.map((card) => (
					<div
						key={card.id}
						className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
					>
						<img src={card.image} alt={card.title} className="h-40 w-full object-cover" />
						<div className="space-y-2 p-4">
							<h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
							<p className="text-sm text-slate-600">{card.description}</p>
						</div>
					</div>
				))}                   
						    {/* <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card /> */}
			</div>
		</div>
	);
}
