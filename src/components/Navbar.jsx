import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="flex items-center justify-between w-full max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} className="w-9 h-9 object-contain" alt="" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Mahmoud Abu-Attiya
					</p>
				</Link>
				<ul className="list-none hidden sm:flex gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							// className="text-white text-[18px] font-bold cursor-pointer"
							className={`${
								active === link.path ? "text-white" : "text-secondary"
								} text-[18px] cursor-pointer hover:text-white`}
								onClick={() =>setActive(link.path)}
						>
							<a href={`#${link.id}`}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden relative flex justify-end items-center flex-1">
					<button onClick={() => setToggle(!toggle)}>
					{toggle ? <i className="fad fa-times text-xl"></i> : <i className="fad fa-bars text-xl"></i>}
					</button>
					{toggle && (
						<ul className="list-none flex flex-col gap-4 absolute black-gradient top-10 p-6 rounded-md right-0">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.path ? "text-white" : "text-secondary"
										} cursor-pointer hover:text-white`}
										onClick={() =>{setActive(link.path);setToggle(!toggle)}}
								>
									<a href={`#${link.id}`}>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
