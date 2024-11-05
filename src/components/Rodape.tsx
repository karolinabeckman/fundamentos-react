interface RodapeProps {
	textoEsquerda: string;
	textoDireita: string;
}

export default function Rodape(props: RodapeProps) {
	// console.log(props);
	return (
		<div
			className={`
        flex justify-between items-center
        h-16 rounded-lg px-10
        bg-cyan-600
      `}
		>
			<span>{props.textoEsquerda}</span>
			<span>{props.textoDireita}</span>
		</div>
	);
}
