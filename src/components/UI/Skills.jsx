import React from "react";

function Skills() {
	return (
		<>
			<h1 className='text-5xl text-red-600   font-bold text-center pb-20'>
				Skills
			</h1>
			<div className='skills grid grid-cols-2 gap-y-24 '>
				<div className='skill justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-brands fa-bounce fa-xl fa-html5 mr-3 gap-0 '
						style={{ color: "#c41508" }}
					/>
					HTML
				</div>

				<div className='skill justify-center content-center text-white font-bold text-4xl '>
					<i
						className='  fa-brands fa-shake fa-xl fa-css3 mr-3 gap-0 '
						style={{ color: "#74C0FC" }}
					/>
					CSS
				</div>
				<div className='skill   justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-brands fa-flip fa-xl fa-JS mr-3 gap-0 '
						style={{ color: "#FFD43B" }}
					/>
					JS
				</div>
				<div className='skill     justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-brands fa-spin fa-xl fa-React mr-3 gap-0 '
						style={{ color: "#74C0FC" }}
					/>
					React
				</div>
				<div className='skill     justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-brands fa-fade fa-xl fa-node-js mr-3 gap-0 '
						style={{ color: "#30cb10" }}
					/>
					Node
				</div>
				<div className='skill   justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-solid fa-xl fa-beat fa-database mr-3 gap-0 '
						style={{ color: "#0a9413" }}
					/>
					MongoDB
				</div>
				<div className='skill   justify-center content-center text-white font-bold text-5xl '>
					<i
						className='  fa-Brands fa-beat-fade fa-xl fa-Java mr-3 gap-0 '
						style={{ color: "#ff0000" }}
					/>
					Java
				</div>
				<div className='skill flex gap-4    justify-center content-center text-white font-bold text-5xl '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1em'
						height='1em'
						viewBox='0 0 24 24'>
						<path
							fill='#ff9500'
							d='M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938a3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757a8.227 8.227 0 0 0 2.787 2.001a8.947 8.947 0 0 0 3.66.76a8.964 8.964 0 0 0 3.657-.772a8.285 8.285 0 0 0 2.785-2.01a7.428 7.428 0 0 0 1.592-2.762a6.964 6.964 0 0 0 .25-3.074a7.123 7.123 0 0 0-1.016-2.779a7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622a4.282 4.282 0 0 1 .282-3.519a4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706a4.236 4.236 0 0 1-.239 1.811a4.54 4.54 0 0 1-1.035 1.626'
						/>
					</svg>
					Blender
				</div>
			</div>
		</>
	);
}

export default Skills;
