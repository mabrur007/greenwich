import React from "react";
import cityImg from "/assets/home/city.svg";
import logo from "/assets/home/white-logo.png";
import { Facebook, FileDown, Instagram, Linkedin, Mail, MapPinIcon, MessageCircle, Phone, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
	{
		name: "Facebook",
		icon: Facebook,
		url: "https://www.facebook.com/greenwichhillstation",
	},
	{
		name: "Instagram",
		icon: Instagram,
		url: "https://www.instagram.com/greenwich_2024/",
	},
	{
		name: "Twitter (X)",
		icon: FaXTwitter,
		url: "#",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		url: "#",
	},
	{
		name: "YouTube",
		icon: FaYoutube,
		url: "https://www.youtube.com/@GreenwichHillStation",
	},
];

const Footer = () => {
	return (
		<div className="bg-secondary py-12 lg:pt-24 relative">
			<div className="absolute top-12 left-0 w-full overflow-hidden hidden lg:block">
				<img src={cityImg} alt="road" className="h-[500px] object-cover w-full" />
			</div>
			<div className="w-11/12 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 z-10 relative">
					<div>
						<div>
							<Link
								to="/"
								onClick={() => {
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							>
								<img className="w-16 h-16 mb-8" src={logo} alt="logo" />
							</Link>
							<h1 className="text-2xl lg:text-4xl text-[#D2DACE] mb-16">
								Greenwich <br /> Hill Station
							</h1>

							<div>
								<p className="text-white">Project of</p>
								<svg xmlns="http://www.w3.org/2000/svg" width="234" height="56" viewBox="0 0 234 56" fill="none">
									<path
										d="M161.973 0V48L176.127 45.2659L176.097 43.213L163.994 45.5513V2.89725L183.464 10.0624V18.1141L185.485 18.5953V8.65322L161.973 0Z"
										fill="white"
									/>
									<path d="M183.465 43.7423L185.486 43.3443V20.6723L183.465 20.1914V43.7423Z" fill="white" />
									<path d="M178.754 44.7576L183.463 43.742V41.7891L177.164 43.006V45.0647L178.754 44.7576Z" fill="white" />
									<path
										d="M177.164 16.6152V43.0082L179.185 42.6171V19.1745L197.897 23.6299V38.9696L186.523 41.1868V43.1514L199.918 40.6354V22.0339L177.164 16.6152Z"
										fill="white"
									/>
									<path
										d="M22.8376 15.8124C25.2388 15.1646 25.1973 12.6968 25.1973 12.6968V9.4001C25.1973 5.43689 19.8295 5.19336 19.8295 5.19336H0.00585938V27.5834H19.499C23.4218 27.5834 25.4031 25.2753 25.4031 23.5372V18.5728C25.4031 18.2524 25.1973 16.709 22.8376 15.8124ZM4.45198 8.57309H18.5595C18.5595 8.57309 20.9181 8.46164 20.9181 10.346V12.6968C20.9181 13.4137 20.1834 14.2897 18.7281 14.2897H4.45198V8.57309ZM21.1891 22.6056C21.1891 23.329 20.4555 24.2049 18.9986 24.2049H4.45198V17.6901H18.8281C18.8281 17.6901 21.1892 17.5839 21.1892 19.4628L21.1891 22.6056Z"
										fill="white"
									/>
									<path d="M29.3555 5.19531H33.6525V14.0528H51.8218V5.19531H56.1061V27.6838H51.7905V17.4756H33.6525V27.5849H29.3555V5.19531Z" fill="white" />
									<path d="M58.0547 27.6815L73.0251 5.19336H76.252L90.9687 27.6815H86.0454L74.5168 9.71207L62.922 27.6815H58.0547Z" fill="white" />
									<path d="M97.374 5.19531H93.0586V27.6835H97.374V5.19531Z" fill="white" />
									<path
										d="M99.3477 5.19531H105.053L115.937 15.3893L126.898 5.19531H132.433L118.129 18.5875V27.6838H113.857V18.6148L99.3477 5.19531Z"
										fill="white"
									/>
									<path d="M125.209 27.6815L140.194 5.19336H143.431L158.182 27.6815H153.177L141.8 9.67208L130.152 27.6815H125.209Z" fill="white" />
									<path
										d="M63.0228 43.7426V40.2021H58.7741V43.7426H57.793V35.9531H58.7741V39.0513H63.0228V35.9531H64.0039V43.7426H63.0228Z"
										fill="white"
										stroke="white"
										stroke-width="2"
										stroke-miterlimit="10"
									/>
									<path
										d="M66.5582 43.7433C66.3004 43.7505 66.0441 43.7033 65.8058 43.6049C65.608 43.5195 65.4345 43.3866 65.3005 43.2179C65.1657 43.0424 65.0689 42.8407 65.0164 42.6257C64.9549 42.376 64.9251 42.1194 64.9279 41.8622V37.8349C64.9258 37.5796 64.9555 37.325 65.0164 37.077C65.068 36.8601 65.1648 36.6565 65.3005 36.4796C65.4344 36.3108 65.608 36.1777 65.8058 36.0922C66.0441 35.9939 66.3004 35.9468 66.5582 35.9538H69.9883C70.246 35.9468 70.5023 35.9939 70.7407 36.0922C70.9385 36.1777 71.1121 36.3108 71.2461 36.4796C71.3817 36.6565 71.4784 36.8601 71.53 37.077C71.5909 37.325 71.6206 37.5796 71.6185 37.8349V41.8622C71.6213 42.1194 71.5915 42.376 71.53 42.6257C71.4775 42.8407 71.3808 43.0424 71.2461 43.2179C71.1121 43.3866 70.9385 43.5195 70.7407 43.6049C70.5024 43.7033 70.246 43.7505 69.9883 43.7433H66.5582ZM70.6373 37.8236C70.6373 37.3443 70.4209 37.1046 69.9883 37.1047H66.5582C66.1254 37.1047 65.9091 37.3444 65.9091 37.8236V41.8734C65.9091 42.3528 66.1255 42.5926 66.5582 42.5928H69.9883C70.4208 42.5928 70.6371 42.353 70.6373 41.8734V37.8236Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M74.7453 43.7426V37.1041H72.0234V35.9531H78.3746V37.1041H75.7267V43.7426H74.7453Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M79.0273 43.7426V35.9531H84.3679V37.1041H80.0083V39.0513H84.1464V40.2022H80.0083V42.5923H84.3677V43.7428L79.0273 43.7426Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M85.207 43.7426V35.9531H86.1882V42.5921H90.4V43.7426H85.207Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M91.0138 43.7433V42.5928H95.5282C95.9607 42.5928 96.177 42.353 96.1772 41.8734V40.8887C96.1772 40.4093 95.9608 40.1695 95.5282 40.1693H92.4742C92.2165 40.1766 91.9601 40.1294 91.7218 40.031C91.524 39.9456 91.3505 39.8127 91.2166 39.644C91.0816 39.4686 90.9848 39.2668 90.9324 39.0518C90.8709 38.8022 90.8411 38.5458 90.8439 38.2887V37.8349C90.8418 37.5796 90.8715 37.325 90.9324 37.077C90.984 36.8601 91.0808 36.6565 91.2166 36.4796C91.3504 36.3108 91.524 36.1777 91.7218 36.0922C91.9602 35.9939 92.2165 35.9468 92.4742 35.9538H96.8707V37.1047H92.4743C92.0415 37.1047 91.8252 37.3444 91.8253 37.8236V38.2996C91.8253 38.7794 92.0416 39.0191 92.4743 39.0189H95.5283C95.786 39.0117 96.0424 39.0588 96.2807 39.1573C96.4784 39.2426 96.652 39.3756 96.7859 39.5443C96.9215 39.7212 97.0183 39.9248 97.0701 40.1416C97.1309 40.3896 97.1606 40.6442 97.1586 40.8996V41.8623C97.1613 42.1195 97.1316 42.376 97.0701 42.6258C97.0176 42.8408 96.9208 43.0425 96.7859 43.218C96.652 43.3867 96.4784 43.5196 96.2807 43.605C96.0424 43.7034 95.786 43.7505 95.5283 43.7433L91.0138 43.7433Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M103.261 43.7433C102.989 43.752 102.718 43.7049 102.464 43.6049C102.269 43.5242 102.095 43.3971 101.959 43.2344C101.833 43.0771 101.742 42.8939 101.694 42.6978C101.642 42.4897 101.616 42.2759 101.616 42.0613V40.7889C101.598 40.4907 101.664 40.1934 101.808 39.9317C101.924 39.7467 102.094 39.6019 102.295 39.5169C102.194 39.4797 102.102 39.4214 102.025 39.346C101.948 39.2707 101.888 39.1799 101.849 39.0796C101.731 38.8097 101.674 38.5169 101.683 38.2224V37.6358C101.68 37.3986 101.71 37.1621 101.771 36.933C101.823 36.7375 101.917 36.5561 102.048 36.402C102.182 36.2527 102.35 36.1388 102.538 36.0701C102.775 35.9869 103.025 35.9475 103.276 35.9538H105.629V37.1047H103.276C103.19 37.0945 103.103 37.1019 103.02 37.1266C102.937 37.1513 102.859 37.1927 102.793 37.2483C102.695 37.3825 102.649 37.5476 102.664 37.7129V38.388C102.649 38.5534 102.695 38.7184 102.793 38.8526C102.859 38.9083 102.936 38.9498 103.02 38.9745C103.103 38.9993 103.19 39.0068 103.276 38.9967H107.163V40.1472H106.529V43.7432L103.261 43.7433ZM105.548 40.1473H103.261C103.089 40.1394 102.919 40.1924 102.782 40.2969C102.714 40.3631 102.663 40.4438 102.631 40.5328C102.599 40.6218 102.587 40.717 102.598 40.811V41.7851C102.584 41.899 102.593 42.0145 102.624 42.1247C102.656 42.235 102.71 42.3377 102.782 42.4268C102.915 42.5412 103.086 42.6006 103.261 42.5929H105.548V40.1473Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M116.376 43.7433L115.159 40.2691H112.423V43.7433H111.441V35.9538H115.853C116.11 35.9468 116.367 35.994 116.605 36.0922C116.803 36.1778 116.976 36.3109 117.11 36.4796C117.246 36.6565 117.342 36.8601 117.394 37.077C117.455 37.325 117.485 37.5796 117.482 37.8349V38.388C117.498 38.8255 117.396 39.2592 117.187 39.644C117.082 39.8151 116.937 39.9589 116.765 40.0637C116.594 40.1685 116.4 40.2313 116.199 40.247L117.423 43.7433H116.376ZM116.502 37.8236C116.502 37.3442 116.285 37.1046 115.853 37.1047H112.423V39.1182H115.853C116.285 39.1182 116.502 38.8785 116.502 38.3993V37.8236Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M118.271 43.7426V35.9531H123.612V37.1041H119.253V39.0513H123.391V40.2022H119.253V42.5923H123.612V43.7428L118.271 43.7426Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M124.512 43.7433V42.5928H129.026C129.459 42.5928 129.675 42.353 129.675 41.8734V40.8886C129.675 40.4092 129.459 40.1695 129.026 40.1693H125.972C125.714 40.1765 125.458 40.1293 125.22 40.031C125.022 39.9456 124.848 39.8127 124.715 39.644C124.58 39.4686 124.483 39.2669 124.43 39.0518C124.369 38.8022 124.339 38.5458 124.342 38.2887V37.8349C124.34 37.5795 124.37 37.3249 124.43 37.077C124.482 36.86 124.579 36.6564 124.715 36.4796C124.848 36.3108 125.022 36.1777 125.22 36.0922C125.458 35.994 125.715 35.9469 125.972 35.9538H130.368V37.1047H125.972C125.54 37.1047 125.323 37.3444 125.323 37.8236V38.2996C125.323 38.7794 125.54 39.0191 125.972 39.0189H129.026C129.284 39.0117 129.54 39.0588 129.779 39.1573C129.976 39.2427 130.15 39.3757 130.284 39.5443C130.419 39.7213 130.516 39.9248 130.568 40.1416C130.628 40.3896 130.658 40.6442 130.656 40.8995V41.8622C130.659 42.1195 130.629 42.376 130.568 42.6258C130.515 42.8408 130.419 43.0424 130.284 43.218C130.15 43.3866 129.976 43.5195 129.779 43.605C129.54 43.7034 129.284 43.7505 129.026 43.7433L124.512 43.7433Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M133.056 43.7433C132.798 43.7504 132.542 43.7033 132.304 43.6049C132.106 43.5195 131.932 43.3866 131.799 43.2179C131.664 43.0425 131.567 42.8408 131.514 42.6257C131.453 42.376 131.423 42.1194 131.426 41.8622V37.8349C131.424 37.5796 131.454 37.325 131.514 37.077C131.566 36.86 131.663 36.6564 131.799 36.4796C131.932 36.3108 132.106 36.1777 132.304 36.0922C132.542 35.994 132.798 35.9469 133.056 35.9538H136.486C136.744 35.9468 137 35.9939 137.239 36.0922C137.436 36.1778 137.61 36.3108 137.744 36.4796C137.88 36.6566 137.976 36.8601 138.028 37.077C138.089 37.3249 138.119 37.5795 138.117 37.8349V41.8622C138.119 42.1194 138.09 42.376 138.028 42.6257C137.975 42.8407 137.879 43.0424 137.744 43.2179C137.61 43.3865 137.436 43.5194 137.239 43.6049C137 43.7033 136.744 43.7505 136.486 43.7433H133.056ZM137.135 37.8236C137.135 37.3443 136.919 37.1046 136.486 37.1047H133.056C132.623 37.1047 132.407 37.3444 132.407 37.8236V41.8734C132.407 42.3528 132.624 42.5926 133.056 42.5928H136.486C136.919 42.5928 137.135 42.353 137.135 41.8734V37.8236Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M143.972 43.7433L142.755 40.2691H140.018V43.7433H139.037V35.9538H143.448C143.706 35.9468 143.962 35.9939 144.201 36.0922C144.398 36.1778 144.572 36.3109 144.706 36.4796C144.842 36.6566 144.938 36.8601 144.99 37.077C145.051 37.325 145.08 37.5796 145.078 37.8349V38.388C145.094 38.8255 144.992 39.2592 144.783 39.644C144.678 39.8151 144.533 39.959 144.361 40.0637C144.19 40.1685 143.996 40.2313 143.795 40.247L145.019 43.7433H143.972ZM144.097 37.8236C144.097 37.3443 143.881 37.1046 143.448 37.1047H140.018V39.1182H143.448C143.881 39.1182 144.097 38.8785 144.097 38.3993V37.8236Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M148.28 43.7426V37.1041H145.559V35.9531H151.91V37.1041H149.261V43.7426H148.28Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
									<path
										d="M152.426 43.7433V42.5928H156.94C157.373 42.5928 157.589 42.353 157.589 41.8734V40.8886C157.589 40.4092 157.373 40.1695 156.94 40.1693H153.886C153.629 40.1765 153.372 40.1293 153.134 40.031C152.936 39.9456 152.763 39.8127 152.629 39.644C152.494 39.4686 152.397 39.2669 152.345 39.0518C152.283 38.8022 152.253 38.5458 152.256 38.2887V37.8349C152.254 37.5795 152.284 37.3249 152.345 37.077C152.396 36.86 152.493 36.6564 152.629 36.4796C152.762 36.3108 152.936 36.1777 153.134 36.0922C153.372 35.994 153.629 35.9469 153.886 35.9538H158.282V37.1047H153.886C153.453 37.1047 153.237 37.3444 153.237 37.8236V38.2996C153.237 38.7794 153.453 39.0191 153.886 39.0189H156.94C157.198 39.0117 157.454 39.0588 157.693 39.1573C157.89 39.2427 158.064 39.3756 158.198 39.5443C158.333 39.7213 158.43 39.9248 158.482 40.1416C158.543 40.3896 158.572 40.6442 158.57 40.8995V41.8622C158.573 42.1195 158.543 42.376 158.482 42.6258C158.429 42.8407 158.333 43.0424 158.198 43.218C158.064 43.3866 157.89 43.5195 157.693 43.605C157.454 43.7034 157.198 43.7505 156.94 43.7433L152.426 43.7433Z"
										fill="white"
										stroke="white"
										stroke-width="0.259139"
										stroke-miterlimit="10"
									/>
								</svg>

								<div className="mt-6">
									<div className="flex items-center gap-6">
										{socials.map(({ name, icon: Icon, url }, i) => (
											<a
												key={i}
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className="group relative  transition duration-200  flex justify-center items-center"
											>
												{/* Set size inside here */}
												<Icon size={20} className={`text-[#fff] transition-transform duration-300 group-hover:scale-110 `} />
												<span className="absolute bottom-full mb-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
													{name}
												</span>
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
							<div className="flex flex-col gap-4 space-y-10">
								<div>
									<div className="flex items-start gap-2">
										<div>
											<MapPinIcon size={20} className="text-primary" />
										</div>
										<div className="space-y-1">
											<p className="text-primary">Corporate Office</p>
											<p className="text-[#D2DACE] text-sm text-justify">
												Century Trade Center, House-23/C (Level-5th, 6th & 7th) Road-17, Kamal Ataturk Ave, Banani C/A, Banani Model Town, Bangladesh
											</p>
										</div>
									</div>
								</div>

								<div>
									<div className="flex items-start gap-2">
										<div>
											<MapPinIcon size={20} className="text-primary" />
										</div>
										<div className="space-y-1">
											<p className="text-primary">Head Office</p>
											<p className="text-[#D2DACE] text-sm text-justify">
												Sandwip Bhaban, 28/A-3 (Level-6th), Toyenbee Circular Road, Motijheel C/A, Dhaka-1000
											</p>
										</div>
									</div>

									<div></div>
								</div>
							</div>

							<div className="flex flex-col gap-4 space-y-8">
								<div>
									<div className="flex items-start gap-2">
										<Mail size={20} className="text-primary" />
										<div className="space-y-1">
											<p className="text-primary">Email</p>
											<p className="text-[#D2DACE] text-sm">info@greenwichhillstation.com</p>
										</div>
									</div>
								</div>

								<div>
									<div className="flex items-start gap-2">
										<Phone size={20} className="text-primary" />
										<div className="space-y-1">
											<p className="text-primary">Hotline Number</p>
											<p className="text-[#D2DACE] text-sm">019-38886333</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-10">
							<div className="flex items-start gap-2">
								<div>
									<FileDown size={20} className="text-primary" />
								</div>
								<div className="space-y-1">
									<p className="text-primary">Download Brochure</p>
									<div className="flex items-center gap-4">
										{/* PDF Download Button */}
										<a
											href="/home/brochure.pdf"
											download="Greenwich-Brochure.pdf" // The filename for the downloaded file
											className="before:ease cursor-pointer relative px-6 py-[10px] overflow-hidden text-[#98643E] bg-[#F6F1ED]   before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#98643E] before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180"
										>
											<p className="relative z-20">Download</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-24 text-center z-10 relative border-t border-[#D2DACE] pt-4">
				<div className="flex items-center gap-4 justify-between w-11/12 mx-auto">
					<p className="text-[#D2DACE] text-sm">
						Copyright © 2025 <span className="text-primary">Greenwich Hill Station</span>. All rights reserved.
					</p>

					<p className="text-[#D2DACE] text-sm">
						Developed by:{" "}
						<a
							href="https://nexkraft.com"
							rel="noopener noreferrer"
							className="text-primary hover:underline hover:text-[#98643E] transition-colors duration-300 cursor-pointer"
						>
							Nexkraft Limited
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
