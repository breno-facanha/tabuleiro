import Tabuleiro from "@/components/Tabuleiro";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-500">
      <div className="flex flex-col">
        <Tabuleiro inverso="row" />
        <Tabuleiro inverso="row-reverse" />
        <Tabuleiro inverso="row" />
        <Tabuleiro inverso="row-reverse" />
        <Tabuleiro inverso="row" />
        <Tabuleiro inverso="row-reverse" />
        <Tabuleiro inverso="row" />
        <Tabuleiro inverso="row-reverse" />
      </div>
    </div>
  );
}
