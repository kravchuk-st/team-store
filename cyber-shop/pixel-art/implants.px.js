// Implant.shop — minimal cold-cyan pixel set
// 32×32 product icons + logo marks + favicon

pal({
  k: "#0a0c10",
  K: "#151b24",
  g: "#3a4550",
  G: "#5a6a78",
  w: "#b8c0cc",
  W: "#e8eef4",
  c: "#7ec8c8",
  C: "#4a9a9a",
  m: "#a8e6e2",
  // accents (one family per item — not traffic-light RGB)
  b: "#6eb6ff", // ice blue
  B: "#3d7ec4",
  v: "#b79cff", // soft violet
  V: "#7a5fc4",
  o: "#c48a5a", // copper
  a: "#e07a5f", // coral (overload / pulse only)
  y: "#e6c07b", // soft gold
})
ramps("kKgGwW", "kCcm", "kBb", "kVv", "kGo", "kGa")

// ─── LOGO MARK VARIANTS (32) + favicon (16) ─────────────────────────

// A: iris / optic — closest to "implant"
sprite("logo_iris", { w: 32, h: 32, outline: "k" },
  circ(16, 16, 12, "C"),
  circ(16, 16, 12, "c"),
  circ(16, 16, 8, "K"),
  circ(16, 16, 5, "c"),
  circ(16, 16, 2, "m"),
  px(14, 13, "W"),
  ring(16, 16, 12, "m"))

sprite("favicon_iris", { w: 16, h: 16, outline: "k" },
  circ(8, 8, 6, "C"),
  circ(8, 8, 6, "c"),
  circ(8, 8, 3, "K"),
  circ(8, 8, 1, "m"))

// B: chip with corner cut — hardware mark
sprite("logo_chip", { w: 32, h: 32, outline: "k" },
  rect(8, 8, 16, 16, "C"),
  rect(9, 9, 14, 14, "c"),
  rect(12, 12, 8, 8, "K"),
  hline(6, 12, 2, "g"), hline(6, 16, 2, "g"), hline(6, 20, 2, "g"),
  hline(24, 12, 2, "g"), hline(24, 16, 2, "g"), hline(24, 20, 2, "g"),
  vline(12, 6, 2, "g"), vline(16, 6, 2, "g"), vline(20, 6, 2, "g"),
  vline(12, 24, 2, "g"), vline(16, 24, 2, "g"), vline(20, 24, 2, "g"),
  px(14, 14, "m"), px(17, 17, "m"))

sprite("favicon_chip", { w: 16, h: 16, outline: "k" },
  rect(3, 3, 10, 10, "c"),
  rect(5, 5, 6, 6, "K"),
  hline(1, 6, 2, "g"), hline(1, 9, 2, "g"),
  hline(13, 6, 2, "g"), hline(13, 9, 2, "g"),
  px(7, 7, "m"))

// C: brackets [i] — terminal shop feel
sprite("logo_bracket", { w: 32, h: 32, outline: "k" },
  // [
  rect(6, 6, 3, 20, "c"),
  rect(6, 6, 8, 3, "c"),
  rect(6, 23, 8, 3, "c"),
  // i stem + dot
  rect(15, 12, 3, 12, "m"),
  rect(15, 7, 3, 3, "m"),
  // ]
  rect(23, 6, 3, 20, "c"),
  rect(18, 6, 8, 3, "c"),
  rect(18, 23, 8, 3, "c"))

sprite("favicon_bracket", { w: 16, h: 16, outline: "k" },
  rect(2, 2, 2, 12, "c"), rect(2, 2, 4, 2, "c"), rect(2, 12, 4, 2, "c"),
  rect(7, 5, 2, 8, "m"), rect(7, 2, 2, 2, "m"),
  rect(12, 2, 2, 12, "c"), rect(10, 2, 4, 2, "c"), rect(10, 12, 4, 2, "c"))

// D: neural node — three linked nodes
sprite("logo_node", { w: 32, h: 32, outline: "k" },
  line(10, 12, 16, 20, "C", 2),
  line(22, 12, 16, 20, "C", 2),
  line(10, 12, 22, 12, "C", 2),
  circ(10, 12, 4, "c"),
  circ(22, 12, 4, "c"),
  circ(16, 20, 4, "c"),
  circ(10, 12, 1, "m"),
  circ(22, 12, 1, "m"),
  circ(16, 20, 1, "W"))

sprite("favicon_node", { w: 16, h: 16, outline: "k" },
  line(4, 5, 8, 11, "C", 1),
  line(12, 5, 8, 11, "C", 1),
  circ(4, 5, 2, "c"),
  circ(12, 5, 2, "c"),
  circ(8, 11, 2, "c"),
  px(8, 11, "m"))

// ─── HEAD ───────────────────────────────────────────────────────────

// head-1 Оптика «Ирис» — ice-blue lens + cyan HUD
sprite("head-1", { w: 32, h: 32, outline: "k" },
  ellipse(16, 16, 12, 8, "C"),
  ellipse(16, 16, 12, 8, "c"),
  circ(16, 16, 5, "K"),
  circ(16, 16, 3, "B"),
  circ(16, 16, 2, "b"),
  circ(16, 16, 1, "W"),
  px(14, 14, "W"),
  hline(4, 8, 5, "b"), vline(4, 8, 5, "b"),
  hline(23, 8, 5, "b"), vline(27, 8, 5, "b"))

// head-2 Аудио «Эхо» — violet signal rings (also favicon source)
sprite("head-2", { w: 32, h: 32, outline: "k" },
  ellipse(14, 16, 7, 10, "C"),
  ellipse(14, 16, 7, 10, "c"),
  ellipse(14, 16, 3, 5, "K"),
  ring(22, 16, 5, "V"),
  ring(22, 16, 3, "v"),
  circ(22, 16, 1, "W"),
  px(27, 11, "v"), px(29, 16, "v"), px(27, 21, "v"),
  px(12, 12, "m"))

// purple chip favicon (brand mark)
sprite("favicon", { w: 16, h: 16, outline: "k" },
  rect(3, 2, 10, 11, "g"),
  rect(4, 3, 8, 9, "K"),
  rect(4, 3, 8, 3, "V"),
  // pins
  vline(5, 13, 2, "G"),
  vline(7, 13, 2, "G"),
  vline(9, 13, 2, "G"),
  vline(11, 13, 2, "G"),
  // violet core mark
  circ(8, 9, 2, "v"),
  px(8, 9, "W"),
  px(6, 7, "v"), px(10, 7, "v"))

sprite("favicon_32", { w: 32, h: 32, outline: "k" },
  rect(8, 6, 16, 20, "g"),
  rect(9, 7, 14, 18, "K"),
  rect(9, 7, 14, 4, "V"),
  vline(11, 26, 3, "G"),
  vline(14, 26, 3, "G"),
  vline(17, 26, 3, "G"),
  vline(20, 26, 3, "G"),
  circ(16, 17, 4, "v"),
  circ(16, 17, 2, "V"),
  px(16, 17, "W"),
  px(12, 13, "v"), px(20, 13, "v"),
  px(12, 21, "m"), px(20, 21, "m"))

// head-3 Нейролинк «Синапс» — violet sparks
sprite("head-3", { w: 32, h: 32, outline: "k" },
  circ(16, 14, 8, "G"),
  circ(16, 14, 8, "g"),
  circ(16, 14, 5, "K"),
  rect(14, 12, 4, 5, "v"),
  rect(15, 13, 2, 3, "m"),
  vline(16, 20, 6, "V"),
  rect(14, 25, 4, 3, "c"),
  px(8, 10, "v"), px(24, 9, "v"), px(10, 20, "b"), px(23, 18, "v"),
  px(7, 16, "m"), px(25, 15, "m"))

// ─── BODY ───────────────────────────────────────────────────────────

// body-1 Каркас «Титан» — copper bolts on steel/cyan
sprite("body-1", { w: 32, h: 32, outline: "k" },
  rect(10, 6, 12, 20, "g"),
  rect(11, 7, 10, 18, "K"),
  hline(11, 11, 10, "c"),
  hline(11, 15, 10, "c"),
  hline(11, 19, 10, "C"),
  vline(16, 7, 18, "m"),
  rect(7, 6, 4, 3, "g"),
  rect(21, 6, 4, 3, "g"),
  px(8, 7, "o"), px(23, 7, "o"),
  px(12, 11, "o"), px(19, 19, "o"))

// body-2 Сердце «Пульсар» — coral core, cyan shell
sprite("body-2", { w: 32, h: 32, outline: "k" },
  circ(14, 15, 7, "C"),
  circ(19, 15, 7, "C"),
  circ(14, 15, 7, "c"),
  circ(19, 15, 7, "c"),
  poly([16, 26, 8, 16, 12, 12, 16, 16, 20, 12, 24, 16], "a"),
  circ(14, 15, 2, "a"),
  circ(19, 15, 2, "y"),
  hline(4, 28, 3, "g"),
  line(7, 28, 10, 24, "a", 1),
  line(10, 24, 13, 28, "a", 1),
  line(13, 28, 16, 22, "y", 1),
  line(16, 22, 19, 28, "a", 1),
  hline(19, 28, 8, "g"))

// body-3 Пластинчат «Щит» — cyan armor + gold rivet
sprite("body-3", { w: 32, h: 32, outline: "k" },
  poly([16, 5, 26, 10, 24, 26, 8, 26, 6, 10], "g"),
  poly([16, 7, 23, 11, 22, 24, 10, 24, 9, 11], "C"),
  poly([16, 9, 20, 12, 19, 22, 13, 22, 12, 12], "c"),
  vline(16, 9, 13, "K"),
  hline(12, 15, 8, "K"),
  px(16, 14, "y"),
  px(11, 11, "o"), px(21, 11, "o"))

// ─── LEGS ───────────────────────────────────────────────────────────

// legs-1 Сервоприводы «Спринт» — ice-blue actuators
sprite("legs-1", { w: 32, h: 32, outline: "k" },
  rect(11, 4, 10, 4, "g"),
  rect(11, 8, 4, 10, "C"),
  rect(11, 8, 4, 10, "c"),
  rect(10, 18, 6, 3, "B"),
  rect(11, 21, 4, 6, "C"),
  rect(9, 27, 8, 3, "b"),
  rect(18, 8, 4, 8, "C"),
  rect(18, 8, 4, 8, "c"),
  rect(17, 16, 6, 3, "B"),
  rect(19, 19, 4, 6, "C"),
  rect(17, 25, 8, 3, "b"),
  px(12, 12, "b"), px(20, 11, "b"),
  px(12, 19, "m"), px(20, 17, "m"))

// legs-2 Гидроопоры «Якорь» — teal + copper seals
sprite("legs-2", { w: 32, h: 32, outline: "k" },
  rect(12, 4, 8, 4, "g"),
  rect(12, 8, 3, 14, "C"),
  rect(17, 8, 3, 14, "C"),
  rect(12, 8, 3, 14, "c"),
  rect(17, 8, 3, 14, "c"),
  hline(11, 12, 5, "o"),
  hline(16, 12, 5, "o"),
  hline(11, 17, 5, "m"),
  hline(16, 17, 5, "m"),
  rect(8, 24, 7, 5, "g"),
  rect(17, 24, 7, 5, "g"),
  rect(9, 25, 5, 3, "c"),
  rect(18, 25, 5, 3, "c"),
  px(11, 26, "o"), px(20, 26, "o"))

// ─── CHIPS (cartridge style) ────────────────────────────────────────

sprite("_chip_base", { w: 32, h: 32 },
  rect(8, 6, 16, 20, "g"),
  rect(9, 7, 14, 18, "K"),
  rect(9, 7, 14, 4, "C"),
  vline(11, 26, 3, "G"),
  vline(14, 26, 3, "G"),
  vline(17, 26, 3, "G"),
  vline(20, 26, 3, "G"))

// chip-1 Фокус — cyan crosshair
sprite("chip-1", { w: 32, h: 32, outline: "k" },
  stamp("_chip_base", 0, 0),
  rect(9, 7, 14, 4, "c"),
  hline(12, 16, 8, "m"),
  vline(16, 12, 8, "m"),
  ring(16, 16, 4, "b"),
  px(16, 16, "W"))

// chip-2 Рефлекс — violet lightning
sprite("chip-2", { w: 32, h: 32, outline: "k" },
  stamp("_chip_base", 0, 0),
  rect(9, 7, 14, 4, "V"),
  poly([18, 11, 13, 17, 16, 17, 12, 24, 20, 15, 16, 15], "v"),
  px(15, 13, "W"), px(17, 18, "m"))

// chip-3 Шифр — gold lock (no green)
sprite("chip-3", { w: 32, h: 32, outline: "k" },
  stamp("_chip_base", 0, 0),
  rect(9, 7, 14, 4, "o"),
  circ(16, 14, 4, "y"),
  circ(16, 14, 2, "K"),
  rect(15, 17, 2, 5, "y"),
  rect(14, 20, 4, 2, "o"),
  px(11, 12, "g"), px(21, 12, "g"), px(11, 22, "y"), px(21, 22, "y"))

// chip-4 Перегрузка — coral burst
sprite("chip-4", { w: 32, h: 32, outline: "k" },
  stamp("_chip_base", 0, 0),
  rect(9, 7, 14, 4, "a"),
  circ(16, 17, 5, "a"),
  circ(16, 17, 3, "y"),
  circ(16, 17, 1, "W"),
  px(10, 12, "y"), px(22, 12, "y"),
  px(9, 18, "a"), px(23, 18, "a"),
  px(16, 10, "y"), px(12, 22, "o"), px(20, 22, "o"))

// sheet for overview
sheet("all_implants", [
  "favicon", "favicon_32", "logo_iris", "logo_bracket",
  "head-1", "head-2", "head-3",
  "body-1", "body-2", "body-3",
  "legs-1", "legs-2",
  "chip-1", "chip-2", "chip-3", "chip-4",
], { pad: 2, cols: 4 })
