export default function MenuItem({ children, active = false }) {
  return (
    <div className={`flex text-zinc-300 py-5 justify-center shadow-black shadow-sm ${active && 'bg-white'}`}>
      {children}
    </div>
  )
}
