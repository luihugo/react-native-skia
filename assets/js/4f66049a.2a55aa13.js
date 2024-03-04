"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8761],{5788:(e,a,t)=>{t.d(a,{Iu:()=>y,yg:()=>g});var r=t(1504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),i=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},y=function(e){var a=i(e.components);return r.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=n,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return t?r.createElement(g,l(l({ref:a},y),{},{components:t})):r.createElement(g,l({ref:a},y))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=d;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<s;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7588:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=t(5072),n=(t(1504),t(5788));const s={id:"mask-filters",title:"Mask Filters",sidebar_label:"Mask Filters",slug:"/mask-filters"},l=void 0,p={unversionedId:"mask-filters",id:"mask-filters",title:"Mask Filters",description:"Mask filters are effects that manipulate the geometry and alpha channel of graphical objects.",source:"@site/docs/mask-filters.md",sourceDirName:".",slug:"/mask-filters",permalink:"/react-native-skia/docs/mask-filters",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/mask-filters.md",tags:[],version:"current",frontMatter:{id:"mask-filters",title:"Mask Filters",sidebar_label:"Mask Filters",slug:"/mask-filters"},sidebar:"tutorialSidebar",previous:{title:"Backdrop Filters",permalink:"/react-native-skia/docs/backdrops-filters"},next:{title:"Color Filters",permalink:"/react-native-skia/docs/color-filters"}},o={},i=[{value:"BlurMask",id:"blurmask",level:2},{value:"Example",id:"example",level:3}],y={toc:i},m="wrapper";function c(e){let{components:a,...s}=e;return(0,n.yg)(m,(0,r.c)({},y,s,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Mask filters are effects that manipulate the geometry and alpha channel of graphical objects. "),(0,n.yg)("h2",{id:"blurmask"},"BlurMask"),(0,n.yg)("p",null,"Creates a blur mask filter."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"blur"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Standard deviation of the Gaussian blur. Must be > 0.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"style?"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"BlurStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Can be ",(0,n.yg)("inlineCode",{parentName:"td"},"normal"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"solid"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"outer"),", or ",(0,n.yg)("inlineCode",{parentName:"td"},"inner")," (default is ",(0,n.yg)("inlineCode",{parentName:"td"},"normal"),").")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"respectCTM?"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:"left"},"if true the blur's sigma is modified by the CTM (default is ",(0,n.yg)("inlineCode",{parentName:"td"},"false"),").")))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("div",{className:"shiki-twoslash-fragment"},(0,n.yg)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,n.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.yg)("div",{parentName:"pre",className:"code-container"},(0,n.yg)("code",{parentName:"div"},(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => React.JSX.Element\nimport Fill"},"Fill")),(0,n.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.yg)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec"),"} "),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,n.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"const MaskFilterDemo: () => React.JSX.Element"},"MaskFilterDemo")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"}}>")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) c?: AnimatedProp<SkPoint | undefined>"},"c")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},")} "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"lightblue"'),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) blur: AnimatedProp<number>"},"blur")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"20"),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,n.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:'(property) style?: AnimatedProp<"normal" | "solid" | "outer" | "inner"> | undefined'},"style")),(0,n.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"normal"'),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,n.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,n.yg)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,n.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.yg)("div",{parentName:"pre",className:"code-container"},(0,n.yg)("code",{parentName:"div"},(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => React.JSX.Element\nimport Fill"},"Fill")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"const MaskFilterDemo: () => React.JSX.Element"},"MaskFilterDemo")),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) c?: AnimatedProp<SkPoint | undefined>"},"c")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,n.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lightblue"),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:'(alias) const BlurMask: ({ style, respectCTM, ...props }: SkiaDefaultProps<BlurMaskFilterProps, "style" | "respectCTM">) => React.JSX.Element\nimport BlurMask'},"BlurMask")),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(property) blur: AnimatedProp<number>"},"blur")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"20"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:'(property) style?: AnimatedProp<"normal" | "solid" | "outer" | "inner"> | undefined'},"style")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"normal"),(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Style"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Result"),(0,n.yg)("th",{parentName:"tr",align:"left"}),(0,n.yg)("th",{parentName:"tr",align:"left"}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"normal"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{alt:"Normal",src:t(9048).c,width:"256",height:"256"})),(0,n.yg)("td",{parentName:"tr",align:"left"},"inner"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{alt:"Inner",src:t(4740).c,width:"256",height:"256"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"solid"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{alt:"Solid",src:t(2439).c,width:"256",height:"256"})),(0,n.yg)("td",{parentName:"tr",align:"left"},"outer"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{alt:"Outer",src:t(6280).c,width:"256",height:"256"}))))))}c.isMDXComponent=!0},4740:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/blur-inner-96bfacb177dce573357eec4e6151a86d.png"},9048:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/blur-normal-169a4bbc719b82dd190629e4b4dac03c.png"},6280:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/blur-outer-6312bdd7b389863d166b1144678c41a4.png"},2439:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/blur-solid-6fa81bdce359fe9ba3f410da3ef9b20f.png"}}]);