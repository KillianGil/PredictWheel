(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/PredictWheel/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
let client = null;
function createClient() {
    if (client) return client;
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://astzfcjbavcixppuxpqf.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdHpmY2piYXZjaXhwcHV4cHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzMTE0ODcsImV4cCI6MjA4MDg4NzQ4N30.wZ8Ae3a6VUt5gbIJFsGwDyHpFDFcZao4wb-gKsfUvxg"));
    return client;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/lib/game-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Génère un code de partie aléatoire
__turbopack_context__.s([
    "calculatePoints",
    ()=>calculatePoints,
    "generateGameCode",
    ()=>generateGameCode,
    "generateSessionId",
    ()=>generateSessionId,
    "generateTargetPosition",
    ()=>generateTargetPosition,
    "getSessionId",
    ()=>getSessionId
]);
function generateGameCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for(let i = 0; i < 6; i++){
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}
function generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function getSessionId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let sessionId = localStorage.getItem("wavelength_session_id");
    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem("wavelength_session_id", sessionId);
    }
    return sessionId;
}
function calculatePoints(guessPosition, targetPosition) {
    const distance = Math.abs(guessPosition - targetPosition);
    // Zone centrale (4 points) - +/- 4 degrés
    if (distance <= 4) return 4;
    // Zone suivante (3 points) - +/- 12 degrés
    if (distance <= 12) return 3;
    // Zone externe (2 points) - +/- 22 degrés
    if (distance <= 22) return 2;
    // Hors zone
    return 0;
}
function generateTargetPosition() {
    return Math.floor(Math.random() * 130) + 25 // Entre 25 et 155 degrés
    ;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WavelengthWheel",
    ()=>WavelengthWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WavelengthWheel({ targetPosition = 90, showTarget = false, guessPosition, onGuessChange, interactive = false, leftExtreme, rightExtreme, showZones = false }) {
    _s();
    const [currentGuess, setCurrentGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(guessPosition ?? 90);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WavelengthWheel.useEffect": ()=>{
            if (guessPosition !== undefined) {
                setCurrentGuess(guessPosition);
            }
        }
    }["WavelengthWheel.useEffect"], [
        guessPosition
    ]);
    const handleInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WavelengthWheel.useCallback[handleInteraction]": (clientX, clientY)=>{
            if (!interactive || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height - 20;
            const dx = clientX - centerX;
            const dy = centerY - clientY;
            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
            // Correction logic for needle direction
            angle = 180 - angle;
            angle = Math.max(0, Math.min(180, angle));
            setCurrentGuess(angle);
            onGuessChange?.(angle);
        }
    }["WavelengthWheel.useCallback[handleInteraction]"], [
        interactive,
        onGuessChange
    ]);
    const handleMouseDown = (e)=>{
        if (!interactive) return;
        e.preventDefault();
        setIsDragging(true);
        handleInteraction(e.clientX, e.clientY);
    };
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WavelengthWheel.useCallback[handleMouseMove]": (e)=>{
            if (!isDragging) return;
            handleInteraction(e.clientX, e.clientY);
        }
    }["WavelengthWheel.useCallback[handleMouseMove]"], [
        isDragging,
        handleInteraction
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WavelengthWheel.useCallback[handleMouseUp]": ()=>{
            setIsDragging(false);
        }
    }["WavelengthWheel.useCallback[handleMouseUp]"], []);
    const handleTouchStart = (e)=>{
        if (!interactive) return;
        setIsDragging(true);
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
    };
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WavelengthWheel.useCallback[handleTouchMove]": (e)=>{
            if (!isDragging) return;
            e.preventDefault();
            const touch = e.touches[0];
            handleInteraction(touch.clientX, touch.clientY);
        }
    }["WavelengthWheel.useCallback[handleTouchMove]"], [
        isDragging,
        handleInteraction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WavelengthWheel.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
                window.addEventListener("touchmove", handleTouchMove, {
                    passive: false
                });
                window.addEventListener("touchend", handleMouseUp);
            }
            return ({
                "WavelengthWheel.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("touchend", handleMouseUp);
                }
            })["WavelengthWheel.useEffect"];
        }
    }["WavelengthWheel.useEffect"], [
        isDragging,
        handleMouseMove,
        handleMouseUp,
        handleTouchMove
    ]);
    const createArc = (startAngle, endAngle, innerR, outerR)=>{
        const startRad = startAngle * Math.PI / 180;
        const endRad = endAngle * Math.PI / 180;
        const cx = 200;
        const cy = 200;
        const x1 = cx + outerR * Math.cos(Math.PI - startRad);
        const y1 = cy - outerR * Math.sin(Math.PI - startRad);
        const x2 = cx + outerR * Math.cos(Math.PI - endRad);
        const y2 = cy - outerR * Math.sin(Math.PI - endRad);
        const x3 = cx + innerR * Math.cos(Math.PI - endRad);
        const y3 = cy - innerR * Math.sin(Math.PI - endRad);
        const x4 = cx + innerR * Math.cos(Math.PI - startRad);
        const y4 = cy - innerR * Math.sin(Math.PI - startRad);
        const largeArc = endAngle - startAngle > 180 ? 1 : 0;
        return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
    };
    const renderScoringZones = ()=>{
        if (!showZones) return null;
        const zones = [
            {
                offset: -22,
                width: 10,
                points: 2,
                color: "#3b82f6"
            },
            {
                offset: -12,
                width: 8,
                points: 3,
                color: "#f97316"
            },
            {
                offset: -4,
                width: 8,
                points: 4,
                color: "#ef4444"
            },
            {
                offset: 4,
                width: 8,
                points: 3,
                color: "#f97316"
            },
            {
                offset: 12,
                width: 10,
                points: 2,
                color: "#3b82f6"
            }
        ];
        return zones.map((zone, index)=>{
            const startAngle = Math.max(0, targetPosition + zone.offset);
            const endAngle = Math.min(180, startAngle + zone.width);
            if (endAngle <= startAngle) return null;
            const midAngle = (startAngle + endAngle) / 2 * (Math.PI / 180);
            const textRadius = 130;
            const textX = 200 + textRadius * Math.cos(Math.PI - midAngle);
            const textY = 200 - textRadius * Math.sin(Math.PI - midAngle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(startAngle, endAngle, 45, 175),
                        fill: zone.color,
                        opacity: 0.9
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: textX,
                        y: textY,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        fill: "white",
                        fontWeight: "600",
                        fontSize: "16",
                        className: "select-none pointer-events-none",
                        children: zone.points
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this);
        });
    };
    const renderNeedle = (angle, isTarget = false)=>{
        const rad = angle * Math.PI / 180;
        const length = 155;
        const endX = 200 + length * Math.cos(Math.PI - rad);
        const endY = 200 - length * Math.sin(Math.PI - rad);
        // FORCE RED for player needle. Target needle is blue (but hidden mostly).
        const needleColor = isTarget ? "#3b82f6" : "#ef4444";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!isDragging && "transition-transform duration-500 ease-out"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "200",
                    y1: "205",
                    x2: endX,
                    y2: endY + 5,
                    stroke: "rgba(0,0,0,0.1)",
                    strokeWidth: isTarget ? 4 : 5,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "200",
                    y1: "200",
                    x2: endX,
                    y2: endY,
                    stroke: needleColor,
                    strokeWidth: isTarget ? 4 : 5,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "200",
                    r: isTarget ? 4 : 6,
                    fill: needleColor
                }, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 230",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto touch-none select-none", interactive && "cursor-pointer"),
                onMouseDown: handleMouseDown,
                onTouchStart: handleTouchStart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(0, 180, 0, 180),
                        fill: "#f1f5f9"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(0, 180, 175, 185),
                        fill: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(0, 180, 40, 45),
                        fill: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    renderScoringZones(),
                    [
                        ...Array(19)
                    ].map((_, i)=>{
                        const angle = i * 10;
                        const rad = angle * Math.PI / 180;
                        const inner = 170;
                        const outer = 175;
                        const x1 = 200 + inner * Math.cos(Math.PI - rad);
                        const y1 = 200 - inner * Math.sin(Math.PI - rad);
                        const x2 = 200 + outer * Math.cos(Math.PI - rad);
                        const y2 = 200 - outer * Math.sin(Math.PI - rad);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: x1,
                            y1: y1,
                            x2: x2,
                            y2: y2,
                            stroke: "#94a3b8",
                            strokeWidth: "1"
                        }, i, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this);
                    }),
                    showTarget && !showZones && renderNeedle(targetPosition, true),
                    (interactive || guessPosition !== undefined) && renderNeedle(currentGuess, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "200",
                        cy: "200",
                        r: "25",
                        fill: "#e2e8f0",
                        stroke: "#cbd5e1",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "200",
                        cy: "200",
                        r: "12",
                        fill: "#ef4444",
                        className: "shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mt-2 px-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-3 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-medium shadow-sm leading-tight break-words max-w-full",
                            children: leftExtreme
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-3 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-medium shadow-sm leading-tight break-words max-w-full",
                            children: rightExtreme
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s(WavelengthWheel, "wDal32VyrJA0mknopOUJPBRibqQ=");
_c = WavelengthWheel;
var _c;
__turbopack_context__.k.register(_c, "WavelengthWheel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/lib/local-cards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCAL_CARDS",
    ()=>LOCAL_CARDS,
    "LOCAL_THEMES",
    ()=>LOCAL_THEMES,
    "getRandomCard",
    ()=>getRandomCard
]);
const LOCAL_CARDS = [
    // --- CLASSIQUE (Relations, Vie sociale, Général) ---
    // Indices attendus : Une situation, un lieu, une phrase, un objet.
    {
        leftExtreme: "Pire façon de larguer",
        rightExtreme: "Meilleur façon de larguer",
        theme: "classique"
    },
    {
        leftExtreme: "Pire endroit pour un date",
        rightExtreme: "Lieu de date incroyable",
        theme: "classique"
    },
    {
        leftExtreme: "Cadeau d'anniversaire pourri",
        rightExtreme: "Cadeau d'anniversaire parfait",
        theme: "classique"
    },
    {
        leftExtreme: "Animal inutile",
        rightExtreme: "Animal majestueux",
        theme: "classique"
    },
    {
        leftExtreme: "Pire Super-pouvoir",
        rightExtreme: "Meilleur Super-pouvoir",
        theme: "classique"
    },
    {
        leftExtreme: "Pire excuse de retard",
        rightExtreme: "Meilleure Excuse",
        theme: "classique"
    },
    {
        leftExtreme: "Pire Marque de vêtements",
        rightExtreme: "Meilleur Marque de vêtements",
        theme: "classique"
    },
    {
        leftExtreme: "Pire job d'été",
        rightExtreme: "Meilleur job d'été",
        theme: "classique"
    },
    {
        leftExtreme: "Sujet de conversation gênant",
        rightExtreme: "Sujet passionnant",
        theme: "classique"
    },
    {
        leftExtreme: "Personne la plus détestée au monde",
        rightExtreme: "Personne adorée de tous",
        theme: "classique"
    },
    {
        leftExtreme: "Pire phobie",
        rightExtreme: "Phobie ridicule",
        theme: "classique"
    },
    {
        leftExtreme: "Red Flag chez un mec/une meuf",
        rightExtreme: "Green Flag absolu",
        theme: "classique"
    },
    {
        leftExtreme: "Célébrité insupportable",
        rightExtreme: "Célébrité avec qui tu veux boire un verre",
        theme: "classique"
    },
    {
        leftExtreme: "Pire tâche ménagère",
        rightExtreme: "Tâche ménagère satisfaisante",
        theme: "classique"
    },
    {
        leftExtreme: "Objet inutile à emmener sur une île déserte",
        rightExtreme: "Objet indispensable à la survie",
        theme: "classique"
    },
    {
        leftExtreme: "Pire ville à habiter",
        rightExtreme: "Meilleure ville à habiter",
        theme: "classique"
    },
    {
        leftExtreme: "Pire insulte",
        rightExtreme: "Meilleur compliment",
        theme: "classique"
    },
    {
        leftExtreme: "Pire façon de mourir",
        rightExtreme: "Mort héroïque",
        theme: "classique"
    },
    {
        leftExtreme: "Influenceur vide",
        rightExtreme: "Créateur de contenu génial",
        theme: "classique"
    },
    {
        leftExtreme: "Tâche ménagère horrible",
        rightExtreme: "Tâche ménagère satisfaisante",
        theme: "classique"
    },
    {
        leftExtreme: "Anime surcoté",
        rightExtreme: "Anime Masterclass",
        theme: "cinema"
    },
    {
        leftExtreme: "Générique qu'on skip",
        rightExtreme: "Générique classique",
        theme: "cinema"
    },
    {
        leftExtreme: "Pire hobby",
        rightExtreme: "Meilleur hobby",
        theme: "classique"
    },
    {
        leftExtreme: "Tatouage beauf",
        rightExtreme: "Tatouage œuvre d'art",
        theme: "classique"
    },
    // --- SPORT (Basket, Foot, F1, MMA...) ---
    // Indices attendus : Nom de joueur, Nom de club, Nom de sport.
    {
        leftExtreme: "Sport sans cardio",
        rightExtreme: "Sport avec beaucoup de cardio",
        theme: "sport"
    },
    {
        leftExtreme: "Joueur surcoté ",
        rightExtreme: "GOAT",
        theme: "sport"
    },
    {
        leftExtreme: "Équipe qui perd tout le temps",
        rightExtreme: "Dynastie imbattable",
        theme: "sport"
    },
    {
        leftExtreme: "Sport qu'on regarde juste pour les JO",
        rightExtreme: "Sport qu'on regarde toute l'année",
        theme: "sport"
    },
    {
        leftExtreme: "Maillot de foot moche",
        rightExtreme: "Maillot légendaire",
        theme: "sport"
    },
    {
        leftExtreme: "Pire célébration de but",
        rightExtreme: "Célébraiton iconique",
        theme: "sport"
    },
    {
        leftExtreme: "Sport dangereux",
        rightExtreme: "Sport sans risque",
        theme: "sport"
    },
    {
        leftExtreme: "Entraîneur détesté",
        rightExtreme: "Génie tactique",
        theme: "sport"
    },
    {
        leftExtreme: "Stade avec la pire ambiance",
        rightExtreme: "Stade avec la meilleure ambiance",
        theme: "sport"
    },
    {
        leftExtreme: "Moment sportif honteux",
        rightExtreme: "Moment d'histoire",
        theme: "sport"
    },
    {
        leftExtreme: "Sport de riche",
        rightExtreme: "Sport de pauvre",
        theme: "sport"
    },
    {
        leftExtreme: "Joueur du banc",
        rightExtreme: "Titulaire indiscutable",
        theme: "sport"
    },
    {
        leftExtreme: "Athlète arrogant",
        rightExtreme: "Athlète humble",
        theme: "sport"
    },
    {
        leftExtreme: "Pire transfert de l'histoire",
        rightExtreme: "Meilleur recrutement",
        theme: "sport"
    },
    {
        leftExtreme: "Combattant de MMA surcoté",
        rightExtreme: "Combattant de MMA classique",
        theme: "sport"
    },
    {
        leftExtreme: "Pire match",
        rightExtreme: "Match classique",
        theme: "sport"
    },
    {
        leftExtreme: "Pilote de F1 surcoté",
        rightExtreme: "Pilote de F1 GOAT",
        theme: "sport"
    },
    {
        leftExtreme: "Action anti-jeu",
        rightExtreme: "Geste Fair-play",
        theme: "sport"
    },
    // --- CINÉMA / SÉRIES ---
    // Indices attendus : Titre de film/série, Nom de personnage, Acteur.
    {
        leftExtreme: "Film chiant à mourir",
        rightExtreme: "Film très divertissant",
        theme: "cinema"
    },
    {
        leftExtreme: "Personnage le plus inutile",
        rightExtreme: "Héros indispensable",
        theme: "cinema"
    },
    {
        leftExtreme: "Avenger le plus faible",
        rightExtreme: "Avenger le plus fort",
        theme: "cinema"
    },
    {
        leftExtreme: "Chanson Disney insupportable",
        rightExtreme: "Chanson Disney banger",
        theme: "cinema"
    },
    {
        leftExtreme: "Pire maison d'Harry Potter",
        rightExtreme: "Meilleure maison d'Harry Potter",
        theme: "cinema"
    },
    {
        leftExtreme: "Méchante caricature",
        rightExtreme: "Méchant complexe et stylé",
        theme: "cinema"
    },
    {
        leftExtreme: "Série surcotée",
        rightExtreme: "Série culte",
        theme: "cinema"
    },
    {
        leftExtreme: "Acteur qui joue mal",
        rightExtreme: "Acteur de génie",
        theme: "cinema"
    },
    {
        leftExtreme: "Pire suite de film ",
        rightExtreme: "Suite meilleure que l'original",
        theme: "cinema"
    },
    {
        leftExtreme: "Film de beauf",
        rightExtreme: "Film d'auteur",
        theme: "cinema"
    },
    {
        leftExtreme: "Couple gênant à l'écran",
        rightExtreme: "Couple goal",
        theme: "cinema"
    },
    {
        leftExtreme: "Mort de personnage satisfaisante",
        rightExtreme: "Mort qui fait chialer",
        theme: "cinema"
    },
    {
        leftExtreme: "Univers sombre",
        rightExtreme: "Univers joyeux",
        theme: "cinema"
    },
    {
        leftExtreme: "Fin de série ratée",
        rightExtreme: "Fin parfaite",
        theme: "cinema"
    },
    {
        leftExtreme: "Film qu'on a honte d'aimer",
        rightExtreme: "Chef-d'œuvre reconnu",
        theme: "cinema"
    },
    {
        leftExtreme: "Pire adaptation",
        rightExtreme: "Meilleure adaptation",
        theme: "cinema"
    },
    {
        leftExtreme: "Sidekick (pote du héros) lourd",
        rightExtreme: "Meilleur Sidekick",
        theme: "cinema"
    },
    {
        leftExtreme: "Réplique de film ringarde",
        rightExtreme: "Réplique culte",
        theme: "cinema"
    },
    // --- JEU VIDÉO ---
    // Indices attendus : Titre de jeu, Console, Perso, Objet in-game.
    {
        leftExtreme: "Jeu pour enfant",
        rightExtreme: "Jeu ultra violent",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Arme de départ pourrie",
        rightExtreme: "Arme Cheatée",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Personnage lent ",
        rightExtreme: "Personnage rapide ",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Console flop ",
        rightExtreme: "Console légendaire ",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Communauté toxique",
        rightExtreme: "Meilleure communauté",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Boss trop facile",
        rightExtreme: "Boss impossible ",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Objet Mario Kart inutile",
        rightExtreme: "Objet Mario Kart qui sauve la game",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Champion de LoL inutile",
        rightExtreme: "Champion de LoL 1v9",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Arme CS éco",
        rightExtreme: "Arme CS Full Buy",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Starter Pokémon nul",
        rightExtreme: "Starter Pokémon légendaire",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Bloc Minecraft inutile",
        rightExtreme: "Bloc Minecraft indispensable",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Équipe FIFA éclatée",
        rightExtreme: "Équipe FIFA cheatée",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Pire jeu mobile",
        rightExtreme: "Meilleur jeu mobile",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Communauté toxique",
        rightExtreme: "Communauté en or",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Pouvoir inutile",
        rightExtreme: "Pouvoir divin",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Copie eco+ (Plagiat)",
        rightExtreme: "Jeu original",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Jeu Pay-to-Win",
        rightExtreme: "Jeu Skill pur",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Licence morte",
        rightExtreme: "Licence immortelle",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Map/Niveau horrible",
        rightExtreme: "Map/Niveau préféré",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Jeu Pay-to-Win",
        rightExtreme: "Jeu Free-to-Play honnête",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Pire coéquipier",
        rightExtreme: "Meilleur coéquipier",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Personnage moche",
        rightExtreme: "Personnage charismatique",
        theme: "jeuvideo"
    },
    {
        leftExtreme: "Jeu le plus bugué",
        rightExtreme: "Jeu le mieux fini",
        theme: "jeuvideo"
    },
    // --- MUSIQUE ---
    // Indices attendus : Nom d'artiste, Titre de chanson, Genre.
    {
        leftExtreme: "Chanson honteuse",
        rightExtreme: "Classique intemporel",
        theme: "musique"
    },
    {
        leftExtreme: "Artiste 'One hit wonder' (Un seul tube)",
        rightExtreme: "Légende de la musique",
        theme: "musique"
    },
    {
        leftExtreme: "Paroles débiles ",
        rightExtreme: "Paroles de poète",
        theme: "musique"
    },
    {
        leftExtreme: "Instrument ringard ",
        rightExtreme: "Instrument stylé ",
        theme: "musique"
    },
    {
        leftExtreme: "Musique de pub agaçante",
        rightExtreme: "B.O. de film épique",
        theme: "musique"
    },
    {
        leftExtreme: "Chanson pour rompre",
        rightExtreme: "Chanson pour envoyer",
        theme: "musique"
    },
    {
        leftExtreme: "Album décevant",
        rightExtreme: "Album Masterclass",
        theme: "musique"
    },
    {
        leftExtreme: "Rappeur éclaté",
        rightExtreme: "GOAT du rap",
        theme: "musique"
    },
    {
        leftExtreme: "Chanson de rupture ",
        rightExtreme: "Chanson d'été",
        theme: "musique"
    },
    {
        leftExtreme: "Groupe surcoté",
        rightExtreme: "Groupe sous-coté",
        theme: "musique"
    },
    {
        leftExtreme: "Meilleure musique de soirée",
        rightExtreme: "Musique qui tue l'ambiance",
        theme: "musique"
    },
    {
        leftExtreme: "Cover d'album moche",
        rightExtreme: "Cover d'album incroyable",
        theme: "musique"
    },
    {
        leftExtreme: "Clip gênant",
        rightExtreme: "Clip cinématographique",
        theme: "musique"
    },
    {
        leftExtreme: "Voix insupportable",
        rightExtreme: "La plus belle voix du monde",
        theme: "musique"
    },
    {
        leftExtreme: "Chanson d'été insupportable",
        rightExtreme: "Tube de l'été validé",
        theme: "musique"
    },
    // --- NOURRITURE ---
    // Indices attendus : Un plat, un ingrédient, une marque, une boisson.
    {
        leftExtreme: "Plat de cantine (Caoutchouc)",
        rightExtreme: "Plat gastronomique",
        theme: "nourriture"
    },
    {
        leftExtreme: "Marque eco+ (Cola...)",
        rightExtreme: "Marque prenium (Coca...)",
        theme: "nourriture"
    },
    {
        leftExtreme: "Plat de lendemain de cuite",
        rightExtreme: "Dîner romantique",
        theme: "nourriture"
    },
    {
        leftExtreme: "Fruit chiant à éplucher/manger",
        rightExtreme: "Fruit facile (Banane)",
        theme: "nourriture"
    },
    {
        leftExtreme: "Boisson d'enfant",
        rightExtreme: "Boisson d'adulte",
        theme: "nourriture"
    },
    {
        leftExtreme: "Fast-food bas de gamme",
        rightExtreme: "Meilleur Burger",
        theme: "nourriture"
    },
    {
        leftExtreme: "Plat qui pue",
        rightExtreme: "Plat qui sent trop bon",
        theme: "nourriture"
    },
    {
        leftExtreme: "Chocolat dégueu",
        rightExtreme: "Chocolat incroyable",
        theme: "nourriture"
    },
    {
        leftExtreme: "Pire Pizza",
        rightExtreme: "Meilleure Pizza",
        theme: "nourriture"
    },
    {
        leftExtreme: "Snack claqué au sol",
        rightExtreme: "Snack divin devant un film",
        theme: "nourriture"
    },
    {
        leftExtreme: "Sauce fade",
        rightExtreme: "Sauce légendaire ",
        theme: "nourriture"
    },
    {
        leftExtreme: "Fromage qui pue la mort",
        rightExtreme: "Fromage doux et crémeux",
        theme: "nourriture"
    },
    {
        leftExtreme: "Snack claqué au sol",
        rightExtreme: "Snack divin devant un film",
        theme: "nourriture"
    },
    {
        leftExtreme: "Pire burger de McDo",
        rightExtreme: "Meilleur burger de McDo",
        theme: "nourriture"
    },
    {
        leftExtreme: "Chaîne de Fast-food éclatée",
        rightExtreme: "Meilleure chaîne de Fast-food",
        theme: "nourriture"
    },
    {
        leftExtreme: "Pire goût de chips",
        rightExtreme: "Meilleur goût de chips",
        theme: "nourriture"
    },
    {
        leftExtreme: "Pire marque de céréales",
        rightExtreme: "Marque de céréales incroyable ",
        theme: "nourriture"
    },
    {
        leftExtreme: "Biscuit sec et étouffant",
        rightExtreme: "Meilleur gâteau industriel",
        theme: "nourriture"
    },
    {
        leftExtreme: "Boisson énergisante chimique",
        rightExtreme: "Meilleur soda",
        theme: "nourriture"
    },
    {
        leftExtreme: "Pire barre chocolatée ",
        rightExtreme: "Meilleure barre chocolatée ",
        theme: "nourriture"
    },
    {
        leftExtreme: "Plat végétarien triste",
        rightExtreme: "Meilleure viande",
        theme: "nourriture"
    }
];
const LOCAL_THEMES = [
    {
        id: "classique",
        name: "Classique",
        description: "Opposés classiques"
    },
    {
        id: "sport",
        name: "Sport",
        description: "Foot, tennis & cie"
    },
    {
        id: "jeuvideo",
        name: "Jeu vidéo",
        description: "Titres, consoles, persos"
    },
    {
        id: "musique",
        name: "Musique",
        description: "Chansons, artistes, genres"
    },
    {
        id: "nourriture",
        name: "Nourriture",
        description: "Tout ce qui se mange"
    },
    {
        id: "cinema",
        name: "Cinéma",
        description: "Films, séries, réalisateurs"
    },
    {
        id: "tous",
        name: "Tous",
        description: "Toutes les catégories"
    }
];
function getRandomCard(theme, usedCards = []) {
    const cards = theme === "tous" ? LOCAL_CARDS : LOCAL_CARDS.filter((card)=>card.theme === theme);
    const availableCards = cards.filter((card)=>!usedCards.some((used)=>used.leftExtreme === card.leftExtreme && used.rightExtreme === card.rightExtreme));
    // If all cards used, fallback to all cards (or maybe clear history? but for now just fallback)
    const pool = availableCards.length > 0 ? availableCards : cards;
    return pool[Math.floor(Math.random() * pool.length)];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/components/local-game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalGame",
    ()=>LocalGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/local-cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/game-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-client] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
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
;
function LocalGame({ onBack }) {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        players: [],
        currentRound: 1,
        maxRounds: 5,
        theme: "tous",
        currentCard: null,
        targetPosition: null,
        currentClue: null,
        currentPsychicIndex: 0,
        phase: "setup",
        guesses: [],
        usedCards: []
    });
    const [newPlayerName, setNewPlayerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [clue, setClue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentGuess, setCurrentGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(90);
    const [currentGuesserIndex, setCurrentGuesserIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showTarget, setShowTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuitConfirm, setShowQuitConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentPsychic = gameState.players[gameState.currentPsychicIndex];
    const guessers = gameState.players.filter((_, i)=>i !== gameState.currentPsychicIndex);
    const addPlayer = ()=>{
        if (!newPlayerName.trim() || gameState.players.length >= 8) return;
        const newPlayer = {
            id: `player_${Date.now()}`,
            name: newPlayerName.trim(),
            score: 0
        };
        setGameState((prev)=>({
                ...prev,
                players: [
                    ...prev.players,
                    newPlayer
                ]
            }));
        setNewPlayerName("");
    };
    const removePlayer = (id)=>{
        setGameState((prev)=>({
                ...prev,
                players: prev.players.filter((p)=>p.id !== id)
            }));
    };
    const startGame = ()=>{
        const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomCard"])(gameState.theme, gameState.usedCards || []);
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTargetPosition"])();
        setGameState((prev)=>({
                ...prev,
                usedCards: [
                    ...prev.usedCards || [],
                    {
                        leftExtreme: card.leftExtreme,
                        rightExtreme: card.rightExtreme
                    }
                ],
                currentCard: {
                    leftExtreme: card.leftExtreme,
                    rightExtreme: card.rightExtreme
                },
                targetPosition: target,
                phase: "psychic-view",
                currentRound: 1,
                guesses: []
            }));
        setShowTarget(false);
    };
    const psychicReady = ()=>setShowTarget(true);
    const psychicHideTarget = ()=>{
        setShowTarget(false);
        setGameState((prev)=>({
                ...prev,
                phase: "psychic-clue"
            }));
    };
    const submitClue = ()=>{
        if (!clue.trim()) return;
        setGameState((prev)=>({
                ...prev,
                currentClue: clue,
                phase: "guessing"
            }));
        setClue("");
        setCurrentGuesserIndex(0);
        setCurrentGuess(90);
    };
    const submitGuess = ()=>{
        const guesser = guessers[currentGuesserIndex];
        const newGuesses = [
            ...gameState.guesses,
            {
                playerId: guesser.id,
                position: currentGuess
            }
        ];
        if (currentGuesserIndex >= guessers.length - 1) {
            const updatedPlayers = gameState.players.map((player)=>{
                const guess = newGuesses.find((g)=>g.playerId === player.id);
                if (guess && gameState.targetPosition !== null) {
                    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePoints"])(guess.position, gameState.targetPosition);
                    return {
                        ...player,
                        score: player.score + points
                    };
                }
                return player;
            });
            setGameState((prev)=>({
                    ...prev,
                    guesses: newGuesses,
                    players: updatedPlayers,
                    phase: "reveal"
                }));
            setCurrentGuesserIndex(0); // Reset to show the best result (index 0) initially in reveal phase
            // Confetti if anyone scored points (maybe > 0 or specific logic)
            const hasScore = updatedPlayers.some((p)=>{
                const guess = newGuesses.find((g)=>g.playerId === p.id);
                if (!guess || gameState.targetPosition === null) return false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePoints"])(guess.position, gameState.targetPosition) > 0;
            });
            if (hasScore) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        y: 0.6
                    },
                    colors: [
                        '#6366f1',
                        '#8b5cf6',
                        '#ec4899'
                    ]
                });
            }
        } else {
            setGameState((prev)=>({
                    ...prev,
                    guesses: newGuesses
                }));
            setCurrentGuesserIndex((prev)=>prev + 1);
            setCurrentGuess(90);
        }
    };
    const nextRound = ()=>{
        if (gameState.currentRound >= gameState.maxRounds) {
            setGameState((prev)=>({
                    ...prev,
                    phase: "finished"
                }));
            return;
        }
        const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomCard"])(gameState.theme, gameState.usedCards || []);
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTargetPosition"])();
        const nextPsychicIndex = (gameState.currentPsychicIndex + 1) % gameState.players.length;
        setGameState((prev)=>({
                ...prev,
                usedCards: [
                    ...prev.usedCards || [],
                    {
                        leftExtreme: card.leftExtreme,
                        rightExtreme: card.rightExtreme
                    }
                ],
                currentCard: {
                    leftExtreme: card.leftExtreme,
                    rightExtreme: card.rightExtreme
                },
                targetPosition: target,
                currentClue: null,
                currentPsychicIndex: nextPsychicIndex,
                currentRound: prev.currentRound + 1,
                phase: "psychic-view",
                guesses: []
            }));
        setShowTarget(false);
        setCurrentGuesserIndex(0);
    };
    const restartGame = ()=>{
        setGameState((prev)=>({
                ...prev,
                players: prev.players.map((p)=>({
                        ...p,
                        score: 0
                    })),
                currentRound: 1,
                currentPsychicIndex: 0,
                phase: "setup",
                currentCard: null,
                targetPosition: null,
                currentClue: null,
                guesses: [],
                usedCards: []
            }));
    };
    // Header with quit button for in-game phases
    const GameHeader = ({ showRound = true })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowQuitConfirm(true),
                    className: "flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 171,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Quitter"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 172,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 167,
                    columnNumber: 7
                }, this),
                showRound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-1 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-medium text-slate-600",
                    children: [
                        gameState.currentRound,
                        "/",
                        gameState.maxRounds
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 166,
            columnNumber: 5
        }, this);
    // Quit confirmation modal
    const QuitConfirmModal = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-center text-slate-800",
                        children: "Quitter la partie ?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-center",
                        children: "La progression sera perdue."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "flex-1 bg-white hover:bg-slate-50",
                                onClick: ()=>setShowQuitConfirm(false),
                                children: "Annuler"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "destructive",
                                className: "flex-1",
                                onClick: onBack,
                                children: "Quitter"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 184,
            columnNumber: 5
        }, this);
    // Phase Setup
    if (gameState.phase === "setup") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 pb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Retour"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-slate-800",
                                children: "Mode Local"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-1",
                                children: "Passez-vous le téléphone"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-slate-700 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            "Joueurs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-500",
                                        children: [
                                            gameState.players.length,
                                            "/8"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Nom du joueur...",
                                        value: newPlayerName,
                                        onChange: (e)=>setNewPlayerName(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && addPlayer(),
                                        maxLength: 12,
                                        className: "h-12 bg-white border-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        className: "h-12 w-12 shrink-0 bg-indigo-500 hover:bg-indigo-600",
                                        onClick: addPlayer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            gameState.players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: gameState.players.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 bg-slate-50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold flex items-center justify-center",
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-slate-700",
                                                        children: player.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removePlayer(player.id),
                                                className: "text-slate-400 hover:text-red-500 transition-colors p-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, player.id, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this),
                            gameState.players.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 text-center",
                                children: "Ajoutez au moins 2 joueurs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-slate-700",
                                children: "Thème"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_THEMES"].map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGameState((prev)=>({
                                                    ...prev,
                                                    theme: theme.id
                                                })),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-xl text-left transition-all", gameState.theme === theme.id ? "bg-indigo-500 text-white shadow-md" : "bg-slate-50 hover:bg-slate-100 text-slate-700"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-sm",
                                                children: theme.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5 truncate", gameState.theme === theme.id ? "text-indigo-100" : "text-slate-500"),
                                                children: theme.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, theme.id, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-slate-700",
                                children: "Nombre de manches"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    3,
                                    5,
                                    7,
                                    10
                                ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGameState((prev)=>({
                                                    ...prev,
                                                    maxRounds: num
                                                })),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 rounded-xl font-bold transition-all", gameState.maxRounds === num ? "bg-indigo-500 text-white shadow-md" : "bg-slate-50 hover:bg-slate-100 text-slate-700"),
                                        children: num
                                    }, num, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full h-14 text-lg font-semibold rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                        onClick: startGame,
                        disabled: gameState.players.length < 2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "h-5 w-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            "Commencer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this);
    }
    // Phase: Médium voit la cible
    if (gameState.phase === "psychic-view") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4",
            children: [
                showQuitConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuitConfirmModal, {}, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 335,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md md:max-w-xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameHeader, {}, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-6",
                            children: !showTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 mb-2",
                                                children: "Passez le téléphone à"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl font-bold text-indigo-600",
                                                children: currentPsychic?.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 mt-2",
                                                children: "C'est ton tour d'être le Médium"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 342,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full h-14 text-lg rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                                        onClick: psychicReady,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-5 w-5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this),
                                            "Je suis ",
                                            currentPsychic?.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WavelengthWheel"], {
                                        targetPosition: gameState.targetPosition ?? 90,
                                        showTarget: true,
                                        showZones: true,
                                        interactive: false,
                                        leftExtreme: gameState.currentCard?.leftExtreme || "",
                                        rightExtreme: gameState.currentCard?.rightExtreme || ""
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-violet-50 border border-violet-200 rounded-2xl p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-violet-700",
                                            children: "Mémorise la position de la cible !"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 364,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full h-14 text-lg rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                                        onClick: psychicHideTarget,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                className: "h-5 w-5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            "J'ai mémorisé"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 334,
            columnNumber: 7
        }, this);
    }
    // Phase: Médium donne son indice
    if (gameState.phase === "psychic-clue") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4",
            children: [
                showQuitConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuitConfirmModal, {}, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 383,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md md:max-w-xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameHeader, {}, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WavelengthWheel"], {
                            targetPosition: gameState.targetPosition ?? 90,
                            showTarget: false,
                            showZones: false,
                            interactive: false,
                            leftExtreme: gameState.currentCard?.leftExtreme || "",
                            rightExtreme: gameState.currentCard?.rightExtreme || ""
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500",
                                        children: [
                                            currentPsychic?.name,
                                            ", donne un indice"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ton indice...",
                                            value: clue,
                                            onChange: (e)=>setClue(e.target.value),
                                            onKeyDown: (e)=>e.key === "Enter" && submitClue(),
                                            className: "h-14 text-lg rounded-2xl bg-white border-slate-200",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "icon",
                                            className: "h-14 w-14 rounded-2xl shrink-0 bg-indigo-500 hover:bg-indigo-600",
                                            onClick: submitClue,
                                            disabled: !clue.trim(),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this);
    }
    // Phase: Joueurs devinent
    if (gameState.phase === "guessing") {
        const currentGuesser = guessers[currentGuesserIndex];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4",
            children: [
                showQuitConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuitConfirmModal, {}, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 431,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md md:max-w-xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameHeader, {}, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm",
                                    children: "Passez à"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-indigo-600",
                                    children: currentGuesser?.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mb-4 text-center shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500",
                                    children: "L'indice :"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-indigo-600",
                                    children: [
                                        '"',
                                        gameState.currentClue,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WavelengthWheel"], {
                            targetPosition: gameState.targetPosition ?? 90,
                            showTarget: false,
                            showZones: false,
                            guessPosition: currentGuess,
                            onGuessChange: setCurrentGuess,
                            interactive: true,
                            leftExtreme: gameState.currentCard?.leftExtreme || "",
                            rightExtreme: gameState.currentCard?.rightExtreme || ""
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "w-full h-14 text-lg rounded-2xl mt-6 bg-indigo-500 hover:bg-indigo-600",
                            onClick: submitGuess,
                            children: "Valider"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-slate-500 mt-3",
                            children: [
                                "Joueur ",
                                currentGuesserIndex + 1,
                                "/",
                                guessers.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 430,
            columnNumber: 7
        }, this);
    }
    // Phase: Révélation
    if (gameState.phase === "reveal") {
        // Sort logic remains, but we need state to know WHICH player to show on the wheel
        // Since we can't add state inside this conditional block easily without refactoring the whole component approach or moving state up,
        // we'll rely on a new state variable `selectedRevealPlayerId` added to the main component.
        // BUT, I can't add state here easily without re-rendering the whole component logic.
        // Let's assume I'll add `const [selectedRevealPlayerId, setSelectedRevealPlayerId] = useState<string | null>(null)` at the top
        // For now, I'll implement the UI assuming that state exists, and then I'll add the state in a separate edit or I'll use a local trick (but clean react is better).
        // Actually, I need to add the state first. I'll do this in two steps? No, I can do it in one ReplaceFileContent if I include the top of the file.
        // But I'm limited in lines. I'll just change the UI here to default to the first player if no selection, and I'll add the state variable in a separate edit or use a ref? No, state is needed.
        // WAIT. I can't easily add a state hook at the top of the function if I'm only editing lines 440-498.
        // I will rewrite the component start to add the state, OR I can use `currentGuesserIndex` as a "viewer index" for the reveal phase too!
        // `currentGuesserIndex` is already state. In "guessing" phase it tracks who is playing.
        // In "reveal" phase, we can re-purpose it to track "who's result we are viewing".
        // Perfect reuse of state!
        const guessResults = gameState.guesses.map((guess)=>{
            const player = gameState.players.find((p)=>p.id === guess.playerId);
            const points = gameState.targetPosition !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePoints"])(guess.position, gameState.targetPosition) : 0;
            return {
                ...guess,
                player,
                points
            };
        }).sort((a, b)=>b.points - a.points);
        // Ensure index is valid for results
        // We want to default to the winner (index 0 of sorted results) initially? 
        // Or just let user click?
        // Let's use `selectedPlayerId` derived from `currentGuesserIndex` if we map it?
        // Actually, `currentGuesserIndex` is an integer. Let's just use it as "index in the guessResults array".
        // But initially it might be out of sync.
        // Let's rely on user interaction. We'll show the result of `guessResults[viewIndex]` where `viewIndex` is state.
        // I'll add `const [viewResultIndex, setViewResultIndex] = useState(0)` at top in next Step. 
        // For now, I'll implement the UI using `currentGuesserIndex` as the "view index".
        // I need to reset `currentGuesserIndex` to 0 when entering "reveal". 
        // I did `setCurrentGuesserIndex(0)` in `submitGuess` when finishing? No, I didn't. 
        // I'll check `submitGuess` logic. 
        // Let's assume I will fix the state logic. Here is the UI update:
        const viewedResult = guessResults[currentGuesserIndex] || guessResults[0];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 pb-8",
            children: [
                showQuitConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuitConfirmModal, {}, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 514,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md md:max-w-xl mx-auto space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameHeader, {}, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 mb-1",
                                    children: "Résultat pour"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-indigo-600",
                                    children: viewedResult?.player?.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WavelengthWheel"], {
                            targetPosition: gameState.targetPosition ?? 90,
                            showTarget: true,
                            showZones: true,
                            interactive: false,
                            guessPosition: viewedResult?.position ?? 90,
                            leftExtreme: gameState.currentCard?.leftExtreme || "",
                            rightExtreme: gameState.currentCard?.rightExtreme || ""
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-slate-500",
                                    children: [
                                        "Indice : ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-indigo-600",
                                            children: [
                                                '"',
                                                gameState.currentClue,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 535,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 534,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: guessResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentGuesserIndex(index),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center justify-between p-3 rounded-xl transition-all border", currentGuesserIndex === index ? "bg-indigo-50 border-indigo-200 shadow-sm" : "bg-slate-50 border-transparent hover:bg-slate-100"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center", currentGuesserIndex === index ? "bg-indigo-500 text-white" : "bg-slate-200 text-slate-600"),
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", currentGuesserIndex === index ? "text-indigo-700" : "text-slate-700"),
                                                            children: result.player?.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-full text-sm font-bold", result.points >= 4 ? "bg-violet-100 text-violet-700" : result.points >= 2 ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"),
                                                    children: [
                                                        "+",
                                                        result.points
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, result.playerId, true, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-slate-700 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                            className: "h-4 w-4 text-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        "Classement"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        ...gameState.players
                                    ].sort((a, b)=>b.score - a.score).map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between p-3 rounded-xl", index === 0 && player.score > 0 ? "bg-amber-50 border border-amber-200" : "bg-slate-50"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center", index === 0 && player.score > 0 ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-600"),
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-slate-700",
                                                            children: player.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-700",
                                                    children: [
                                                        player.score,
                                                        " pts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                            lineNumber: 590,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "w-full h-14 text-lg rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                            onClick: nextRound,
                            children: gameState.currentRound >= gameState.maxRounds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 619,
                                        columnNumber: 17
                                    }, this),
                                    "Résultats finaux"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, this),
                                    "Manche suivante"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                    lineNumber: 515,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 513,
            columnNumber: 7
        }, this);
    }
    // Phase: Terminé
    if (gameState.phase === "finished") {
        const sortedPlayers = [
            ...gameState.players
        ].sort((a, b)=>b.score - a.score);
        const winner = sortedPlayers[0];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-10 w-10 text-amber-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-slate-800",
                                children: "Partie terminée !"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-indigo-600",
                                        children: winner?.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 648,
                                        columnNumber: 15
                                    }, this),
                                    " gagne avec ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            winner?.score,
                                            " points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 648,
                                        columnNumber: 96
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-2 shadow-sm",
                        children: sortedPlayers.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between p-4 rounded-xl", index === 0 ? "bg-amber-50 border border-amber-200" : "bg-slate-50"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center", index === 0 ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-600"),
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 662,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-lg text-slate-700",
                                                children: player.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 661,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-lg text-slate-700",
                                        children: [
                                            player.score,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, player.id, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 654,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "flex-1 h-14 rounded-2xl bg-white hover:bg-slate-50",
                                onClick: onBack,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, this),
                                    "Accueil"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1 h-14 rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                                onClick: restartGame,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    "Rejouer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                        lineNumber: 677,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
                lineNumber: 641,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/components/local-game.tsx",
            lineNumber: 640,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(LocalGame, "wjSQ7w5Zc/MVA4IsvJmYGT+uAvk=");
_c = LocalGame;
var _c;
__turbopack_context__.k.register(_c, "LocalGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PredictWheel/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/game-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$local$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/local-game.tsx [app-client] (ecmascript)");
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
function HomePage() {
    _s();
    const [playerName, setPlayerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gameCode, setGameCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("select");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const handleCreateGame = async ()=>{
        if (!playerName.trim()) {
            setError("Entrez votre nom pour continuer");
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateGameCode"])();
            const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionId"])();
            const { data: game, error: gameError } = await supabase.from("games").insert({
                code,
                status: "waiting"
            }).select().single();
            if (gameError) throw gameError;
            const { error: playerError } = await supabase.from("game_players").insert({
                game_id: game.id,
                player_name: playerName,
                session_id: sessionId,
                is_host: true
            });
            if (playerError) throw playerError;
            router.push(`/game/${code}`);
        } catch (err) {
            console.error(err);
            setError("Erreur lors de la création de la partie");
        } finally{
            setIsLoading(false);
        }
    };
    const handleJoinGame = async ()=>{
        if (!playerName.trim()) {
            setError("Entrez votre nom pour continuer");
            return;
        }
        if (!gameCode.trim()) {
            setError("Entrez le code de la partie");
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionId"])();
            const { data: game, error: gameError } = await supabase.from("games").select("*").eq("code", gameCode.toUpperCase()).single();
            if (gameError || !game) {
                setError("Partie introuvable");
                return;
            }
            if (game.status !== "waiting") {
                setError("Cette partie a déjà commencé");
                return;
            }
            const { data: existingPlayer } = await supabase.from("game_players").select("*").eq("game_id", game.id).eq("session_id", sessionId).single();
            if (!existingPlayer) {
                const { error: playerError } = await supabase.from("game_players").insert({
                    game_id: game.id,
                    player_name: playerName,
                    session_id: sessionId,
                    is_host: false
                });
                if (playerError) throw playerError;
            }
            router.push(`/game/${gameCode.toUpperCase()}`);
        } catch (err) {
            console.error(err);
            setError("Erreur lors de la connexion à la partie");
        } finally{
            setIsLoading(false);
        }
    };
    if (mode === "local") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$local$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalGame"], {
            onBack: ()=>setMode("select")
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
            lineNumber: 120,
            columnNumber: 12
        }, this);
    }
    if (mode === "select") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                    className: "h-10 w-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-slate-800 tracking-tight",
                                        children: "Predict Wheel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 mt-2",
                                        children: "Êtes-vous sur la même longueur d'onde ?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMode("local"),
                                className: "w-full p-5 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center gap-4 hover:bg-white/90 hover:border-indigo-200 transition-all text-left shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "h-7 w-7 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-800",
                                                children: "Mode Local"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "Jouer ensemble sur le même téléphone/ordinateur"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMode("online"),
                                className: "w-full p-5 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center gap-4 hover:bg-white/90 hover:border-violet-200 transition-all text-left shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                            className: "h-7 w-7 text-violet-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-800",
                                                children: "Mode En Ligne"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "Jouez avec un code de partie"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-slate-500",
                        children: "Un jeu de communication entre amis"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 pb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setMode("select"),
                    className: "flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Retour"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                className: "h-8 w-8 text-violet-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-slate-800",
                            children: "Mode En Ligne"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 mt-1",
                            children: "Créez ou rejoignez une partie"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-slate-600",
                                children: "Votre pseudo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Entrez votre nom...",
                                value: playerName,
                                onChange: (e)=>setPlayerName(e.target.value),
                                maxLength: 20,
                                className: "h-12 rounded-xl bg-white border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-600 text-center",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-full h-14 text-lg font-semibold rounded-2xl bg-indigo-500 hover:bg-indigo-600",
                    onClick: handleCreateGame,
                    disabled: isLoading || !playerName.trim(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-5 w-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        "Créer une partie"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-full border-t border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-slate-50 via-white to-indigo-50 px-4 text-sm text-slate-500",
                                children: "ou rejoindre"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "CODE",
                            value: gameCode,
                            onChange: (e)=>setGameCode(e.target.value.toUpperCase()),
                            maxLength: 6,
                            className: "h-14 text-center text-xl font-mono tracking-[0.2em] uppercase rounded-xl bg-white border-slate-200 flex-1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "h-14 px-6 text-lg font-semibold rounded-2xl bg-violet-500 hover:bg-violet-600",
                            onClick: handleJoinGame,
                            disabled: isLoading || !playerName.trim() || !gameCode.trim(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "h-5 w-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                "Rejoindre"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/app/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(HomePage, "JmhgpHLT26b9RrgaaRD/PAkQ+9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_PredictWheel_30607d1f._.js.map