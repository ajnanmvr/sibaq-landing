import ColorGrid from "@/assets/vector/ColorGrid";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ColorGrid className="animate-spin" />
    </div>
  );
}
