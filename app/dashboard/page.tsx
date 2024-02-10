export default function DashboardPage(props: { children: React.ReactNode }) {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      {props.children}
    </div>
  );
}
