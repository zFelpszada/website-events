import Image from 'next/image';
import { VscLocation } from 'react-icons/vsc';

export default function Card({ metadata }) {
	return (
		<div className="w-full h-full rounded-xl border-2 border-[#EAEAEA] sm:max-w-[384px] sm:max-h-[323px]">
			<div className="w-full h-[153px] rounded-t-xl relative overflow-hidden">
				<Image src={metadata.image} alt="Foto ilustrativa do local" size={10} quality={50} fill={true} style={{ objectFit: 'cover' }} />
			</div>
			<div className="m-4">
				<h1 className="text-sm font-Roboto font-bold xl:text-xl">{metadata.title}</h1>
				<p className="pt-4 text-xs text-black/75 font-Roboto xl:text-base">{metadata.subtitle}</p>
			</div>
			<div className="m-4 flex items-center">
				<VscLocation className="text-[#E45858]" size={30} />
				<p className="ml-2 text-xs text-black/75 font-Roboto xl:text-base">{metadata.location}</p>
			</div>
		</div>
	);
}
