module.exports = [
"[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/PredictWheel/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/Desktop/PredictWheel/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/PredictWheel/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
;
let client = null;
function createClient() {
    if (client) return client;
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://astzfcjbavcixppuxpqf.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdHpmY2piYXZjaXhwcHV4cHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzMTE0ODcsImV4cCI6MjA4MDg4NzQ4N30.wZ8Ae3a6VUt5gbIJFsGwDyHpFDFcZao4wb-gKsfUvxg"));
    return client;
}
}),
"[project]/Desktop/PredictWheel/lib/game-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
    let sessionId;
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
}),
"[project]/Desktop/PredictWheel/lib/local-cards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/PredictWheel/components/game-lobby.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameLobby",
    ()=>GameLobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/game-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/local-cards.ts [app-ssr] (ecmascript)");
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
function GameLobby({ gameState, onStartGame }) {
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(gameState.players);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTheme, setSelectedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(gameState.theme?.id || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_THEMES"][0].id);
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const isHost = players.find((p)=>p.session_id === sessionId)?.is_host;
    // Refresh players from database
    const refreshPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const { data } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id);
        if (data) setPlayers(data);
    }, [
        supabase,
        gameState.game.id
    ]);
    // Auto-sync database content (themes and cards) silently on mount
    const syncDatabaseSilently = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isSyncing) return;
        setIsSyncing(true);
        try {
            // Sync Themes
            for (const theme of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_THEMES"]){
                // @ts-ignore
                await supabase.from("themes").upsert({
                    id: theme.id,
                    name: theme.name,
                    description: theme.description
                });
            }
            // Sync Cards (only insert new ones)
            for (const card of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_CARDS"]){
                const { data: existing } = await supabase.from("cards").select("id").eq("left_extreme", card.leftExtreme).eq("right_extreme", card.rightExtreme).eq("theme_id", card.theme).maybeSingle();
                if (!existing) {
                    // @ts-ignore
                    await supabase.from("cards").insert({
                        theme_id: card.theme,
                        left_extreme: card.leftExtreme,
                        right_extreme: card.rightExtreme
                    });
                }
            }
        } catch (err) {
            console.error("Sync error:", err);
        } finally{
            setIsSyncing(false);
        }
    }, [
        supabase,
        isSyncing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set session ID on client only
        setSessionId((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionId"])());
        // Auto-sync database on mount (silent, no alerts)
        syncDatabaseSilently();
        // Set initial theme if not set
        if (!selectedTheme) {
            setSelectedTheme(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_THEMES"][0].id);
        }
        // Update game with selected theme
        if (isHost && selectedTheme) {
            supabase.from("games").update({
                theme_id: selectedTheme
            }).eq("id", gameState.game.id);
        }
        // Subscribe to player changes
        const channel = supabase.channel(`game-${gameState.game.id}`).on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "game_players",
            filter: `game_id=eq.${gameState.game.id}`
        }, ()=>{
            refreshPlayers();
        }).subscribe();
        // Fallback: Poll for player updates every 3 seconds
        const pollInterval = setInterval(refreshPlayers, 3000);
        return ()=>{
            supabase.removeChannel(channel);
            clearInterval(pollInterval);
        };
    }, [
        gameState.game.id,
        supabase,
        selectedTheme,
        isHost,
        syncDatabaseSilently,
        refreshPlayers
    ]);
    const handleCopyCode = async ()=>{
        await navigator.clipboard.writeText(gameState.game.code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleThemeChange = async (themeId)=>{
        setSelectedTheme(themeId);
        // @ts-ignore
        await supabase.from("games").update({
            theme_id: themeId
        }).eq("id", gameState.game.id);
    };
    const canStart = players.length >= 2 && selectedTheme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative w-full max-w-lg shadow-xl border-slate-200 bg-white/90 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center pb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-indigo-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                    className: "h-8 w-8 text-indigo-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl font-bold text-slate-800",
                            children: "Salle d'attente"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 mt-1",
                            children: "Partagez le code pour inviter des joueurs"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-4 bg-slate-100 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-mono font-bold tracking-[0.2em] text-slate-800",
                                        children: gameState.game.code
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "h-14 w-14 bg-white",
                                    onClick: handleCopyCode,
                                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-5 w-5 text-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                        lineNumber: 152,
                                        columnNumber: 72
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: "Choisir un thème"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$local$2d$cards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_THEMES"].map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: selectedTheme === theme.id ? "default" : "outline",
                                            className: "cursor-pointer transition-all hover:scale-105 px-4 py-2 text-sm",
                                            onClick: ()=>handleThemeChange(theme.id),
                                            children: theme.name
                                        }, theme.id, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm font-semibold text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        "Joueurs (",
                                        players.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: players.map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-slate-700",
                                                    children: player.player_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        player.is_host && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "gap-1 bg-amber-100 text-amber-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Hôte"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this),
                                                        player.session_id === sessionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "border-indigo-300 text-indigo-600",
                                                            children: "Vous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                players.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 text-center py-2",
                                    children: "En attente d'au moins 2 joueurs..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            className: "w-full h-12 text-base font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-xl",
                            size: "lg",
                            onClick: onStartGame,
                            disabled: !canStart,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-5 w-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                !canStart ? "En attente de joueurs..." : "Démarrer la partie"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center p-4 bg-slate-50 rounded-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500",
                                children: "En attente que l'hôte démarre la partie..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/game-lobby.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/PredictWheel/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WavelengthWheel",
    ()=>WavelengthWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function WavelengthWheel({ targetPosition = 90, showTarget = false, guessPosition, onGuessChange, interactive = false, leftExtreme, rightExtreme, showZones = false }) {
    const [currentGuess, setCurrentGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(guessPosition ?? 90);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (guessPosition !== undefined) {
            setCurrentGuess(guessPosition);
        }
    }, [
        guessPosition
    ]);
    const handleInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, clientY)=>{
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
    }, [
        interactive,
        onGuessChange
    ]);
    const handleMouseDown = (e)=>{
        if (!interactive) return;
        e.preventDefault();
        setIsDragging(true);
        handleInteraction(e.clientX, e.clientY);
    };
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging) return;
        handleInteraction(e.clientX, e.clientY);
    }, [
        isDragging,
        handleInteraction
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDragging(false);
    }, []);
    const handleTouchStart = (e)=>{
        if (!interactive) return;
        setIsDragging(true);
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
    };
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
    }, [
        isDragging,
        handleInteraction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            window.addEventListener("touchend", handleMouseUp);
        }
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(startAngle, endAngle, 45, 175),
                        fill: zone.color,
                        opacity: 0.9
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(!isDragging && "transition-transform duration-500 ease-out"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 230",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto touch-none select-none", interactive && "cursor-pointer"),
                onMouseDown: handleMouseDown,
                onTouchStart: handleTouchStart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(0, 180, 0, 180),
                        fill: "#f1f5f9"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: createArc(0, 180, 175, 185),
                        fill: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mt-2 px-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Desktop/PredictWheel/components/game-play.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GamePlay",
    ()=>GamePlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/wavelength-wheel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/game-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/utils.ts [app-ssr] (ecmascript)");
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
;
;
function GamePlay({ initialGameState }) {
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [clue, setClue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [guessPosition, setGuessPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(90);
    const [hasGuessed, setHasGuessed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState.game.current_clue ? "guessing" : "psychic");
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const currentPlayer = sessionId ? gameState.players.find((p)=>p.session_id === sessionId) : undefined;
    const isPsychic = currentPlayer?.is_psychic;
    const psychicPlayer = gameState.players.find((p)=>p.is_psychic);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set session ID on client only to avoid hydration mismatch
        setSessionId((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionId"])());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const gameChannel = supabase.channel(`game-play-${gameState.game.id}`).on("postgres_changes", {
            event: "UPDATE",
            schema: "public",
            table: "games",
            filter: `id=eq.${gameState.game.id}`
        }, async (payload)=>{
            const updatedGame = payload.new;
            let currentCard = gameState.currentCard;
            if (updatedGame.current_card_id && updatedGame.current_card_id !== gameState.currentCard?.id) {
                const { data } = await supabase.from("cards").select("*").eq("id", updatedGame.current_card_id).single();
                if (data) currentCard = data;
            }
            setGameState((prev)=>({
                    ...prev,
                    game: updatedGame,
                    currentCard
                }));
            if (updatedGame.current_clue && phase === "psychic") {
                setPhase("guessing");
            }
        }).on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "game_players",
            filter: `game_id=eq.${gameState.game.id}`
        }, async ()=>{
            const { data } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id);
            if (data) {
                setGameState((prev)=>({
                        ...prev,
                        players: data
                    }));
            }
        }).subscribe();
        // Fallback: Poll for updates every 2 seconds
        const pollInterval = setInterval(async ()=>{
            const { data: game } = await supabase.from("games").select("*").eq("id", gameState.game.id).single();
            const { data: players } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id);
            if (game && players) {
                // Check if clue was submitted
                if (game.current_clue && phase === "psychic") {
                    setPhase("guessing");
                }
                // Check if all guessed
                const nonPsychics = players.filter((p)=>!p.is_psychic);
                const allGuessed = nonPsychics.every((p)=>p.guess_position !== null);
                if (allGuessed && phase === "guessing" && nonPsychics.length > 0) {
                    setPhase("reveal");
                }
                // Check if new round started
                if (game.current_round !== gameState.game.current_round) {
                    setPhase("psychic");
                    setClue("");
                    setHasGuessed(false);
                    setGuessPosition(90);
                }
                // Update card if changed
                let currentCard = gameState.currentCard;
                if (game.current_card_id && game.current_card_id !== gameState.currentCard?.id) {
                    const { data } = await supabase.from("cards").select("*").eq("id", game.current_card_id).single();
                    if (data) currentCard = data;
                }
                setGameState((prev)=>({
                        ...prev,
                        game,
                        players,
                        currentCard
                    }));
            }
        }, 2000);
        return ()=>{
            supabase.removeChannel(gameChannel);
            clearInterval(pollInterval);
        };
    }, [
        gameState.game.id,
        supabase,
        phase
    ]);
    const handleSubmitClue = async ()=>{
        if (!clue.trim()) return;
        await supabase.from("games").update({
            current_clue: clue
        }).eq("id", gameState.game.id);
        setPhase("guessing");
    };
    const handleSubmitGuess = async ()=>{
        if (!currentPlayer) return;
        await supabase.from("game_players").update({
            guess_position: guessPosition
        }).eq("id", currentPlayer.id);
        setHasGuessed(true);
        const { data: players } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id).eq("is_psychic", false);
        const allGuessed = players?.every((p)=>p.guess_position !== null || p.id === currentPlayer.id);
        if (allGuessed) {
            setPhase("reveal");
            if (gameState.game.target_position !== null) {
                for (const player of players || []){
                    const guess = player.id === currentPlayer.id ? guessPosition : player.guess_position;
                    if (guess !== null) {
                        const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePoints"])(guess, gameState.game.target_position);
                        await supabase.from("game_players").update({
                            score: player.score + points
                        }).eq("id", player.id);
                    }
                }
            }
        }
    };
    const handleNextRound = async ()=>{
        // Get a new card
        const { data: cards } = await supabase.from("cards").select("*").eq("theme_id", gameState.theme?.id);
        if (!cards || cards.length === 0) return;
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        const targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTargetPosition"])();
        // Rotate psychic to next player
        const currentPsychicIndex = gameState.players.findIndex((p)=>p.is_psychic);
        const nextPsychicIndex = (currentPsychicIndex + 1) % gameState.players.length;
        const nextPsychic = gameState.players[nextPsychicIndex];
        // Reset all players
        for (const player of gameState.players){
            await supabase.from("game_players").update({
                is_psychic: player.id === nextPsychic.id,
                guess_position: null
            }).eq("id", player.id);
        }
        // Update game
        await supabase.from("games").update({
            current_round: gameState.game.current_round + 1,
            current_card_id: randomCard.id,
            target_position: targetPosition,
            current_clue: null
        }).eq("id", gameState.game.id);
        setPhase("psychic");
        setClue("");
        setHasGuessed(false);
        setGuessPosition(90);
    };
    const guessersWhoGuessed = gameState.players.filter((p)=>!p.is_psychic && p.guess_position !== null).length;
    const totalGuessers = gameState.players.filter((p)=>!p.is_psychic).length;
    const isLastRound = gameState.game.current_round >= gameState.game.max_rounds;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-2xl mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-primary/10 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "text-base px-4 py-2 font-semibold",
                                        children: [
                                            "Manche ",
                                            gameState.game.current_round,
                                            "/",
                                            gameState.game.max_rounds
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "gap-2 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    gameState.players.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-border/50 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-8 pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$wavelength$2d$wheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WavelengthWheel"], {
                                targetPosition: gameState.game.target_position ?? 90,
                                showTarget: phase === "reveal" || isPsychic && phase === "psychic",
                                showZones: phase === "reveal" || isPsychic && phase === "psychic",
                                guessPosition: phase === "guessing" || phase === "reveal" ? guessPosition : undefined,
                                onGuessChange: setGuessPosition,
                                interactive: !isPsychic && phase === "guessing" && !hasGuessed,
                                leftExtreme: gameState.currentCard?.left_extreme || "Extrême gauche",
                                rightExtreme: gameState.currentCard?.right_extreme || "Extrême droite"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-border/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-center text-lg",
                                    children: isPsychic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center gap-2 text-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this),
                                            "Vous êtes le Médium"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground",
                                        children: [
                                            psychicPlayer?.player_name,
                                            " est le Médium"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    isPsychic && phase === "psychic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-primary/5 rounded-xl border border-primary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-foreground",
                                                    children: "La cible est placée. Donnez un indice pour aider les autres joueurs à la trouver !"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Entrez votre indice...",
                                                        value: clue,
                                                        onChange: (e)=>setClue(e.target.value),
                                                        onKeyDown: (e)=>e.key === "Enter" && handleSubmitClue(),
                                                        className: "h-12 text-base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "icon",
                                                        className: "h-12 w-12",
                                                        onClick: handleSubmitClue,
                                                        disabled: !clue.trim(),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    !isPsychic && phase === "guessing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "L'indice du Médium :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-primary/5 rounded-xl border border-primary/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-primary",
                                                            children: [
                                                                '"',
                                                                gameState.game.current_clue,
                                                                '"'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            !hasGuessed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full h-12 text-base font-semibold",
                                                size: "lg",
                                                onClick: handleSubmitGuess,
                                                children: "Valider ma position"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-muted/50 rounded-xl text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "En attente des autres joueurs... (",
                                                        guessersWhoGuessed,
                                                        "/",
                                                        totalGuessers,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    isPsychic && phase === "guessing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Votre indice :"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-muted/50 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-semibold text-foreground",
                                                    children: [
                                                        '"',
                                                        gameState.game.current_clue,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "En attente des réponses... (",
                                                    guessersWhoGuessed,
                                                    "/",
                                                    totalGuessers,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    phase === "reveal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold text-indigo-700",
                                                    children: "Résultats de la manche"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: gameState.players.filter((p)=>!p.is_psychic).sort((a, b)=>{
                                                    const pointsA = a.guess_position !== null && gameState.game.target_position !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePoints"])(a.guess_position, gameState.game.target_position) : 0;
                                                    const pointsB = b.guess_position !== null && gameState.game.target_position !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePoints"])(b.guess_position, gameState.game.target_position) : 0;
                                                    return pointsB - pointsA;
                                                }).map((player)=>{
                                                    const points = player.guess_position !== null && gameState.game.target_position !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePoints"])(player.guess_position, gameState.game.target_position) : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-foreground",
                                                                children: player.player_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            Math.round(player.guess_position ?? 0),
                                                                            "°"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: points >= 4 ? "default" : points >= 2 ? "secondary" : "outline",
                                                                        className: "min-w-[60px] justify-center",
                                                                        children: [
                                                                            "+",
                                                                            points,
                                                                            " pts"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, player.id, true, {
                                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full h-12 text-base font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-xl",
                                                onClick: handleNextRound,
                                                children: isLastRound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                            className: "h-5 w-5 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Voir les résultats"
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-5 w-5 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Manche suivante"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-border/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                            className: "h-4 w-4 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        "Classement"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: gameState.players.sort((a, b)=>b.score - a.score).map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between p-3 rounded-lg", index === 0 && player.score > 0 ? "bg-accent/10 border border-accent/20" : "bg-muted/30"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-muted-foreground w-6",
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-foreground",
                                                            children: [
                                                                player.player_name,
                                                                player.is_psychic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    className: "inline-block h-4 w-4 ml-2 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 47
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "font-bold",
                                                    children: [
                                                        player.score,
                                                        " pts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, player.id, true, {
                                            fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PredictWheel/components/game-play.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/PredictWheel/app/game/[code]/game-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameClient",
    ()=>GameClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$game$2d$lobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/game-lobby.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$game$2d$play$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/components/game-play.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/lib/game-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PredictWheel/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function GameClient({ initialGameState }) {
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Vérifier que le joueur est dans la partie
        const isInGame = gameState.players.some((p)=>p.session_id === sessionId);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // S'abonner aux changements de la partie
        const channel = supabase.channel(`game-state-${gameState.game.id}`).on("postgres_changes", {
            event: "UPDATE",
            schema: "public",
            table: "games",
            filter: `id=eq.${gameState.game.id}`
        }, async (payload)=>{
            const updatedGame = payload.new;
            let currentCard = gameState.currentCard;
            let theme = gameState.theme;
            if (updatedGame.current_card_id && updatedGame.current_card_id !== gameState.currentCard?.id) {
                const { data } = await supabase.from("cards").select("*").eq("id", updatedGame.current_card_id).single();
                if (data) currentCard = data;
            }
            if (updatedGame.theme_id && updatedGame.theme_id !== gameState.theme?.id) {
                const { data } = await supabase.from("themes").select("*").eq("id", updatedGame.theme_id).single();
                if (data) theme = data;
            }
            setGameState((prev)=>({
                    ...prev,
                    game: updatedGame,
                    currentCard,
                    theme
                }));
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, [
        gameState.game.id,
        supabase,
        sessionId,
        router
    ]);
    const handleStartGame = async ()=>{
        console.log("Starting game...");
        // Get the selected theme from the game state
        const themeId = gameState.theme?.id || "tous";
        console.log("Theme ID:", themeId);
        // Fetch cards - if "tous", get all cards, otherwise filter by theme
        let cards;
        if (themeId === "tous") {
            // @ts-ignore
            const { data } = await supabase.from("cards").select("*");
            cards = data;
        } else {
            // @ts-ignore
            const { data } = await supabase.from("cards").select("*").eq("theme_id", themeId);
            cards = data;
        }
        console.log("Cards found:", cards?.length || 0);
        if (!cards || cards.length === 0) {
            console.error("No cards found for theme:", themeId);
            alert("Erreur: Aucune carte trouvée. Veuillez patienter quelques secondes pendant la synchronisation puis réessayer.");
            return;
        }
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        const targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTargetPosition"])();
        // Récupérer la liste à jour des joueurs
        const { data: currentPlayers } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id);
        if (!currentPlayers || currentPlayers.length < 2) return;
        const randomPsychic = currentPlayers[Math.floor(Math.random() * currentPlayers.length)];
        // Mettre à jour les joueurs
        for (const player of currentPlayers){
            // @ts-ignore
            await supabase.from("game_players").update({
                is_psychic: player.id === randomPsychic.id,
                guess_position: null
            }).eq("id", player.id);
        }
        // Démarrer la partie
        // @ts-ignore
        await supabase.from("games").update({
            status: "playing",
            current_round: 1,
            current_card_id: randomCard.id,
            target_position: targetPosition,
            current_clue: null
        }).eq("id", gameState.game.id);
    };
    if (gameState.game.status === "waiting") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$game$2d$lobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameLobby"], {
            gameState: gameState,
            onStartGame: handleStartGame
        }, void 0, false, {
            fileName: "[project]/Desktop/PredictWheel/app/game/[code]/game-client.tsx",
            lineNumber: 135,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PredictWheel$2f$components$2f$game$2d$play$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GamePlay"], {
        initialGameState: gameState
    }, void 0, false, {
        fileName: "[project]/Desktop/PredictWheel/app/game/[code]/game-client.tsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_PredictWheel_d1f8aea2._.js.map