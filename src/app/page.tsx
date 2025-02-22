import { BarCharts } from "@/components/Bar";
import { Charts } from "@/components/Charts";
// import { Tabel } from "@/components/Table";

const nama = "Bima";

export default function Home() {
  return (
    <div>
      <div className="w-full max-h-max">
        <h1 className="pb-8 text-white font-bold text-3xl">Dashboard {nama}</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w-full">
          <div className="flex-auto">
            <BarCharts />
          </div>
          <div className="flex-auto">
            <Charts />
          </div>
          {/* <div>
            <Tabel />
          </div> */}
        </div>
      </div>
    </div>
  );
}
