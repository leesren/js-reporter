export function stringTools() {
	// 7
 
		function i(e, t) {
			var n = (65535 & e) + (65535 & t);
			return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
		}
		function a(e, t, n, r, o, a) {
			return i(
				(function (e, t) {
					return (e << o) | (e >>> (32 - o));
				})(i(i(t, e), i(r, a))),
				n,
			);
		}
		function s(e, t, n, r, o, i, s) {
			return a((t & n) | (~t & r), e, t, o, i, s);
		}
		function c(e, t, n, r, o, i, s) {
			return a((t & r) | (n & ~r), e, t, o, i, s);
		}
		function u(e, t, n, r, o, i, s) {
			return a(t ^ n ^ r, e, t, o, i, s);
		}
		function l(e, t, n, r, o, i, s) {
			return a(n ^ (t | ~r), e, t, o, i, s);
		}
		function f(e, t) {
			var n, r, o, a, f;
			(e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
			var d = 1732584193,
				p = -271733879,
				h = -1732584194,
				g = 271733878;
			for (n = 0; n < e.length; n += 16)
				(p = l(
					(p = l(
						(p = l(
							(p = l(
								(p = u(
									(p = u(
										(p = u(
											(p = u(
												(p = c(
													(p = c(
														(p = c(
															(p = c(
																(p = s(
																	(p = s(
																		(p = s(
																			(p = s(
																				(o = p),
																				(h = s(
																					(a = h),
																					(g = s(
																						(f = g),
																						(d = s(
																							(r = d),
																							p,
																							h,
																							g,
																							e[n],
																							7,
																							-680876936,
																						)),
																						p,
																						h,
																						e[n + 1],
																						12,
																						-389564586,
																					)),
																					d,
																					p,
																					e[n + 2],
																					17,
																					606105819,
																				)),
																				g,
																				d,
																				e[n + 3],
																				22,
																				-1044525330,
																			)),
																			(h = s(
																				h,
																				(g = s(
																					g,
																					(d = s(
																						d,
																						p,
																						h,
																						g,
																						e[n + 4],
																						7,
																						-176418897,
																					)),
																					p,
																					h,
																					e[n + 5],
																					12,
																					1200080426,
																				)),
																				d,
																				p,
																				e[n + 6],
																				17,
																				-1473231341,
																			)),
																			g,
																			d,
																			e[n + 7],
																			22,
																			-45705983,
																		)),
																		(h = s(
																			h,
																			(g = s(
																				g,
																				(d = s(
																					d,
																					p,
																					h,
																					g,
																					e[n + 8],
																					7,
																					1770035416,
																				)),
																				p,
																				h,
																				e[n + 9],
																				12,
																				-1958414417,
																			)),
																			d,
																			p,
																			e[n + 10],
																			17,
																			-42063,
																		)),
																		g,
																		d,
																		e[n + 11],
																		22,
																		-1990404162,
																	)),
																	(h = s(
																		h,
																		(g = s(
																			g,
																			(d = s(
																				d,
																				p,
																				h,
																				g,
																				e[n + 12],
																				7,
																				1804603682,
																			)),
																			p,
																			h,
																			e[n + 13],
																			12,
																			-40341101,
																		)),
																		d,
																		p,
																		e[n + 14],
																		17,
																		-1502002290,
																	)),
																	g,
																	d,
																	e[n + 15],
																	22,
																	1236535329,
																)),
																(h = c(
																	h,
																	(g = c(
																		g,
																		(d = c(
																			d,
																			p,
																			h,
																			g,
																			e[n + 1],
																			5,
																			-165796510,
																		)),
																		p,
																		h,
																		e[n + 6],
																		9,
																		-1069501632,
																	)),
																	d,
																	p,
																	e[n + 11],
																	14,
																	643717713,
																)),
																g,
																d,
																e[n],
																20,
																-373897302,
															)),
															(h = c(
																h,
																(g = c(
																	g,
																	(d = c(
																		d,
																		p,
																		h,
																		g,
																		e[n + 5],
																		5,
																		-701558691,
																	)),
																	p,
																	h,
																	e[n + 10],
																	9,
																	38016083,
																)),
																d,
																p,
																e[n + 15],
																14,
																-660478335,
															)),
															g,
															d,
															e[n + 4],
															20,
															-405537848,
														)),
														(h = c(
															h,
															(g = c(
																g,
																(d = c(d, p, h, g, e[n + 9], 5, 568446438)),
																p,
																h,
																e[n + 14],
																9,
																-1019803690,
															)),
															d,
															p,
															e[n + 3],
															14,
															-187363961,
														)),
														g,
														d,
														e[n + 8],
														20,
														1163531501,
													)),
													(h = c(
														h,
														(g = c(
															g,
															(d = c(
																d,
																p,
																h,
																g,
																e[n + 13],
																5,
																-1444681467,
															)),
															p,
															h,
															e[n + 2],
															9,
															-51403784,
														)),
														d,
														p,
														e[n + 7],
														14,
														1735328473,
													)),
													g,
													d,
													e[n + 12],
													20,
													-1926607734,
												)),
												(h = u(
													h,
													(g = u(
														g,
														(d = u(d, p, h, g, e[n + 5], 4, -378558)),
														p,
														h,
														e[n + 8],
														11,
														-2022574463,
													)),
													d,
													p,
													e[n + 11],
													16,
													1839030562,
												)),
												g,
												d,
												e[n + 14],
												23,
												-35309556,
											)),
											(h = u(
												h,
												(g = u(
													g,
													(d = u(d, p, h, g, e[n + 1], 4, -1530992060)),
													p,
													h,
													e[n + 4],
													11,
													1272893353,
												)),
												d,
												p,
												e[n + 7],
												16,
												-155497632,
											)),
											g,
											d,
											e[n + 10],
											23,
											-1094730640,
										)),
										(h = u(
											h,
											(g = u(
												g,
												(d = u(d, p, h, g, e[n + 13], 4, 681279174)),
												p,
												h,
												e[n],
												11,
												-358537222,
											)),
											d,
											p,
											e[n + 3],
											16,
											-722521979,
										)),
										g,
										d,
										e[n + 6],
										23,
										76029189,
									)),
									(h = u(
										h,
										(g = u(
											g,
											(d = u(d, p, h, g, e[n + 9], 4, -640364487)),
											p,
											h,
											e[n + 12],
											11,
											-421815835,
										)),
										d,
										p,
										e[n + 15],
										16,
										530742520,
									)),
									g,
									d,
									e[n + 2],
									23,
									-995338651,
								)),
								(h = l(
									h,
									(g = l(
										g,
										(d = l(d, p, h, g, e[n], 6, -198630844)),
										p,
										h,
										e[n + 7],
										10,
										1126891415,
									)),
									d,
									p,
									e[n + 14],
									15,
									-1416354905,
								)),
								g,
								d,
								e[n + 5],
								21,
								-57434055,
							)),
							(h = l(
								h,
								(g = l(
									g,
									(d = l(d, p, h, g, e[n + 12], 6, 1700485571)),
									p,
									h,
									e[n + 3],
									10,
									-1894986606,
								)),
								d,
								p,
								e[n + 10],
								15,
								-1051523,
							)),
							g,
							d,
							e[n + 1],
							21,
							-2054922799,
						)),
						(h = l(
							h,
							(g = l(
								g,
								(d = l(d, p, h, g, e[n + 8], 6, 1873313359)),
								p,
								h,
								e[n + 15],
								10,
								-30611744,
							)),
							d,
							p,
							e[n + 6],
							15,
							-1560198380,
						)),
						g,
						d,
						e[n + 13],
						21,
						1309151649,
					)),
					(h = l(
						h,
						(g = l(
							g,
							(d = l(d, p, h, g, e[n + 4], 6, -145523070)),
							p,
							h,
							e[n + 11],
							10,
							-1120210379,
						)),
						d,
						p,
						e[n + 2],
						15,
						718787259,
					)),
					g,
					d,
					e[n + 9],
					21,
					-343485551,
				)),
					(d = i(d, r)),
					(p = i(p, o)),
					(h = i(h, a)),
					(g = i(g, f));
			return [d, p, h, g];
		}
		function d(e) {
			var t,
				n = '',
				r = 32 * e.length;
			for (t = 0; t < r; t += 8)
				n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
			return n;
		}
		function p(e) {
			var t,
				n:any = [];
			for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
				n[t] = 0;
			var r = 8 * e.length;
			for (t = 0; t < r; t += 8)
				n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
			return n;
		}
		function h(e) {
			var t,
				n,
				r = '0123456789abcdef',
				o = '';
			for (n = 0; n < e.length; n += 1)
				(t = e.charCodeAt(n)),
					(o += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
			return o;
		}
		function g(e) {
			return unescape(encodeURIComponent(e));
		}
		function w(e) {
			return (function (e) {
				return d(f(p(e), 8 * e.length));
			})(g(e));
		}
		function v(e, t) {
			return (function (e, t) {
				var n,
					r,
					o = p(e),
					i:any = [],
					a:any = [];
				for (
					i[15] = a[15] = void 0,
					16 < o.length && (o = f(o, 8 * e.length)),
					n = 0;
					n < 16;
					n += 1
				)
					(i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]);
				return (
					(r = f(i.concat(p(t)), 512 + 8 * t.length)),
					d(f(a.concat(r), 640))
				);
			})(g(e), g(t));
		}
		
		return function m(e, t, n) {
			return t
				? n
					? v(t, e)
					: (function (e, t) {
						return h(v(e, t));
					})(t, e)
				: n
					? w(e)
					: (function (e) {
						return h(w(e));
					})(e);
		} 
	 
}