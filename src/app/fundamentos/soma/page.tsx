import Pagina from "@/components/Pagina";

export default function Page() {
	const nome = "João";
	const idade = 40;
	return (
		<Pagina titulo="JSX com JS" subtitulo="Soma">
			<div>
				<div>
					{nome} {idade}
				</div>
				<div>{2 + 7}</div>
				<div>{idade * 3}</div>
				<div>{Math.random()}</div>
			</div>
		</Pagina>
	);
}
