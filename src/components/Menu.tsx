import MenuItem from "./MenuItem";
import {
	IconArrowDownSquare,
	IconArrowUpSquare,
	IconBraces,
	IconBrandJavascript,
	IconCalculator,
	IconCode,
	IconFileCheck,
	IconForms,
	IconFunction,
	IconH1,
	IconNumbers,
	IconSitemap,
} from "@tabler/icons-react";
import SecaoMenu from "./SecaoMenu";

export default function Menu() {
	return (
		<div
			className={`
        flex flex-col justify-start text-3xl w-72
        py-2 gap-2

      `}
		>
			<SecaoMenu nome="Comunicação" />
			<MenuItem
				icone={<IconArrowDownSquare />}
				texto="Comunicação Direta"
				url="/comunicacao/direta"
			/>
			<MenuItem
				icone={<IconArrowUpSquare />}
				texto="Comunicação Indireta"
				url="/comunicacao/indireta"
			/>
			<SecaoMenu nome="Estado" />
			<MenuItem
				icone={<IconCode />}
				texto="Componente sem Estado"
				url="/estado/sem"
			/>
			<MenuItem
				icone={<IconCode />}
				texto="Componente com Estado"
				url="/estado/com"
			/>
			<MenuItem
				icone={<IconNumbers />}
				texto="Contador"
				url="/estado/contador"
			/>
			<MenuItem
				icone={<IconForms />}
				texto="Campo de Texto"
				url="/estado/campoTexto"
			/>
			<MenuItem
				icone={<IconCalculator />}
				texto="Calculadora"
				url="/estado/calculadora"
			/>
			<SecaoMenu nome="Fundamentos" />
			<MenuItem
				texto="JSX com JS"
				url="/fundamentos/soma"
				icone={<IconBraces />}
			/>
			<MenuItem
				texto="JSX: Chamando Funções"
				url="/fundamentos/funcoes"
				icone={<IconFunction />}
			/>
			<MenuItem
				texto="Página #1"
				url="/fundamentos/pagina"
				icone={<IconFileCheck />}
			/>
			<MenuItem texto="Pagina #2" url="/pagina" icone={<IconSitemap />} />
			<SecaoMenu nome="Componentes" />
			<MenuItem
				texto="Componente Básico"
				url="/componente/basico"
				icone={<IconCode />}
			/>
			<MenuItem
				texto="Componente Titulo"
				url="/componente/titulo"
				icone={<IconH1 />}
			/>
			<MenuItem
				texto="JS com JSX"
				url="/componente/trecho"
				icone={<IconBrandJavascript />}
			/>
		</div>
	);
}
