function Card({children,className }: {children?: React.ReactNode ; className?: string}) {
  return (
    <div className={`p-4 rounded-xl shadow text-black bg-white flex ${className}`}>{children}</div>
  );
}

export default Card;
