const IconCard = ({ Icon, color, label }) => (
  <span className={`flex items-center gap-3 border border-zinc-200 px-4 py-1 rounded-lg cursor-pointer transition-all hover:bg-white group`}>
    <Icon className={`text-white text-xl md:text-3xl group-hover:text-current`} style={{ color: color, }} />
    <p className="text-white uppercase font-archivo group-hover:text-zinc-800">{label}</p>
  </span>
);
export default IconCard