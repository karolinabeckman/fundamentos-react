import Pagina from "@/components/Pagina";
// import "../../app/globals.css";

export default function PaginaSemEstado() {
	let numero = 0;

	function incrementar() {
		numero += 1;
		console.log(numero);
	}
	return (
		<Pagina titulo="Sem Estado" subtitulo="Capítulo Estado">
			<div className="flex flex-col gap-5">
				<div>
					<span>Valor: </span>
					<span>{numero}</span>
				</div>
				<button onClick={incrementar} className="bg-blue-500 p-2 rounded-md">
					Incrementar
				</button>
			</div>
		</Pagina>
	);
}
