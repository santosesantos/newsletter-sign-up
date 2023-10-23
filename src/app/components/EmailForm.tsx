"use client";

import * as React from 'react';
import { useState } from 'react';

interface IProps {
	children?: React.ReactNode;
}

export default function EmailForm(props: IProps) {
	const [email, setEmail] = useState("");
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleClick = () => {
		if (!/^[\S]+@([\S]+\.)[\S]+/.test(email)) {
			setIsError(true);
		} else {
			setIsSuccess(true)
		}
	};

	return (
		<>
			<div className="flex flex-col gap-4
			mt-4">
				<div>
					<label className="text-sm" htmlFor="inputEmail">Email address</label>
					<input className={`w-full p-2
					rounded-lg border-2 
					${isError ? "border-[--primary-color] bg-[--primary-color-fade] text-[--primary-color]" : "border-[--grey]"} 
					focus:border-[--dark-slate-grey]`} id="inputEmail" type="email"
						placeholder="email@company.com"
						value={email} onChange={evt => [setEmail(evt.target.value), setIsError(false)]} required />
				</div>
				<button className="w-full p-2 py-3
				rounded-lg
				text-white text-sm font-bold
				bg-gradient-to-r from-[--dark-slate-grey] to-[--dark-slate-grey]
				hover:from-[--secondary-color] hover:to-[--primary-color]" type="button"
					onClick={handleClick}>Subscribe to monthly newsletter</button>
			</div>
			<div className={`absolute z-10
				w-full h-full
				${isSuccess ? "flex flex-col justify-center items-center" : "hidden"}
				bg-[--charcoal-grey-off]
				top-0 left-0`}>

				<div className="flex flex-col gap-4
					w-[45%] h-1/2
					p-6
					rounded-xl bg-white">

					<img src="./assets/icon-success.svg" alt="Success"
						className="w-12" />
					<h2 className="text-[2.5rem] font-bold">Thanks for subscribing!</h2>
					<p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
					<button className="w-full p-2 py-3
						rounded-lg
						text-white text-sm font-bold
						bg-gradient-to-r from-[--dark-slate-grey] to-[--dark-slate-grey]
						hover:from-[--secondary-color] hover:to-[--primary-color]"
						onClick={() => setIsSuccess(false)} type="button">Dismiss message</button>
				</div>
			</div>
		</>
	);
}