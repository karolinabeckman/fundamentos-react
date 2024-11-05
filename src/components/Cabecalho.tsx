interface CabecalhoProps {
	titulo: string;
	subtitulo: string;
	className?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
	// console.log(props);
	return (
		<div
			className={`
        flex flex-col justify-center items-center
        bg-purple-500 rounded-lg ${props.className ?? ""}
      `}
		>
			<h1 className="text-3xl font-black">{props.titulo}</h1>
			<h2>{props.subtitulo}</h2>
		</div>
	);
}
