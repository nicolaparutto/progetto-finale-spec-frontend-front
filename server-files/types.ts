export type Product = {
	title: string;
	description: string;
	category: "Computer Portatili" | "PC Desktop" | "Smartphone e Cellulari" | "Tv";
	brand: string;
	price: number;
	image: string;
	displayDimensions: number;
	displayPresence: "SI" | "NO";
	releaseYear: number;
	connectivity: string[];
};