import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
	return (
		<div>
			<Link
				href={"/"}
				className={`
					flex items-center 
					font-black bg-purple-700
					px-5 h-16 gap-2.5
				`}
			>
				<span>
					<IconBrandReact size={30} stroke={1} />
				</span>
				<span className="text-2xl">React</span>
			</Link>
		</div>
	);
}
