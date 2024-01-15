function ThematicBreak({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative block text-center my-6 ">
      <span className="absolute w-full flex justify-center items-center inset-0">
        <span className="h-0.5 w-full border-b"></span>
      </span>
      <span className="relative bg-white inline-block px-3 mt-0">
        {children}
      </span>
    </span>
  );
}

export default ThematicBreak;
