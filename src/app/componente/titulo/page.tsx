import Pagina from "@/components/Pagina";

export default function Page() {
	return (
		<Pagina titulo="Título" subtitulo="">
			<div>
				<h2 className="text-4xl text-green-600 font-bold">Subtítulo</h2>
				<h1 className="text-6xl text-red-500 font-black">Título</h1>
			</div>
		</Pagina>
	);
}
