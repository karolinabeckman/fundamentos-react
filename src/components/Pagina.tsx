import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
	const ano = new Date().getFullYear();
	return (
		<div className="flex h-screen p-4 gap-4">
			<Menu />
			<div className="flex flex-col gap-4 flex-1">
				<Cabecalho
					titulo={props.titulo}
					subtitulo={props.subtitulo}
					className="h-24 bg-gradient-to-r from-blue-700 to-zinc-900"
				/>
				<Conteudo>{props.children}</Conteudo>
				<Rodape
					textoEsquerda="Feito com ❤️ por Formação.DEV"
					textoDireita={`Desenvolvido em ${ano}`}
				/>
			</div>
		</div>
	);
}
