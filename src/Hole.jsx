export default function Hole({ index, onClick, children }) {
  return (
    <div className="hole" onClick={() => onClick(index)}>
      {children}
    </div>
  );
}
