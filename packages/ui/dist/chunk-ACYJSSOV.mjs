import { jsx } from 'react/jsx-runtime';

var o=({primary:e=!1,label:l="Boop",size:t="small"})=>jsx("button",{className:`
		  ${e?"ui-bg-red-500":"ui-bg-blue-500"}
		  ${t==="large"?"text-lg":"text-base"}
		`,children:l});

export { o as a };
