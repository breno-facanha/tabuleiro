import Tabuleiro from "@/components/Tabuleiro";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-500">
      <div className="">
        <Tabuleiro inverso="flex-row" />
        <Tabuleiro inverso="flex-row-reverse" />
        <Tabuleiro inverso="flex-row" />
        <Tabuleiro inverso="flex-row-reverse" />
        <Tabuleiro inverso="flex-row" />
        <Tabuleiro inverso="flex-row-reverse" />
        <Tabuleiro inverso="flex-row" />
        <Tabuleiro inverso="flex-row-reverse" />
      </div>
    </div>
  );
}
