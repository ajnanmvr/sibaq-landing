import MenuIcon from "@/assets/vector/MenuIcon";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MenuIcon className="animate-spin" />
    </div>
  );
}
