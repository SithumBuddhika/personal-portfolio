export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-center text-2xl md:text-3xl font-semibold">
      {children}
    </h2>
  );
}
