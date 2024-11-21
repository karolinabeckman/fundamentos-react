import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCalculadora() {
	const [valor1, setValor1] = useState(0);

	const [valor2, setValor2] = useState(0);

	const calcular = (a: number, b: number, operacao: string) => {
		switch (operacao) {
			case "soma": {
				return a + b;
			}
			case "subtrair": {
				return a - b;
			}
			case "multiplicar": {
				return a * b;
			}
			case "dividir": {
				return a / b;
			}
		}
	};

	return (
		<Pagina titulo="Calculadora" subtitulo="Capítulo Estado">
			<div className="flex flex-col gap-5">
				<div>Calculadora</div>
				<div className="flex flex-col gap-5">
					<input
						className="campo"
						type="number"
						value={valor1}
						onChange={(e) => setValor1(+e.target.value)}
					/>
					<input
						className="campo"
						type="number"
						value={valor2}
						onChange={(e) => setValor2(+e.target.value)}
					/>
				</div>
				<span>
					{valor1} + {valor2} = {calcular(valor1, valor2, "soma")}
				</span>
				<span>
					{valor1} - {valor2} = {calcular(valor1, valor2, "subtrair")}
				</span>
				<span>
					{valor1} * {valor2} = {calcular(valor1, valor2, "multiplicar")}
				</span>
				<span>
					{valor1} / {valor2} = {calcular(valor1, valor2, "dividir")}
				</span>
			</div>
		</Pagina>
	);
}
