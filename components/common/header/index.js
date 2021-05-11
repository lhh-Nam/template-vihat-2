import dynamic from 'next/dynamic';
const Comp = dynamic(() => import('./Header'), { loading: () => <div></div>, ssr: true });
export default Comp;