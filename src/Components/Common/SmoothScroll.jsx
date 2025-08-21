import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			// smoothness type One
			// duration: 1.2,
			// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			// smoothness type Two
			duration: 1.5,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smooth: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
