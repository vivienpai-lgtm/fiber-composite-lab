export default function App() {
  const researchAreas = [
    {
      title: "有限元素分析 (FEA)",
      description:
        "利用 ANSYS、ABAQUS 等工具進行複合材料結構模擬，分析應力、變形、振動與破壞行為。",
    },
    {
      title: "複合材料力學",
      description:
        "研究碳纖維、玻璃纖維與高分子基材之力學特性，探討材料在不同載荷下的行為。",
    },
    {
      title: "3D 列印複材結構",
      description:
        "結合 3D 列印與纖維複合材料技術，開發輕量化、高強度結構。",
    },
    {
      title: "動態與振動分析",
      description:
        "分析結構之自然頻率、阻尼與衝擊行為，應用於航太、運動器材與智慧結構。",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-6">
            Fiber Composite & FEA Laboratory
          </div>

          <h1 className="text-6xl font-black leading-tight">
            纖維複合材料
            <br />
            <span className="text-cyan-400">有限元素分析實驗室</span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-9 max-w-3xl">
            專注於碳纖維複合材料、有限元素分析、材料力學與 3D 列印技術，
            打造下一世代輕量化工程結構研究平台。
          </p>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">研究方向</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="text-cyan-400 text-2xl font-bold mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>

                <p className="text-slate-300 leading-8">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto bg-cyan-400/10 border border-cyan-400/20 rounded-[40px] p-12 text-center">
          <h2 className="text-5xl font-black">
            歡迎加入研究團隊
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            如果你對工程模擬、碳纖維、AI 工程應用或 3D 列印有興趣，
            歡迎加入實驗室一起探索未來科技。
          </p>
        </div>
      </section>
    </div>
  );
}
