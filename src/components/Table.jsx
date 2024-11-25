import React from "react";

const Table = () => {
	return (
		<div className="py-20 bg-darkGray m-10">
			<h2 className="text-left text-2xl font-bold ml-10">Why <span className="text-yellow">MoonEX?</span></h2>
			<div className="mt-8 flex justify-center">
				<table className="border-collapse border border-white w-full ml-5 mr-5">
					<thead>
						<tr>
							<th className="border border-white px-4 py-2">Feature</th>
							<th className="border border-white text-center flex items-center justify-center px-4 py-2">
								<img src="logo.png" alt="" className="h-10 w-50" />
							</th>
							<th className="border border-white text-center px-4 py-2">
                            <img src="Uniswap_Logo.png" alt="" className="h-10 w-50 lg:ml-[30%] sm:ml-0 md:ml-0" />
                            </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-gray-500 text-gray-400 px-4 py-2 ">
								1. Point no one
							</td>
							<td className="border border-gray-500 flex justify-center items-center px-4 py-2">
								<img src="check_bold.png" alt="check" className="h-6 w-6" />
                                
							</td>
							<td className="border border-gray-500 text-center px-4 py-2">
								❌
							</td>
						</tr>

						<tr>
							<td className="border border-gray-500 text-gray-400 px-4 py-2 ">
								2. Point no two this
							</td>
							<td className="border border-gray-500 flex justify-center items-center px-4 py-2">
								<img src="check_bold.png" alt="check" className="h-6 w-6" />
							</td>
							<td className="border border-gray-500 text-center px-4 py-2">
								❌
							</td>
						</tr>

						<tr>
							<td className="border border-gray-500 text-gray-400 px-4 py-2 ">
								2. Point no two this
							</td>
							<td className="border border-gray-500 flex justify-center items-center px-4 py-2">
								<img src="check_bold.png" alt="check" className="h-6 w-6" />
							</td>
							<td className="border border-gray-500 text-center px-4 py-2">
								❌
							</td>
						</tr>
						<tr>
							<td className="border border-gray-500 text-gray-400 px-4 py-2 ">
								2. Point no two this
							</td>
							<td className="border border-gray-500 flex justify-center items-center px-4 py-2">
								<img src="check_bold.png" alt="check" className="h-6 w-6" />
							</td>
							<td className="border border-gray-500 text-center px-4 py-2">
								❌
							</td>
						</tr>
						<tr>
							<td className="border border-gray-500 text-gray-400 px-4 py-2 ">
								2. Point no two this
							</td>
							<td className="border border-gray-500 flex justify-center items-center px-4 py-2">
								<img src="check_bold.png" alt="check" className="h-6 w-6" />
							</td>
							<td className="border border-gray-500 text-center px-4 py-2">
								❌
							</td>
						</tr>

					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
