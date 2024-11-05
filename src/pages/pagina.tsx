import Pagina from "@/components/Pagina";
import "../app/globals.css";

export default function TestePagina() {
	function executar() {
		console.log("O botão foi pressionado!");
	}

	return (
		<Pagina titulo="Minha Aplicação" subtitulo="Estou na pasta pages">
			<button
				onClick={executar}
				className={`
				bg-blue-500
				p-2 rounded-md
			`}
			>
				Teste
			</button>
		</Pagina>
	);
}
