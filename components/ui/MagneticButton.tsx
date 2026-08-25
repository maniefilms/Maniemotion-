'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Arrow } from './Arrow';
type Props = { href:string; children:React.ReactNode; kind?:'light'|'dark' };
export function MagneticButton({href,children,kind='light'}:Props) { const reduce = useReducedMotion(); return <motion.div whileHover={reduce?undefined:{scale:1.035}} whileTap={{scale:.98}}><Link href={href} className={`group inline-flex items-center gap-7 px-5 py-3 text-[11px] font-bold tracking-[.08em] ${kind==='light'?'bg-[#f2f0e9] text-[#0b0c0b]':'border border-[var(--line)] text-[#f2f0e9]'}`}>{children}<Arrow /></Link></motion.div>; }
