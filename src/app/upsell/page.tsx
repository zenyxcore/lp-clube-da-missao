import type { Metadata } from 'next';
import { CAKTO_SEASON_UPSELL } from '@/lib/cakto-upsell';
import { UpsellPage } from '@/components/upsell-page';
export const metadata:Metadata={title:'5 novas aventuras por R$ 37 | Clube da Missão',description:'Cinco missões com histórias, desafios e pistas para viver em família.',robots:{index:false,follow:false}};
function checkout(){try{const u=new URL(process.env.NEXT_PUBLIC_SEASON_CHECKOUT_URL||'https://pay.cakto.com.br/quy8xc5_1210199');return u.protocol==='https:'&&u.hostname==='pay.cakto.com.br'?u.toString():'';}catch{return '';}}
export default async function UpsellRoute({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const p=await searchParams;const enabled=process.env.SEASON_SALES_ENABLED==='true';return <UpsellPage caktoSnippet={enabled?(process.env.CAKTO_UPSELL_BUTTONS_HTML||CAKTO_SEASON_UPSELL):''} checkoutUrl={enabled?checkout():''} fromApp={p.origem==='clube'}/>;}

