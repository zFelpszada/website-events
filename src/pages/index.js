import Image from 'next/image';
import { useRef, useState } from 'react';
import { Card } from './interface/index.js';
import { VscLocation } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Home() {
	const search = useRef('');
	const [city, setCity] = useState(false);
	const [menu, setMenu] = useState('LIST');
	const [filteredEvent, setfilteredEvent] = useState(false);

	const events = [
		{ title: 'O Python do vovô não sobe mais', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'São Paulo - SP', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075532582084681768/unsplash_b2jkMC95a_8.png' },
		{ title: 'Todo mundo null', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Uberlândia - MG', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570122334408834/unsplash_b2jkMC95a_8_1.png' },
		{ title: 'Hoje dou exception', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Curitiba - PR', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570122615431178/unsplash_b2jkMC95a_8_3.png' },
		{ title: 'Manda Node', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Salvador - BA', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570122028228659/unsplash_b2jkMC95a_8_2.png' },
		{ title: 'Só no back-end', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Belo Horizonte - MG', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570510450151464/unsplash_b2jkMC95a_8_4.png' },
		{ title: 'Esse anel não é de Ruby', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Brasília - BSB', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570412957749300/unsplash_b2jkMC95a_8_5.png' },
		{ title: 'Pimenta no C# dos outros é refresco', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'Niterói - RJ', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570412479586454/unsplash_b2jkMC95a_8_6.png' },
		{ title: 'EnCACHE aqui', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'São Paulo - SP', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570704260534342/unsplash_b2jkMC95a_8_7.png' },
		{ title: 'Não valho nada mas JAVA li', subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', location: 'São Lourenço - MG', image: 'https://cdn.discordapp.com/attachments/926243509256728576/1075570704528978071/unsplash_b2jkMC95a_8_8.png' }
	];

	const cities = [{ name: 'São paulo' }, { name: 'Florianópolis' }, { name: 'Curitiba' }, { name: 'Salvador - BA' }, { name: 'Brasília' }, { name: 'Niterói' }, { name: 'Uberlândia' }, { name: 'São Lourenço' }];

	function changeCity(event) {
		setCity(event.target.value);
	}

	function changeMenu() {
		if (menu == 'LIST') {
			return setMenu('MENU');
		}

		return setMenu('LIST');
	}

	function handleSubmit(event) {
		event.preventDefault();
		// const theSearch = search.current.value;
		// if ((theSearch.length <= 0 && !city)) {
		// 	return setfilteredEvent(false);
		// }

		// if (city && theSearch.length <= 0) {
		// 	return setfilteredEvent(events.filter(event => event.location.toLowerCase().includes(city.toLowerCase())));
		// }

		// if (city && theSearch.length > 0) {
		// 	const cityFilter = events.filter(event => event.location.toLowerCase().includes(city.toLowerCase()));
		// 	return setfilteredEvent(cityFilter.filter(event => event.title.toLowerCase().includes(theSearch.toLowerCase())));
		// }

		// setfilteredEvent(events.filter(event => event.title.toLowerCase().includes(theSearch.toLowerCase())));
	}

	return (
		<div id="app">
			<div className="w-full h-[532px] bg-secondary flex items-center justify-center relative">
				<div className="absolute top-0 left-0 invisible lg:visible">
					<Image src="/assets/ilustra-01.png" alt="Imagem ilustrativa pena" width={407} height={345} quality={100} />
				</div>
				<div className="absolute bottom-0 right-0 invisible xl:visible">
					<Image src="/assets/ilustra-02.png" alt="Imagem ilustrativa moça" width={414} height={318} quality={100} />
				</div>
				<div className="mx-8 max-w-[993px] w-full">
					<div>
						<h1 className="text-center text-[#E45858] font-Roboto font-normal">FIND YOUR BLOCK</h1>
						<h2 className="mt-4 mx-auto max-w-[647px] text-center text-2xl text-[#121214] font-Roboto font-bold md:text-5xl">
							Encontre os <span className="text-[#6246EA]">melhores blocos</span> de carnaval de 2023
						</h2>
					</div>
					<div className="mt-10 w-full h-full rounded-xl bg-white border-2 border-[#EAEAEA] md:h-[128px]">
						<form onSubmit={handleSubmit} className="m-10 space-y-5 md:space-y-0 md:flex md:gap-5">
							<div className="mx-auto w-full h-12 rounded-md bg-[#F4F4FF] flex items-center md:max-w-[348px]">
								<RxMagnifyingGlass className="mx-2 text-[#E45858]" size={24} />
								<input ref={search} id="name" name="name" type="text" placeholder="Pesquise por nome" className="w-4/5 bg-transparent text-[#7C7C8A] placeholder-[#7C7C8A] font-Roboto focus:outline-none" />
							</div>
							<div className="mx-auto w-full h-12 rounded-md bg-[#F4F4FF] flex items-center md:max-w-[348px] relative">
								<VscLocation className="mx-2 text-[#E45858]" size={30} />
								<select onChange={changeCity} id="countries" defaultValue="Selecione uma cidade" className="block w-4/5 bg-transparent appearance-none text-[#7C7C8A] placeholder-[#7C7C8A] font-Roboto focus:outline-none focus:ring-0">
									<option value="Selecione uma cidade">Selecione uma cidade</option>
									{cities.map((data, index) => (
										<option key={index} value={data.name}>
											{data.name}
										</option>
									))}
								</select>
								<IoIosArrowDown className="absolute right-5 text-[#858793]" size={20} />
							</div>
							<button type="submit" className="w-full h-12 text-white font-Roboto font-bold rounded-lg bg-[#6246EA] md:max-w-[169px] hover:opacity-80 transition-all duration-300">
								BUSCAR AGORA
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="my-24 mx-8">
				<div className="mx-auto max-w-[1216px] w-full">
					<div className="sm:flex justify-between">
						<div>
							<h1 className="text-3xl font-Roboto font-bold">Blocos recomendados</h1>
						</div>
						<div className="mt-5 w-[190px] h-12 rounded-lg border-2 border-[#EAEAEA] flex items-center justify-center sm:mt-0">
							<button onClick={changeMenu} className={`w-[86px] h-8 rounded-md flex items-center justify-center font-Roboto font-bold ${menu === 'MENU' ? 'text-white bg-[#6246EA]' : 'text-[#6246EA]'}`}>
								MAPA
							</button>
							<button onClick={changeMenu} className={`w-[86px] h-8 rounded-md flex items-center justify-center font-Roboto font-bold ${menu === 'LIST' ? 'text-white bg-[#6246EA]' : 'text-[#6246EA]'}`}>
								LISTA
							</button>
						</div>
					</div>
					<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{filteredEvent ? filteredEvent.map((data, index) => <Card metadata={data} key={index} />) : events.map((data, index) => <Card metadata={data} key={index} />)}</div>
				</div>
			</div>
		</div>
	);
}
