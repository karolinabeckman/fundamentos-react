import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
// import "../../app/globals.css";

export default function PaginaContador() {
	const [numero, setNumero] = useState(0);

	const [passo, setPasso] = useState(1);

	function incrementar() {
		setNumero(numero + passo);
	}

	function decrementar() {
		setNumero(numero - passo);
	}

	function incrementarPasso() {
		setPasso(passo + 1);
	}

	function decrementarPasso() {
		setPasso(passo - 1);
	}

	return (
		<Pagina titulo="Contador" subtitulo="Capítulo Estado">
			<div className="flex flex-col gap-5 justify-center items-center h-full w-full">
				<div className="text-7xl font-black p-5">
					<span>Valor: </span>
					<span>{numero}</span>
				</div>
				<div className="flex gap-10">
					<button
						onClick={incrementar}
						className="bg-purple-400 p-2 rounded-full hover:bg-purple-700"
					>
						<IconPlus size={50} />
					</button>
					<button
						onClick={decrementar}
						className="bg-purple-400 p-2 rounded-full hover:bg-purple-700"
					>
						<IconMinus size={50} />
					</button>
				</div>
				<div className="flex gap-4 items-center py-10">
					<button
						onClick={incrementarPasso}
						className="bg-blue-500 p-2 rounded-full hover:bg-blue-700"
					>
						<IconPlus size={16} />
					</button>
					<span>{passo}</span>
					<button
						onClick={decrementarPasso}
						className="bg-blue-500 p-2 rounded-full hover:bg-blue-700"
					>
						<IconMinus size={16} />
					</button>
				</div>
			</div>
		</Pagina>
	);
}
