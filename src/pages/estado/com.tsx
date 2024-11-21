import Pagina from "@/components/Pagina";
// import "../../app/globals.css";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaComEstado() {
	// let numero = 0;

	// let estado = useState(0);
	// const [numero, alterarNumero] = useState(0);
	const [numero, setNumero] = useState(0); // useState é um recurso do React
	// const alterarEstado = estado[1];

	function incrementar() {
		// numero += 1;
		setNumero(numero + 1);
		// alterarNumero(numero + 1);
		// alterarEstado(estado[0] + 1);
		// console.log(numero);
	}

	function decrementar() {
		setNumero(numero - 1);
	}
	return (
		<Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
			<div className="flex flex-col gap-5 justify-center items-center h-full w-full">
				<div className="text-5xl font-black">
					<span>Valor: </span>
					{/* <span>{numero}</span> */}
					<span>{numero}</span>
				</div>
				<div className="flex gap-10">
					<button
						onClick={incrementar}
						className="bg-purple-400 p-2 rounded-full hover:bg-purple-700"
					>
						<IconPlus size={40} />
					</button>
					<button
						onClick={decrementar}
						className="bg-purple-400 p-2 rounded-full hover:bg-purple-700"
					>
						<IconMinus size={40} />
					</button>
				</div>
			</div>
		</Pagina>
	);
}
