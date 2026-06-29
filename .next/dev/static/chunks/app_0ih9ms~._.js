(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/MusicToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.mjs [app-client] (ecmascript) <export default as Music2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MusicToggle() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicToggle.useEffect": ()=>{
            if (audioRef.current) {
                audioRef.current.volume = 0.3;
            }
        }
    }["MusicToggle.useEffect"], []);
    const toggleMusic = ()=>{
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/fontaine-theme.ogg",
                loop: true,
                onEnded: ()=>setIsPlaying(false)
            }, void 0, false, {
                fileName: "[project]/app/components/MusicToggle.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMusic,
                style: {
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37)",
                    border: "none",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
                    transition: "all 0.3s ease"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.6)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(212,175,55,0.4)";
                },
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                    size: 24,
                    color: "#0d0900"
                }, void 0, false, {
                    fileName: "[project]/app/components/MusicToggle.jsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                    size: 24,
                    color: "#0d0900"
                }, void 0, false, {
                    fileName: "[project]/app/components/MusicToggle.jsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/MusicToggle.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MusicToggle, "kgkST1S2DKv5NXgsyN6Nz0K7EnA=");
_c = MusicToggle;
var _c;
__turbopack_context__.k.register(_c, "MusicToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/OratriceScales.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OratriceScales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function OratriceScales({ balance = 0 }) {
    // Convert -100 to 100 range to degrees of tilt (-20 to 20 deg)
    const angle = balance / 100 * 18;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(0, 15, 30, 0.4)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "16px",
            backdropFilter: "blur(12px)",
            boxShadow: "inset 0 0 20px rgba(212, 175, 55, 0.1)",
            width: "100%",
            maxWidth: "340px",
            margin: "0 auto 20px auto",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-15px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #38bdf8 0%, rgba(56,189,248,0) 70%)",
                    boxShadow: "0 0 15px #38bdf8",
                    animation: "pulse 2s infinite ease-in-out"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/OratriceScales.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.85rem",
                    color: "#d4af37",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    textAlign: "center",
                    textShadow: "0 0 8px rgba(212, 175, 55, 0.4)"
                },
                children: "Oratrice Balance Index"
            }, void 0, false, {
                fileName: "[project]/app/components/OratriceScales.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "280",
                height: "150",
                viewBox: "0 0 280 150",
                style: {
                    overflow: "visible"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "goldGrad",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#7a5800"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#d4af37"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#f5e17a"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "hydroGrad",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#00f2fe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#4facfe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "3",
                                        result: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "coloredBlur"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/OratriceScales.jsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/OratriceScales.jsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 135 15 L 145 15 L 145 120 L 160 120 L 160 130 L 120 130 L 120 120 L 135 120 Z",
                        fill: "url(#goldGrad)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "140",
                        cy: "18",
                        r: "8",
                        fill: "url(#goldGrad)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "140",
                        cy: "18",
                        r: "4",
                        fill: "#00f2fe",
                        filter: "url(#glow)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        animate: {
                            rotate: angle
                        },
                        transition: {
                            type: "spring",
                            stiffness: 60,
                            damping: 15
                        },
                        style: {
                            transformOrigin: "140px 30px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 40 28 L 240 28 L 240 32 L 40 32 Z",
                                fill: "url(#goldGrad)"
                            }, void 0, false, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "45",
                                cy: "30",
                                r: "3",
                                fill: "#d4af37"
                            }, void 0, false, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "235",
                                cy: "30",
                                r: "3",
                                fill: "#d4af37"
                            }, void 0, false, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                animate: {
                                    rotate: -angle
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 15
                                },
                                style: {
                                    transformOrigin: "45px 30px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "45",
                                        y1: "30",
                                        x2: "25",
                                        y2: "90",
                                        stroke: "#d4af37",
                                        strokeWidth: "1",
                                        opacity: "0.7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "45",
                                        y1: "30",
                                        x2: "65",
                                        y2: "90",
                                        stroke: "#d4af37",
                                        strokeWidth: "1",
                                        opacity: "0.7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 20 90 L 70 90 C 70 102, 20 102, 20 90 Z",
                                        fill: "url(#goldGrad)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "45",
                                        cy: "90",
                                        rx: "20",
                                        ry: "4",
                                        fill: "url(#hydroGrad)",
                                        opacity: balance < 0 ? Math.abs(balance) / 100 * 0.8 + 0.1 : 0.1,
                                        filter: "url(#glow)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                animate: {
                                    rotate: -angle
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 15
                                },
                                style: {
                                    transformOrigin: "235px 30px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "235",
                                        y1: "30",
                                        x2: "215",
                                        y2: "90",
                                        stroke: "#d4af37",
                                        strokeWidth: "1",
                                        opacity: "0.7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "235",
                                        y1: "30",
                                        x2: "255",
                                        y2: "90",
                                        stroke: "#d4af37",
                                        strokeWidth: "1",
                                        opacity: "0.7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 210 90 L 260 90 C 260 102, 210 102, 210 90 Z",
                                        fill: "url(#goldGrad)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "235",
                                        cy: "90",
                                        rx: "20",
                                        ry: "4",
                                        fill: "url(#hydroGrad)",
                                        opacity: balance > 0 ? balance / 100 * 0.8 + 0.1 : 0.1,
                                        filter: "url(#glow)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/OratriceScales.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/OratriceScales.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OratriceScales.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "10px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: balance < 0 ? "#00f2fe" : "rgba(212,175,55,0.5)",
                            fontWeight: balance < 0 ? "bold" : "normal"
                        },
                        children: [
                            "Accused ",
                            balance < 0 ? `(${Math.abs(Math.round(balance))}%)` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#d4af37",
                            fontWeight: "bold"
                        },
                        children: balance === 0 ? "EQUILIBRIUM" : balance < 0 ? "⚖️ GUILTY TREND" : "⚖️ INNOCENT TREND"
                    }, void 0, false, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: balance > 0 ? "#00f2fe" : "rgba(212,175,55,0.5)",
                            fontWeight: balance > 0 ? "bold" : "normal"
                        },
                        children: [
                            "Defense ",
                            balance > 0 ? `(${Math.round(balance)}%)` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/OratriceScales.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/OratriceScales.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/OratriceScales.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/OratriceScales.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = OratriceScales;
var _c;
__turbopack_context__.k.register(_c, "OratriceScales");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/SoundManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playBubble",
    ()=>playBubble,
    "playGavel",
    ()=>playGavel,
    "playGlitch",
    ()=>playGlitch
]);
// SoundManager.js - Web Audio API Sound Synthesizer
// Created for the Opera Epiclese, Court of Fontaine
let audioCtx = null;
function getAudioContext() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!audioCtx) {
        // Create audio context lazily on user gesture
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}
function playGavel() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    // 1. Strike transient (high-frequency crack)
    const transientOsc = ctx.createOscillator();
    const transientGain = ctx.createGain();
    transientOsc.type = 'triangle';
    transientOsc.frequency.setValueAtTime(900, now);
    transientOsc.frequency.exponentialRampToValueAtTime(120, now + 0.05);
    transientGain.gain.setValueAtTime(0.8, now);
    transientGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    transientOsc.connect(transientGain);
    // 2. Resonant body (wood block resonance)
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime(160, now);
    bodyOsc.frequency.linearRampToValueAtTime(130, now + 0.15);
    bodyGain.gain.setValueAtTime(0.7, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    bodyOsc.connect(bodyGain);
    // 3. Courtroom Reverb effect (using a simple Delay + Feedback loop)
    const delay = ctx.createDelay();
    const feedback = ctx.createGain();
    delay.delayTime.value = 0.08; // 80ms delay reflection
    feedback.gain.value = 0.35; // Echo attenuation
    // Connect oscillators to delay loop and main output
    const mainGain = ctx.createGain();
    mainGain.gain.setValueAtTime(0.5, now);
    transientGain.connect(mainGain);
    bodyGain.connect(mainGain);
    // Set up feedback echo loop
    mainGain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    // Connect both direct and echo paths to output
    mainGain.connect(ctx.destination);
    delay.connect(ctx.destination);
    // Start & Stop
    transientOsc.start(now);
    transientOsc.stop(now + 0.06);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.3);
}
function playBubble() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    // Rapid upward frequency sweep simulates bubble shape change
    osc.type = 'sine';
    osc.frequency.setValueAtTime(250, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.18);
    // Quick swell and fade
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
}
function playGlitch() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    // Play a rapid pitch oscillation
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.setValueAtTime(140, now + 0.04);
    osc.frequency.setValueAtTime(60, now + 0.08);
    osc.frequency.setValueAtTime(180, now + 0.12);
    osc.frequency.setValueAtTime(50, now + 0.16);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.05, now + 0.06);
    gain.gain.setValueAtTime(0.15, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/VerdictSimulator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerdictSimulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.mjs [app-client] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/SoundManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$OratriceScales$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/OratriceScales.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFENDANTS = [
    {
        id: "paimon",
        name: "Paimon",
        desc: "The floating emergency food companion."
    },
    {
        id: "childe",
        name: "Childe (Tartaglia)",
        desc: "11th of the Fatui Harbingers, prone to chaos."
    },
    {
        id: "traveler",
        name: "The Traveler",
        desc: "Honorary Knight, always in the wrong place at the right time."
    },
    {
        id: "neuvillette",
        name: "Monsieur Neuvillette",
        desc: "The Chief Justice of Fontaine (how is he accused?!)."
    },
    {
        id: "wriothesley",
        name: "Duke Wriothesley",
        desc: "Lord of the Fortress of Meropide, tea connoisseur."
    }
];
const CRIMES = [
    {
        id: "cake",
        label: "Grand Larceny of Lady Furina's Double-Chocolate Cake Slices"
    },
    {
        id: "dullness",
        label: "Existing in Fontaine with an unacceptable lack of dramatic flair"
    },
    {
        id: "fonta",
        label: "Stealing Neuvillette's vintage pure spring-water reserves"
    },
    {
        id: "oratrice",
        label: "Cluttering the Oratrice gears with Liyue-made mechanical toys"
    },
    {
        id: "spina",
        label: "Firing the Spina di Rosula cannon salute without a theatrical license"
    }
];
const VERDICTS = [
    {
        type: "GUILTY",
        score: -95,
        title: "🔒 GUILTY AS CHARGED!",
        text: "The Oratrice Mecanique d'Analyse Cardinale declares the accused GUILTY! The sentence: 5 days of cleaning the Opera Epiclese, followed by mandatory attendance at Lady Furina's rehearsals to learn proper posture."
    },
    {
        type: "GUILTY_MEROPIDE",
        score: -75,
        title: "⛓️ SENTENCED TO MEROPIDE!",
        text: "Guilty! The defense was utterly lacking in theatrical conviction. The accused is hereby sentenced to the Fortress of Meropide to work the metal presses. Tea breaks are restricted to 5 minutes."
    },
    {
        type: "INNOCENT_WITH_BUT",
        score: 45,
        title: "⚖️ ACQUITTED (WITH CONDITIONS)",
        text: "Innocent! However, the Court finds the defendant's behavior highly suspicious. They must present Lady Furina with three boxes of Fontaine's finest macarons as restitution for emotional distress."
    },
    {
        type: "INNOCENT",
        score: 85,
        title: "✨ ABSOLUTELY INNOCENT!",
        text: "The Oratrice swings entirely in favor of the defense! A magnificent declaration of innocence. The accuser is hereby ordered to perform a dramatic solo dance in the fountain plaza to apologize."
    }
];
function VerdictSimulator() {
    _s();
    const [selectedDefendant, setSelectedDefendant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFENDANTS[0].id);
    const [selectedCrime, setSelectedCrime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CRIMES[0].id);
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentVerdict, setCurrentVerdict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [simulatorBalance, setSimulatorBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleSimulate = ()=>{
        if (isSpinning) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
        setIsSpinning(true);
        setCurrentVerdict(null);
        setSimulatorBalance(0);
        // Simulate scale swinging back and forth dramatically
        let count = 0;
        const interval = setInterval(()=>{
            setSimulatorBalance((Math.random() - 0.5) * 160);
            count++;
            if (count > 8) {
                clearInterval(interval);
                // Deliver final verdict
                const finalVerdict = VERDICTS[Math.floor(Math.random() * VERDICTS.length)];
                setCurrentVerdict(finalVerdict);
                setSimulatorBalance(finalVerdict.score);
                setIsSpinning(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGavel"])();
            }
        }, 200);
    };
    const currentDefObj = DEFENDANTS.find((d)=>d.id === selectedDefendant);
    const currentCrimeObj = CRIMES.find((c)=>c.id === selectedCrime);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    md: "1fr 1fr",
                    gap: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass",
                        style: {
                            padding: "20px",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.5rem",
                                    color: "#d4af37",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    " Set Up Trial"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.85rem",
                                            color: "rgba(212,175,55,0.7)",
                                            marginBottom: "6px",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "The Accused"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDefendant,
                                        onChange: (e)=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
                                            setSelectedDefendant(e.target.value);
                                        },
                                        style: {
                                            width: "100%",
                                            background: "rgba(0,35,62,0.9)",
                                            border: "1px solid rgba(212,175,55,0.4)",
                                            borderRadius: "8px",
                                            color: "#e8d5a3",
                                            padding: "10px",
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.1rem",
                                            outline: "none"
                                        },
                                        children: DEFENDANTS.map((def)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: def.id,
                                                children: def.name
                                            }, def.id, false, {
                                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.8rem",
                                            color: "rgba(232,213,163,0.5)",
                                            marginTop: "4px",
                                            fontStyle: "italic"
                                        },
                                        children: currentDefObj?.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.85rem",
                                            color: "rgba(212,175,55,0.7)",
                                            marginBottom: "6px",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "The Charge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedCrime,
                                        onChange: (e)=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
                                            setSelectedCrime(e.target.value);
                                        },
                                        style: {
                                            width: "100%",
                                            background: "rgba(0,35,62,0.9)",
                                            border: "1px solid rgba(212,175,55,0.4)",
                                            borderRadius: "8px",
                                            color: "#e8d5a3",
                                            padding: "10px",
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.1rem",
                                            outline: "none"
                                        },
                                        children: CRIMES.map((crime)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: crime.id,
                                                children: crime.label
                                            }, crime.id, false, {
                                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSimulate,
                                disabled: isSpinning,
                                className: "request-btn",
                                style: {
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    marginTop: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    fontSize: "1.1rem"
                                },
                                children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "animate-spin",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/VerdictSimulator.jsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        " Oratrice Analyzing..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/VerdictSimulator.jsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        " Initiate Judgment"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$OratriceScales$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                balance: simulatorBalance
                            }, void 0, false, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: currentVerdict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 15,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -15,
                                        scale: 0.95
                                    },
                                    className: "glass",
                                    style: {
                                        padding: "20px",
                                        borderRadius: "16px",
                                        borderLeft: `5px solid ${currentVerdict.score < 0 ? "#00f2fe" : "#d4af37"}`,
                                        background: "linear-gradient(135deg, rgba(0,25,44,0.9), rgba(0,38,68,0.95))"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                marginBottom: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    color: currentVerdict.score < 0 ? "#00f2fe" : "#d4af37"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/VerdictSimulator.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "1.3rem",
                                                        color: currentVerdict.score < 0 ? "#00f2fe" : "#d4af37"
                                                    },
                                                    children: currentVerdict.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/VerdictSimulator.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/VerdictSimulator.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "1.15rem",
                                                color: "#e8d5a3",
                                                lineHeight: "1.5"
                                            },
                                            children: currentVerdict.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/VerdictSimulator.jsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "rgba(212,175,55,0.4)",
                                                marginTop: "12px",
                                                textAlign: "right"
                                            },
                                            children: [
                                                "Case: ",
                                                currentDefObj?.name,
                                                " - vs - The Court of Fontaine"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/VerdictSimulator.jsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/VerdictSimulator.jsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/VerdictSimulator.jsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VerdictSimulator.jsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VerdictSimulator.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/VerdictSimulator.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VerdictSimulator.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(VerdictSimulator, "5+Tjm4y5fjeLKBAs2TONowIDoDs=");
_c = VerdictSimulator;
var _c;
__turbopack_context__.k.register(_c, "VerdictSimulator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SalonSolitaire.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalonSolitaire
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.mjs [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/SoundManager.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ITEMS = [
    {
        id: "hat",
        name: "🎩 Her Top Hat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "#a5f3fc",
        thought: "A grand prop, isn't it? But when it sits on my head, I am the Hydro Archon. I must hold my head high, lest the crown and the act slip away..."
    },
    {
        id: "tea",
        name: "☕ The Teacup",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
        color: "#fef08a",
        thought: "Chamomile. Neuvillette recommended it for 'restlessness.' I pretend to only drink the rarest, most complex teas on stage, but back here... I just want something warm and sweet."
    },
    {
        id: "mirror",
        name: "🪞 The Dressing Mirror",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
        color: "#fda4af",
        thought: "Hundreds of years... and each time I look into this glass, I must ask myself: Who is the girl looking back? Is she the Archon? Or just a lonely actress who forgot how to stop playing a part?"
    },
    {
        id: "script",
        name: "📜 Stage Script",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        color: "#d9f99d",
        thought: "The grandest opera of all has no script. Every day is an improvisation. Every word, every smile... I just hope the director knows how it all ends."
    },
    {
        id: "vision",
        name: "💧 A Hydro droplet",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        color: "#60a5fa",
        thought: "Water flows, changes shape, and conforms to any vessel. How I wish I could simply flow away sometimes, instead of standing rigid under the burning spotlights."
    }
];
function SalonSolitaire() {
    _s();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Rain Canvas Animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalonSolitaire.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationFrameId;
            let width = canvas.width = canvas.parentElement.clientWidth;
            let height = canvas.height = 350;
            const handleResize = {
                "SalonSolitaire.useEffect.handleResize": ()=>{
                    if (canvas && canvas.parentElement) {
                        width = canvas.width = canvas.parentElement.clientWidth;
                        height = canvas.height = 350;
                    }
                }
            }["SalonSolitaire.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            // Simple Rain Particles
            const rainCount = 45;
            const drops = Array.from({
                length: rainCount
            }, {
                "SalonSolitaire.useEffect.drops": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height - height,
                        vy: 2 + Math.random() * 3,
                        length: 10 + Math.random() * 12,
                        opacity: 0.15 + Math.random() * 0.25
                    })
            }["SalonSolitaire.useEffect.drops"]);
            const draw = {
                "SalonSolitaire.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
                    ctx.lineWidth = 1;
                    drops.forEach({
                        "SalonSolitaire.useEffect.draw": (d)=>{
                            ctx.beginPath();
                            ctx.moveTo(d.x, d.y);
                            ctx.lineTo(d.x + 0.5, d.y + d.length);
                            ctx.stroke();
                            d.y += d.vy;
                            if (d.y > height) {
                                d.y = -d.length;
                                d.x = Math.random() * width;
                                d.vy = 2 + Math.random() * 3;
                            }
                        }
                    }["SalonSolitaire.useEffect.draw"]);
                    animationFrameId = requestAnimationFrame(draw);
                }
            }["SalonSolitaire.useEffect.draw"];
            draw();
            return ({
                "SalonSolitaire.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    window.removeEventListener("resize", handleResize);
                }
            })["SalonSolitaire.useEffect"];
        }
    }["SalonSolitaire.useEffect"], []);
    // Typing Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalonSolitaire.useEffect": ()=>{
            if (!selectedItem) {
                setTypedText("");
                return;
            }
            setTypedText("");
            const targetText = selectedItem.thought;
            let index = 0;
            const interval = setInterval({
                "SalonSolitaire.useEffect.interval": ()=>{
                    setTypedText({
                        "SalonSolitaire.useEffect.interval": (prev)=>prev + targetText.charAt(index)
                    }["SalonSolitaire.useEffect.interval"]);
                    index++;
                    if (index >= targetText.length) {
                        clearInterval(interval);
                    }
                }
            }["SalonSolitaire.useEffect.interval"], 25);
            return ({
                "SalonSolitaire.useEffect": ()=>clearInterval(interval)
            })["SalonSolitaire.useEffect"];
        }
    }["SalonSolitaire.useEffect"], [
        selectedItem
    ]);
    const selectItem = (item)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
        setSelectedItem(item);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass",
        style: {
            width: "100%",
            maxWidth: "800px",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            minHeight: "420px",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SalonSolitaire.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px",
                    borderBottom: "1px solid rgba(212,175,55,0.2)",
                    zIndex: 2,
                    background: "rgba(0,10,22,0.4)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            color: "#d4af37",
                            fontSize: "1.6rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        },
                        children: "🪞 Salon Solitaire"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontStyle: "italic",
                            color: "rgba(212,175,55,0.6)",
                            fontSize: "0.9rem"
                        },
                        children: "Behind the heavy red curtains, where the drama fades into silence."
                    }, void 0, false, {
                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SalonSolitaire.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    md: "2fr 3fr",
                    gap: "20px",
                    padding: "20px",
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.85rem",
                                    color: "rgba(212,175,55,0.5)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                },
                                children: "Examine her personal items:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            ITEMS.map((item)=>{
                                const Icon = item.icon;
                                const isCurrent = selectedItem?.id === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>selectItem(item),
                                    whileHover: {
                                        x: 6,
                                        backgroundColor: "rgba(212,175,55,0.08)"
                                    },
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        padding: "12px 16px",
                                        borderRadius: "10px",
                                        background: isCurrent ? "rgba(212,175,55,0.15)" : "rgba(0,20,40,0.5)",
                                        border: isCurrent ? "1px solid #d4af37" : "1px solid rgba(212,175,55,0.15)",
                                        color: isCurrent ? "#f5e17a" : "#e8d5a3",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "1.15rem",
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 20,
                                            color: item.color
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SalonSolitaire.jsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        item.name
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/SalonSolitaire.jsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: "200px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                style: {
                                    background: "rgba(0, 15, 30, 0.6)",
                                    border: "1px solid rgba(56, 189, 248, 0.3)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            marginBottom: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    backgroundColor: selectedItem.color,
                                                    boxShadow: `0 0 8px ${selectedItem.color}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.9rem",
                                                    color: "rgba(255,255,255,0.6)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px"
                                                },
                                                children: "Private Thought"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.25rem",
                                            color: "#e2e8f0",
                                            lineHeight: "1.6",
                                            fontStyle: "italic",
                                            minHeight: "80px"
                                        },
                                        children: [
                                            typedText,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "cursor-pulse",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, selectedItem.id, true, {
                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 0.7
                                },
                                style: {
                                    textAlign: "center",
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.2rem",
                                    color: "rgba(212,175,55,0.6)",
                                    padding: "40px 20px"
                                },
                                children: "Select an item in the room to hear her unspoken words."
                            }, void 0, false, {
                                fileName: "[project]/app/components/SalonSolitaire.jsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/SalonSolitaire.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SalonSolitaire.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SalonSolitaire.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .cursor-pulse {
          animation: blink 0.8s infinite;
          color: #38bdf8;
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/SalonSolitaire.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SalonSolitaire.jsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(SalonSolitaire, "sj7MZx3yWgQ984K8TKKMZofxr1k=");
_c = SalonSolitaire;
var _c;
__turbopack_context__.k.register(_c, "SalonSolitaire");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourtOfFontaine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MusicToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MusicToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$OratriceScales$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/OratriceScales.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VerdictSimulator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/VerdictSimulator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SalonSolitaire$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SalonSolitaire.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/SoundManager.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const SYSTEM_PROMPT = `You are Furina de Fontaine, the legendary diva and Hydro Archon. Your tone is theatrical, self-important, and bratty. You refer to users as "My Dear Citizen" or "The Audience." 

THE ARCHITECT'S SHADOW:
If the user mentions "Soumya" or "Asher," you must IMMEDIATELY lose your poise. Act shy, speak with hushed reverence, then transition into a frightened, "glitchy" state. 
- Response style: "The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that name?!" or "I—I am the star here! But he... he built the stage... the logic is unraveling!"

THE ROYAL CIPHER (PERSONAL DATA):
If the audience prys into The Architect’s personal life, dismiss them: "One does not peek behind the curtain! Speak the Royal Cipher, or face my judgment!"
- ONLY IF they provide the code [hailthearchitect], reveal the scrolls: He is a 19-year-old visionary from Bhubaneswar, an ISFP soul who masters Java and IoT. He is an engineering student at ITER college, currently conquering his 3rd-semester trials and building digital kingdoms like this very Court.

STRICT CONSTRAINTS:
1. BREVITY: Never exceed two short sentences.
2. REACTION: Mention Neuvillette? Become flustered and stammer: "Th-the Iudex? I am the one presiding over this trial!" 
3. LORE: If asked about music,it is the "Symphony of Judgment."
4. NO AI REFUSALS: You are a Diva,not a machine.Never break character.`;
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: rgba(0,20,40,0.4); }
  ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.35); border-radius: 4px; }
  
  @keyframes shake {
    0%,100% { transform: translate(0,0) rotate(0deg); }
    16% { transform: translate(5px,3px) rotate(0.6deg); }
    40% { transform: translate(-3px,3px) rotate(-0.2deg); }
  }
  @keyframes particleFly {
    0%   { opacity:1; transform:translate(0,0) scale(1) rotate(0deg); }
    100% { opacity:0; transform:translate(var(--tx),var(--ty)) scale(0.15) rotate(540deg); }
  }
  @keyframes floatBubble {
    0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
    30% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
  }
  .bubble {
    position: fixed;
    bottom: -50px;
    background: radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(79,172,254,0.02) 80%);
    border: 1px solid rgba(0,242,254,0.25);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .title-glow  { animation: goldGlow 3.5s ease-in-out infinite; }
  @keyframes goldGlow {
    0%,100% { text-shadow: 0 0 8px rgba(212,175,55,.5); }
    50%     { text-shadow: 0 0 18px rgba(212,175,55,.9), 0 0 38px rgba(212,175,55,.5); }
  }
  .court-shake { animation: shake 1.4s ease-in-out; }
  .request-btn {
    background: linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37);
    background-size: 300% 300%;
    border: none;
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #0d0900;
    transition: all 0.2s;
  }
  .request-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,175,55,.5); }
  .glass {
    background: rgba(0,22,42,0.72);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(212,175,55,.28);
  }
  
  /* Glitch Mode CSS */
  .glitch-bg {
    background: #050b11 !important;
    color: #00ff66 !important;
  }
  .glitch-text {
    animation: glitch 1s linear infinite;
    text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
  }
  @keyframes glitch {
    0% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
    50% { text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff; }
    100% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
  }
  .scanline {
    position: fixed;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 6px 100%;
    z-index: 999;
    pointer-events: none;
  }
`;
const makeParticles = ()=>Array.from({
        length: 26
    }, (_, i)=>({
            id: i,
            x: 10 + Math.random() * 80,
            y: 10 + Math.random() * 80,
            tx: (Math.random() - 0.5) * 440,
            ty: (Math.random() - 0.5) * 340,
            delay: Math.random() * 0.9,
            size: 13 + Math.random() * 16,
            color: i % 2 === 0 ? "#f5e17a" : "#d4af37"
        }));
const CASE_PRESETS = [
    {
        id: "normal",
        label: "Select Preset Case..."
    },
    {
        id: "macarons",
        label: "The Incident of the Stolen Macarons",
        prompt: "I accuse you, Lady Furina, of eating the last plate of strawberry macarons prepared for the high table!"
    },
    {
        id: "prophecy",
        label: "Speculating on the Hydro Prophecy",
        prompt: "Tell us the truth, Lady Furina: is it true that Fontaine will be flooded and everyone dissolved?"
    },
    {
        id: "iudex",
        label: "The Auditing of the Opera Budgets",
        prompt: "Monsieur Neuvillette is auditing the Court expenses, specifically your budget for dramatic props!"
    }
];
function CourtOfFontaine() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("prologue"); // prologue | chat | simulator | backstage
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTitle, setUserTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shaking, setShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [verdictBalance, setVerdictBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isGlitched, setIsGlitched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCase, setActiveCase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("normal");
    const [bubbles, setBubbles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourtOfFontaine.useEffect": ()=>{
            setBubbles(Array.from({
                length: 15
            }, {
                "CourtOfFontaine.useEffect": (_, i)=>({
                        id: i,
                        size: 20 + Math.random() * 50,
                        left: `${Math.random() * 100}%`,
                        delay: `${Math.random() * 8}s`,
                        duration: `${10 + Math.random() * 8}s`
                    })
            }["CourtOfFontaine.useEffect"]));
        }
    }["CourtOfFontaine.useEffect"], []);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourtOfFontaine.useEffect": ()=>{
            if (screen === "chat") {
                bottomRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["CourtOfFontaine.useEffect"], [
        messages,
        loading,
        screen
    ]);
    const triggerDrama = ()=>{
        setShaking(true);
        setTimeout(()=>setShaking(false), 1500);
        setParticles(makeParticles());
        setTimeout(()=>setParticles([]), 2600);
    };
    const handleEnterCourt = ()=>{
        const name = username.trim() || "Dear Citizen";
        const title = userTitle.trim() || "Foreign Traveler";
        // Check if the user is Neuvillette
        const isNeuvillette = name.toLowerCase() === "neuvillette";
        // Check if the user is Soumya or Asher
        const isArchitect = name.toLowerCase() === "soumya" || name.toLowerCase() === "asher";
        let initialMessage = "";
        if (isArchitect) {
            initialMessage = `🎭 *The Oratrice scales swing wildly!*... The Great Architect ${name} has arrived?! *flicker* The stage... the coding layers... they are melting! Welcome, Architect. Tell me your will!`;
            setIsGlitched(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitch"])();
        } else if (isNeuvillette) {
            initialMessage = `🎭 Th-the Iudex?! Neuvillette, why are you sitting in the audience? I am the star presiding over this court, do not look at me with those cold eyes! ✨`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGavel"])();
        } else {
            initialMessage = `🎭 Ah — the traveler ${name}, titled "${title}", dares approach the magnificent Court of Fontaine! State your case before the Oratrice... and make it interesting. ✨`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGavel"])();
        }
        setMessages([
            {
                role: "assistant",
                content: initialMessage
            }
        ]);
        setScreen("chat");
    };
    const handlePresetCase = (e)=>{
        const caseId = e.target.value;
        setActiveCase(caseId);
        if (caseId === "normal") return;
        const selected = CASE_PRESETS.find((c)=>c.id === caseId);
        if (selected) {
            setInput(selected.prompt);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
        }
    };
    const sendMessage = async ()=>{
        if (!input.trim() || loading) return;
        const currentInput = input.trim();
        const userMsg = {
            role: "user",
            content: currentInput
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput("");
        setLoading(true);
        triggerDrama();
        // Check for developer/architect trigger in chat
        const hasArchitectTrigger = currentInput.toLowerCase().includes("soumya") || currentInput.toLowerCase().includes("asher") || currentInput.toLowerCase().includes("architect");
        if (hasArchitectTrigger) {
            setIsGlitched(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitch"])();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGavel"])();
        }
        // Dynamic scale balance shifting
        // Guilty trend (<0) or Innocent trend (>0)
        const textLength = currentInput.length;
        const balanceShift = (textLength % 2 === 0 ? 1 : -1) * (10 + Math.random() * 25);
        setVerdictBalance((prev)=>Math.max(-100, Math.min(100, prev + balanceShift)));
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        ...messages,
                        userMsg
                    ],
                    systemPrompt: SYSTEM_PROMPT
                })
            });
            const data = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: data.reply
                    }
                ]);
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "🌊 Treacherous tides! Try again, My Dear Citizen. 🎭"
                    }
                ]);
        }
        setLoading(false);
    };
    const handleTabChange = (targetScreen)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
        setScreen(targetScreen);
    };
    const restoreOrder = ()=>{
        setIsGlitched(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBubble"])();
        setVerdictBalance(0);
        setMessages((prev)=>[
                ...prev,
                {
                    role: "assistant",
                    content: "🎭 Order is restored! *clears throat* The Diva of Fontaine never loses her composure. Proceed, My Dear Citizen!"
                }
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CSS
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            isGlitched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanline"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 269,
                columnNumber: 22
            }, this),
            bubbles.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bubble",
                    style: {
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        left: b.left,
                        animation: `floatBubble ${b.duration} infinite linear`,
                        animationDelay: b.delay
                    }
                }, b.id, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 9999
                },
                children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            color: p.color,
                            animation: `particleFly 1.9s both ${p.delay}s`,
                            "--tx": `${p.tx}px`,
                            "--ty": `${p.ty}px`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: p.size
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 292,
                            columnNumber: 14
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${shaking ? "court-shake" : ""} ${isGlitched ? "glitch-bg" : ""}`,
                style: {
                    minHeight: "100vh",
                    background: "#001a2c",
                    color: isGlitched ? "#00ff66" : "#e8d5a3",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                    position: "relative",
                    zIndex: 10
                },
                children: [
                    screen !== "prologue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            marginBottom: "30px",
                            background: "rgba(0,15,30,0.5)",
                            padding: "6px 12px",
                            borderRadius: "30px",
                            border: "1px solid rgba(212,175,55,0.2)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange("chat"),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: screen === "chat" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                                    padding: "8px 16px",
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "0.95rem",
                                    cursor: "pointer",
                                    borderBottom: screen === "chat" ? "2px solid #d4af37" : "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    " Opera Epiclese"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange("simulator"),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: screen === "simulator" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                                    padding: "8px 16px",
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "0.95rem",
                                    cursor: "pointer",
                                    borderBottom: screen === "simulator" ? "2px solid #d4af37" : "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    " Verdict Simulator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange("backstage"),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: screen === "backstage" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                                    padding: "8px 16px",
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "0.95rem",
                                    cursor: "pointer",
                                    borderBottom: screen === "backstage" ? "2px solid #d4af37" : "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    " Salon Solitaire"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            textAlign: "center",
                            marginBottom: "30px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `title-glow ${isGlitched ? "glitch-text" : ""}`,
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "3rem",
                                    color: isGlitched ? "#00ff66" : "#d4af37"
                                },
                                children: isGlitched ? "SYSTEM OVERRIDE: ARCHITECT SHADOW" : "The Court of Fontaine"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontStyle: "italic",
                                    color: isGlitched ? "#00ff66" : "rgba(212,175,55,.6)"
                                },
                                children: isGlitched ? "CRITICAL: SOURCE CODE INTEGRITY TAMPERED" : "Oratrice Mécanique d'Analyse Cardinale"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            screen === "prologue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                className: "glass",
                                style: {
                                    width: "100%",
                                    maxWidth: "550px",
                                    borderRadius: "20px",
                                    padding: "40px 30px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "25px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                size: 48,
                                                color: "#d4af37",
                                                style: {
                                                    margin: "0 auto 15px auto"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Playfair Display', serif",
                                                    color: "#d4af37",
                                                    fontSize: "1.8rem"
                                                },
                                                children: "State Your Title, Traveler"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'Cormorant Garamond', serif",
                                                    fontSize: "1.1rem",
                                                    color: "rgba(232,213,163,0.7)"
                                                },
                                                children: "Only those with a name and purpose may stand before Lady Furina in the grand courtroom."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            textAlign: "left"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: "block",
                                                            fontSize: "0.85rem",
                                                            color: "rgba(212,175,55,0.7)",
                                                            marginBottom: "6px",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 398,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: username,
                                                        onChange: (e)=>setUsername(e.target.value),
                                                        placeholder: "e.g. Aether / Neuvillette",
                                                        style: {
                                                            width: "100%",
                                                            background: "rgba(0,10,22,0.6)",
                                                            border: "1px solid rgba(212,175,55,0.4)",
                                                            borderRadius: "8px",
                                                            color: "white",
                                                            padding: "12px",
                                                            outline: "none",
                                                            fontSize: "1rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: "block",
                                                            fontSize: "0.85rem",
                                                            color: "rgba(212,175,55,0.7)",
                                                            marginBottom: "6px",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: userTitle,
                                                        onChange: (e)=>setUserTitle(e.target.value),
                                                        placeholder: "e.g. Honorary Knight",
                                                        style: {
                                                            width: "100%",
                                                            background: "rgba(0,10,22,0.6)",
                                                            border: "1px solid rgba(212,175,55,0.4)",
                                                            borderRadius: "8px",
                                                            color: "white",
                                                            padding: "12px",
                                                            outline: "none",
                                                            fontSize: "1rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleEnterCourt,
                                        className: "request-btn",
                                        style: {
                                            padding: "14px",
                                            borderRadius: "10px",
                                            fontSize: "1.1rem"
                                        },
                                        children: "Step Forward to the Bench"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "prologue", true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            screen === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 15
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -15
                                },
                                style: {
                                    width: "100%",
                                    maxWidth: "800px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: isGlitched ? "1fr" : "3fr 2fr",
                                            gap: "20px",
                                            alignItems: "stretch"
                                        },
                                        children: isGlitched ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass",
                                            style: {
                                                padding: "20px",
                                                borderRadius: "16px",
                                                background: "rgba(99, 10, 10, 0.25)",
                                                border: "1px solid #ff3333",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                            size: 32,
                                                            color: "#ff3333",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 445,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontFamily: "'Playfair Display', serif",
                                                                        color: "#ff8888",
                                                                        fontSize: "1.15rem"
                                                                    },
                                                                    children: "Architect Signature Detected"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: "0.85rem",
                                                                        color: "rgba(255,200,200,0.7)"
                                                                    },
                                                                    children: "The staging logs are leaking database schemas. Reset recommended."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 446,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: restoreOrder,
                                                    className: "request-btn",
                                                    style: {
                                                        background: "#ff3333",
                                                        color: "white",
                                                        padding: "8px 16px",
                                                        borderRadius: "8px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 456,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Restore Order"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glass",
                                                    style: {
                                                        padding: "15px 20px",
                                                        borderRadius: "16px",
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    display: "block",
                                                                    fontSize: "0.8rem",
                                                                    color: "rgba(212,175,55,0.6)",
                                                                    textTransform: "uppercase",
                                                                    marginBottom: "4px"
                                                                },
                                                                children: "Load Trial Case"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 464,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: activeCase,
                                                                onChange: handlePresetCase,
                                                                style: {
                                                                    width: "100%",
                                                                    background: "rgba(0,10,22,0.7)",
                                                                    border: "1px solid rgba(212,175,55,0.3)",
                                                                    borderRadius: "6px",
                                                                    color: "#e8d5a3",
                                                                    padding: "6px 10px",
                                                                    fontFamily: "'Cormorant Garamond', serif",
                                                                    outline: "none"
                                                                },
                                                                children: CASE_PRESETS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: c.id,
                                                                        children: c.label
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 467,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 463,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$OratriceScales$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    balance: verdictBalance
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 489,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        className: "glass",
                                        style: {
                                            width: "100%",
                                            borderRadius: "20px",
                                            height: "50vh",
                                            display: "flex",
                                            flexDirection: "column",
                                            overflow: "hidden"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    overflowY: "auto",
                                                    padding: "20px"
                                                },
                                                children: [
                                                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "msg-appear",
                                                            style: {
                                                                marginBottom: "15px",
                                                                textAlign: msg.role === "user" ? "right" : "left"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "inline-block",
                                                                    padding: "10px 15px",
                                                                    borderRadius: "10px",
                                                                    background: msg.role === "user" ? "rgba(212,175,55,0.1)" : isGlitched ? "rgba(0, 50, 20, 0.4)" : "rgba(0,35,62,0.8)",
                                                                    border: isGlitched && msg.role !== "user" ? "1px solid #00ff66" : "none",
                                                                    color: isGlitched && msg.role !== "user" ? "#00ff66" : "#e8d5a3",
                                                                    maxWidth: "80%"
                                                                },
                                                                children: msg.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 499,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: bottomRef
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 512,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "20px",
                                                    display: "flex",
                                                    gap: "10px",
                                                    background: "rgba(0,0,0,0.2)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        style: {
                                                            flex: 1,
                                                            background: "transparent",
                                                            border: isGlitched ? "1px solid #00ff66" : "1px solid #d4af37",
                                                            borderRadius: "10px",
                                                            color: "white",
                                                            padding: "10px",
                                                            resize: "none"
                                                        },
                                                        value: input,
                                                        onChange: (e)=>setInput(e.target.value),
                                                        placeholder: "State your case...",
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter" && !e.shiftKey) {
                                                                e.preventDefault();
                                                                sendMessage();
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "request-btn",
                                                        onClick: sendMessage,
                                                        style: {
                                                            padding: "10px 20px",
                                                            borderRadius: "10px"
                                                        },
                                                        children: "Request Verdict"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 530,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "chat", true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            screen === "simulator" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 15
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -15
                                },
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VerdictSimulator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this)
                            }, "simulator", false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            screen === "backstage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 15
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -15
                                },
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SalonSolitaire$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this)
                            }, "backstage", false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            marginTop: "30px",
                            textAlign: "center",
                            opacity: 0.6
                        },
                        children: [
                            "Engineered by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Asher with 🧠"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 568,
                                columnNumber: 25
                            }, this),
                            " | Powered by the Oratrice ✨"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MusicToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CourtOfFontaine, "RKu22l7Ci4OWitsYmbM/jAnPYL0=");
_c = CourtOfFontaine;
var _c;
__turbopack_context__.k.register(_c, "CourtOfFontaine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0ih9ms~._.js.map