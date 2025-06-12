export default function TerminalWindow({ title, children, className = '' }) {
  return (
    <div className={`terminal ${className}`}> 
      {title && (
        <div className="flex items-center mb-2 space-x-2">
          <span className="bg-red-500 w-3 h-3 rounded-full" />
          <span className="bg-yellow-500 w-3 h-3 rounded-full" />
          <span className="bg-green-500 w-3 h-3 rounded-full" />
          <span className="ml-2 text-xs text-accent">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}
