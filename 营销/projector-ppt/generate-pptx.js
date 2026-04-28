const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";
pptx.author = "Auto Generated";
pptx.title = "家用投影仪深度对比 · J10S vs X30 vs Q30";

// ============ 颜色常量（靛蓝瓷主题） ============
const INK = "0A1F3D";       // 深靛蓝
const PAPER = "F1F3F5";     // 浅灰纸白
const PAPER_TINT = "E4E8EC";
const ACCENT = "3B6BA5";    // 强调蓝
const ACCENT_LIGHT = "5A8DC8";
const WHITE = "FFFFFF";
const LIGHT_BG = "F5F6F8";
const DIVIDER = "B0B8C4";
const TEXT_SEC = "4A5568";

// ============ 字体 ============
const FONT_ZH = "微软雅黑";
const FONT_EN = "Georgia";

// ============ 辅助函数 ============
function addChrome(slide, left, right, isDark) {
  const color = isDark ? PAPER : INK;
  slide.addText(left, { x: 0.6, y: 0.3, w: 5, h: 0.3, fontSize: 8, color: color, fontFace: FONT_EN, transparency: 40, letterSpacing: 2 });
  slide.addText(right, { x: 8.5, y: 0.3, w: 1.5, h: 0.3, fontSize: 8, color: color, fontFace: FONT_EN, transparency: 40, letterSpacing: 2, align: "right" });
}

function addFoot(slide, left, right, isDark) {
  const color = isDark ? PAPER : INK;
  slide.addText(left, { x: 0.6, y: 6.8, w: 5, h: 0.25, fontSize: 7, color: color, fontFace: FONT_EN, transparency: 50, letterSpacing: 1.5 });
  slide.addText(right, { x: 8.5, y: 6.8, w: 1.5, h: 0.25, fontSize: 7, color: color, fontFace: FONT_EN, transparency: 50, letterSpacing: 1.5, align: "right" });
}

function addDivider(slide, y, isDark) {
  const color = isDark ? PAPER : INK;
  slide.addShape(pptx.shapes.LINE, { x: 0.6, y: y, w: 8.8, h: 0, line: { color: color, width: 0.5, transparency: 75 } });
}

function addStatCard(slide, x, y, w, label, value, note, isDark) {
  const textColor = isDark ? PAPER : INK;
  const secColor = isDark ? "B0B8C4" : TEXT_SEC;
  // label
  slide.addText(label, { x, y, w, h: 0.25, fontSize: 7.5, color: secColor, fontFace: FONT_EN, letterSpacing: 1.5, transparency: 20 });
  // value
  slide.addText(value, { x, y: y + 0.3, w, h: 0.7, fontSize: 32, color: textColor, fontFace: FONT_EN, bold: true });
  // note
  slide.addText(note, { x, y: y + 1.05, w, h: 0.35, fontSize: 9, color: secColor, fontFace: FONT_ZH, lineSpacingMultiple: 1.3 });
}

// ============================================================
// PAGE 1 · 封面
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "Deep Comparison · 2026", "Vol.01", true);

  slide.addText("家用投影仪 · Projector", { x: 0.6, y: 1.5, w: 8.8, h: 0.35, fontSize: 10, color: PAPER, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });

  slide.addText("三强对决", { x: 0.6, y: 2.1, w: 8.8, h: 1.2, fontSize: 56, color: PAPER, fontFace: FONT_ZH, bold: true });

  slide.addText("坚果 J10S vs 大眼橙 X30 vs 优派 Q30", { x: 0.6, y: 3.4, w: 8.8, h: 0.5, fontSize: 20, color: PAPER, fontFace: FONT_ZH, transparency: 30 });

  slide.addText("国产新势力与传统光学大厂的正面碰撞。同价位、不同流派，谁更值得买？", { x: 0.6, y: 4.2, w: 7, h: 0.6, fontSize: 14, color: PAPER, fontFace: FONT_ZH, transparency: 20, lineSpacingMultiple: 1.4 });

  slide.addText("3000–5000 元价位  ·  1080P LED 投影仪", { x: 0.6, y: 5.1, w: 8.8, h: 0.3, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 2, transparency: 40 });

  addFoot(slide, "家用投影仪深度对比", "— 2026 —", true);
})();

// ============================================================
// PAGE 2 · Act I 幕封
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "第一幕 · 硬件底子", "Act I · 01 / 16", false);

  slide.addText("Act I", { x: 0.6, y: 1.8, w: 8.8, h: 0.35, fontSize: 10, color: INK, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });
  slide.addText("硬件底子", { x: 0.6, y: 2.4, w: 8.8, h: 1.2, fontSize: 52, color: INK, fontFace: FONT_ZH, bold: true });
  slide.addText("底大一级压死人。先看芯片、再看亮度，参数是一切体验的起点。", { x: 0.6, y: 3.8, w: 6.5, h: 0.6, fontSize: 14, color: TEXT_SEC, fontFace: FONT_ZH, lineSpacingMultiple: 1.4 });

  addFoot(slide, "芯片与光源", "— · —", false);
})();

// ============================================================
// PAGE 3 · 核心参数速览
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "参数速览 · Specs", "Act I · 03 / 16", false);

  slide.addText("Core Specs · 三款核心参数", { x: 0.6, y: 0.9, w: 8.8, h: 0.25, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("一眼看穿差异", { x: 0.6, y: 1.2, w: 8.8, h: 0.6, fontSize: 30, color: INK, fontFace: FONT_ZH, bold: true });
  slide.addText("硬件参数是选购的第一道门槛。", { x: 0.6, y: 1.9, w: 8.8, h: 0.35, fontSize: 13, color: TEXT_SEC, fontFace: FONT_ZH });

  // 3×2 grid of stat cards
  const cards = [
    { label: "坚果 J10S · DMD", value: '0.47"', note: "主流旗舰标配" },
    { label: "大眼橙 X30 · 亮度", value: "2800", note: "ANSI 流明 · 三款最高" },
    { label: "优派 Q30 · DMD", value: '0.65"', note: "大底优势 · 画质上限最高" },
    { label: "J10S · 音响", value: "Dynaudio", note: "丹拿调音 · 音质最佳" },
    { label: "X30 · 性价比", value: "Top", note: "同价位亮度最高" },
    { label: "Q30 · 对比度", value: "2x", note: '0.47"芯片的两倍' },
  ];
  const cols = 3, gap = 0.15, startX = 0.6, startY = 2.6;
  const cardW = (8.8 - gap * (cols - 1)) / cols;
  cards.forEach((c, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const cx = startX + col * (cardW + gap);
    const cy = startY + row * 2;
    addStatCard(slide, cx, cy, cardW, c.label, c.value, c.note, false);
  });

  addFoot(slide, "核心参数速览", "Specs Overview", false);
})();

// ============================================================
// PAGE 4 · DMD 芯片对比
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "画质核心 · Chip", "Act I · 04 / 16", true);

  // Left column
  slide.addText("Bottom Line · 关键差异", { x: 0.6, y: 0.9, w: 5, h: 0.25, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("底大一级压死人", { x: 0.6, y: 1.3, w: 5.5, h: 0.8, fontSize: 30, color: PAPER, fontFace: FONT_ZH, bold: true });

  slide.addText('0.65" DMD 的通光量远超 0.47"。原生对比度约为两倍，暗部细节更深沉，画面更通透，更有电影感。', { x: 0.6, y: 2.3, w: 5.2, h: 0.7, fontSize: 12, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.5, transparency: 15 });

  // Callout
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.6, y: 3.4, w: 0.04, h: 1.1, fill: { color: PAPER } });
  slide.addText('"0.47 寸是主流旗舰的标配，但 0.65 寸才是画质的分水岭。"', { x: 0.8, y: 3.4, w: 4.8, h: 0.6, fontSize: 12, color: PAPER, fontFace: FONT_ZH, italic: true, lineSpacingMultiple: 1.4 });
  slide.addText("— DMD 芯片规格对照", { x: 0.8, y: 4.1, w: 4.8, h: 0.25, fontSize: 7.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 2, transparency: 40 });

  // Right - image placeholder
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.2, y: 1.2, w: 3.2, h: 2.4, rectRadius: 0.08, line: { color: PAPER, width: 1, dashType: "dash", transparency: 40 }, fill: { color: INK } });
  slide.addText('+\n0.47" vs 0.65" DMD\n芯片尺寸对比图', { x: 6.2, y: 1.6, w: 3.2, h: 1.6, fontSize: 9, color: PAPER, fontFace: FONT_ZH, align: "center", valign: "middle", transparency: 40, lineSpacingMultiple: 1.6 });

  // Tags
  slide.addText('0.47" · J10S / X30', { x: 6.2, y: 4.0, w: 1.5, h: 0.3, fontSize: 7, color: PAPER, fontFace: FONT_EN, border: { pt: 0.5, color: PAPER }, align: "center" });
  slide.addText('0.65" · Q30', { x: 7.9, y: 4.0, w: 1.2, h: 0.3, fontSize: 7, color: PAPER, fontFace: FONT_EN, border: { pt: 0.5, color: PAPER }, align: "center" });

  addFoot(slide, "画质核心 · 芯片决定上限", "— · —", true);
})();

// ============================================================
// PAGE 5 · 亮度数据大字报
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "亮度表现 · Brightness", "Act I · 05 / 16", false);

  slide.addText("Lumen · 参数狂魔", { x: 0.6, y: 0.9, w: 8.8, h: 0.25, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("谁最亮？", { x: 0.6, y: 1.2, w: 8.8, h: 0.6, fontSize: 30, color: INK, fontFace: FONT_ZH, bold: true });
  slide.addText("亮度决定白天能不能看，但参数高不等于体验好。", { x: 0.6, y: 1.9, w: 8.8, h: 0.35, fontSize: 13, color: TEXT_SEC, fontFace: FONT_ZH });

  // 3 stat cards
  addStatCard(slide, 0.6, 2.7, 2.8, "坚果 J10S", "2400 ANSI", "标准旗舰水平，晚上极佳，白天需拉帘", false);
  addStatCard(slide, 3.6, 2.7, 2.8, "大眼橙 X30", "2800 ANSI", "标称最高，白天抗光性理论最强", false);
  addStatCard(slide, 6.6, 2.7, 2.8, "优派 Q30", "2400 ANSI", "实测较实，4LED 光源更稳定", false);

  // Callout
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.6, y: 4.8, w: 0.04, h: 0.9, fill: { color: INK } });
  slide.addText('"大眼橙 X30 一直主打堆料和高亮度，如果你主要在白天不拉窗帘看，它的亮度优势会比较明显。"', { x: 0.8, y: 4.8, w: 7, h: 0.6, fontSize: 11, color: INK, fontFace: FONT_ZH, italic: true, lineSpacingMultiple: 1.4 });
  slide.addText("— 亮度实测结论", { x: 0.8, y: 5.5, w: 7, h: 0.25, fontSize: 7.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });

  addFoot(slide, "亮度对比 · ANSI 流明", "Brightness", false);
})();

// ============================================================
// PAGE 6 · Act II 幕封
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "第二幕 · 画质与色彩", "Act II · 06 / 16", true);

  slide.addText("Act II", { x: 0.6, y: 1.8, w: 8.8, h: 0.35, fontSize: 10, color: PAPER, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });
  slide.addText("画质色彩", { x: 0.6, y: 2.4, w: 8.8, h: 1.2, fontSize: 52, color: PAPER, fontFace: FONT_ZH, bold: true });
  slide.addText("徕卡 vs 优派老厂 vs 高亮冷艳，三条色彩路线各有拥趸。", { x: 0.6, y: 3.8, w: 6.5, h: 0.6, fontSize: 14, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.4, transparency: 15 });

  addFoot(slide, "色彩科学", "— · —", true);
})();

// ============================================================
// PAGE 7 · 色彩科学三方对比
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "色彩科学 · Color Science", "Act II · 07 / 16", false);

  slide.addText("Color · 三条色彩路线", { x: 0.6, y: 0.9, w: 8.8, h: 0.25, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("三种调色哲学", { x: 0.6, y: 1.2, w: 8.8, h: 0.6, fontSize: 30, color: INK, fontFace: FONT_ZH, bold: true });

  const colorData = [
    { label: "J10S · 徕卡", title: "徕卡联合调色", items: ["色准 ΔE<1", "肤色自然，讨好眼球", "国产投影第一梯队", '"徕卡标准模式"即开即用'] },
    { label: "X30 · 高亮冷艳", title: "O-RDR 2.0", items: ["偏冷艳风格", "高亮度下饱和度保持好", "对比前两者稍显逊色", "色彩中规中矩"] },
    { label: "Q30 · 影院厚重", title: "Cinema SuperColor+", items: ["125% Rec.709 色域", "传统影院厚重感", '无"数码味"', "开箱需微调至最佳"] },
  ];

  colorData.forEach((d, i) => {
    const x = 0.6 + i * 3.1;
    // Left border
    slide.addShape(pptx.shapes.RECTANGLE, { x, y: 2.1, w: 0.04, h: 3.5, fill: { color: INK } });
    // Label
    slide.addText(d.label, { x: x + 0.2, y: 2.1, w: 2.6, h: 0.25, fontSize: 8, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });
    // Title
    slide.addText(d.title, { x: x + 0.2, y: 2.5, w: 2.6, h: 0.4, fontSize: 15, color: INK, fontFace: FONT_ZH, bold: true });
    // Items
    const bulletText = d.items.map(it => "• " + it).join("\n");
    slide.addText(bulletText, { x: x + 0.2, y: 3.1, w: 2.6, h: 2.2, fontSize: 10, color: INK, fontFace: FONT_ZH, lineSpacingMultiple: 1.6, transparency: 15 });
  });

  addFoot(slide, "色彩科学三方对比", "Color Science", false);
})();

// ============================================================
// PAGE 8 · 徕卡色彩详解
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "徕卡色彩 · Leica Color", "Act II · 08 / 16", true);

  // Left
  slide.addText("Highlight · 亮点", { x: 0.6, y: 0.9, w: 5, h: 0.25, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("徕卡色彩认证", { x: 0.6, y: 1.3, w: 5.5, h: 0.6, fontSize: 30, color: PAPER, fontFace: FONT_ZH, bold: true });

  slide.addText('坚果 J10S 是三款中唯一获得徕卡联合调色的机型。在"徕卡标准模式"下，色准达到 ΔE<1，这是专业显示器才有的指标。', { x: 0.6, y: 2.1, w: 5.5, h: 0.7, fontSize: 12, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.5, transparency: 15 });

  slide.addText('它的色彩调校偏向还原和讨好眼球，肤色处理比较自然。如果你不想折腾参数，开箱即用的徕卡模式是最省心的选择。', { x: 0.6, y: 3.0, w: 5.5, h: 0.7, fontSize: 11, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.6, transparency: 20 });

  // Callout
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.6, y: 4.1, w: 0.04, h: 0.8, fill: { color: PAPER } });
  slide.addText('"徕卡标准模式，国产投影色准第一梯队。"', { x: 0.8, y: 4.1, w: 5, h: 0.5, fontSize: 12, color: PAPER, fontFace: FONT_ZH, italic: true, lineSpacingMultiple: 1.4 });
  slide.addText("— 色彩科学评价", { x: 0.8, y: 4.7, w: 5, h: 0.25, fontSize: 7.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 2, transparency: 40 });

  // Right - image placeholder
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.6, y: 1.0, w: 2.8, h: 3.8, rectRadius: 0.08, line: { color: PAPER, width: 1, dashType: "dash", transparency: 40 }, fill: { color: INK } });
  slide.addText("+\n坚果 J10S\n徕卡色彩模式实拍", { x: 6.6, y: 2.0, w: 2.8, h: 1.8, fontSize: 9, color: PAPER, fontFace: FONT_ZH, align: "center", valign: "middle", transparency: 40, lineSpacingMultiple: 1.6 });

  addFoot(slide, "徕卡联合调色", "Leica Color", true);
})();

// ============================================================
// PAGE 9 · 问题页
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "留给你的问题", "09 / 16", false);

  slide.addText("The Question", { x: 0.6, y: 1.8, w: 8.8, h: 0.35, fontSize: 10, color: INK, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });

  const lines = ["画质好，", "系统难用，", "你忍得了吗？"];
  lines.forEach((line, i) => {
    slide.addText(line, { x: 0.6, y: 2.5 + i * 0.85, w: 8.8, h: 0.75, fontSize: 42, color: INK, fontFace: FONT_ZH, bold: true });
  });

  slide.addText("优派 Q30 画质上限最高，但智能系统可能让你回到 2015 年。", { x: 0.6, y: 5.2, w: 6, h: 0.5, fontSize: 13, color: TEXT_SEC, fontFace: FONT_ZH, lineSpacingMultiple: 1.4 });

  addFoot(slide, "智能体验之问", "— · —", false);
})();

// ============================================================
// PAGE 10 · 系统易用性对比
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "智能系统 · Smart OS", "Act II · 10 / 16", true);

  slide.addText("UX · 易用性", { x: 0.6, y: 0.9, w: 5, h: 0.25, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("国产 vs 传统", { x: 0.6, y: 1.3, w: 5.5, h: 0.6, fontSize: 30, color: PAPER, fontFace: FONT_ZH, bold: true });

  slide.addText("坚果 Bonfire OS 交互体验行业数一数二；大眼橙内置腾讯视频源，开箱即看；优派的系统……建议搭配 Apple TV。", { x: 0.6, y: 2.1, w: 5.2, h: 0.6, fontSize: 12, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.5, transparency: 15 });

  // Callout
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.6, y: 3.1, w: 0.04, h: 0.8, fill: { color: PAPER } });
  slide.addText('"买优派通常建议搭配一个 Apple TV\n或高质量电视盒子使用。"', { x: 0.8, y: 3.1, w: 5, h: 0.6, fontSize: 11, color: PAPER, fontFace: FONT_ZH, italic: true, lineSpacingMultiple: 1.4 });
  slide.addText("— 传统大厂智能系统现状", { x: 0.8, y: 3.8, w: 5, h: 0.25, fontSize: 7.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 2, transparency: 40 });

  // Right - rowlines
  const rows = [
    { k: "坚果", v: "自动梯形校正 / 自动对屏 / 避障 / 语音", m: "BEST" },
    { k: "大眼橙", v: "自动校正 / 腾讯视频源 / 语音", m: "GOOD" },
    { k: "优派", v: "系统简陋 / 反应慢 / UI 陈旧", m: "NEED BOX" },
  ];
  rows.forEach((r, i) => {
    const y = 1.2 + i * 1.4;
    slide.addShape(pptx.shapes.LINE, { x: 6.2, y: y, w: 3.2, h: 0, line: { color: PAPER, width: 0.5, transparency: 65 } });
    slide.addText(r.k, { x: 6.2, y: y + 0.15, w: 1, h: 0.35, fontSize: 14, color: PAPER, fontFace: FONT_ZH, bold: true });
    slide.addText(r.v, { x: 6.2, y: y + 0.55, w: 2.4, h: 0.35, fontSize: 9, color: PAPER, fontFace: FONT_ZH, transparency: 20 });
    slide.addText(r.m, { x: 8.4, y: y + 0.15, w: 1, h: 0.35, fontSize: 7.5, color: ACCENT_LIGHT, fontFace: FONT_EN, letterSpacing: 1, align: "right" });
  });

  addFoot(slide, "智能体验对比", "Smart OS", true);
})();

// ============================================================
// PAGE 11 · Act III 幕封
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "第三幕 · 游戏与选购", "Act III · 11 / 16", true);

  slide.addText("Act III", { x: 0.6, y: 1.8, w: 8.8, h: 0.35, fontSize: 10, color: PAPER, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });
  slide.addText("选购指南", { x: 0.6, y: 2.4, w: 8.8, h: 1.2, fontSize: 52, color: PAPER, fontFace: FONT_ZH, bold: true });
  slide.addText("游戏性能、扩展机型、最终结论——你该买哪台？", { x: 0.6, y: 3.8, w: 6.5, h: 0.6, fontSize: 14, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.4, transparency: 15 });

  addFoot(slide, "游戏与选购", "— · —", true);
})();

// ============================================================
// PAGE 12 · 游戏性能 Pipeline
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "游戏性能 · Gaming", "Act III · 12 / 16", false);

  slide.addText("Gaming · 游戏性能", { x: 0.6, y: 0.9, w: 8.8, h: 0.25, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("三款游戏能力", { x: 0.6, y: 1.2, w: 8.8, h: 0.6, fontSize: 30, color: INK, fontFace: FONT_ZH, bold: true });

  // Pipeline 1: J10S
  slide.addShape(pptx.shapes.LINE, { x: 0.6, y: 2.2, w: 8.8, h: 0, line: { color: INK, width: 0.5, dashType: "dash", transparency: 65 } });
  slide.addText("坚果 J10S · 主机玩家首选", { x: 0.6, y: 2.4, w: 8.8, h: 0.25, fontSize: 8, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });

  const j10sSteps = [
    { nb: "01", title: "HDMI 2.1", desc: "4K@120Hz 输入" },
    { nb: "02", title: "Wi-Fi 6", desc: "低延迟无线串流" },
    { nb: "03", title: "PS5 / Xbox", desc: "次世代主机完美适配" },
  ];
  j10sSteps.forEach((s, i) => {
    const x = 0.6 + i * 3.1;
    slide.addShape(pptx.shapes.LINE, { x, y: 2.85, w: 2.8, h: 0, line: { color: INK, width: 0.5, transparency: 60 } });
    slide.addText(s.nb, { x, y: 3.0, w: 2.8, h: 0.2, fontSize: 9, color: TEXT_SEC, fontFace: FONT_EN, italic: true, transparency: 30 });
    slide.addText(s.title, { x, y: 3.25, w: 2.8, h: 0.3, fontSize: 13, color: INK, fontFace: FONT_ZH, bold: true });
    slide.addText(s.desc, { x, y: 3.6, w: 2.8, h: 0.25, fontSize: 9, color: TEXT_SEC, fontFace: FONT_ZH });
  });

  // Pipeline 2: Q30
  slide.addShape(pptx.shapes.LINE, { x: 0.6, y: 4.2, w: 8.8, h: 0, line: { color: INK, width: 0.5, dashType: "dash", transparency: 65 } });
  slide.addText("优派 Q30 · PC 硬核玩家首选", { x: 0.6, y: 4.4, w: 8.8, h: 0.25, fontSize: 8, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });

  const q30Steps = [
    { nb: "04", title: "240Hz", desc: "1080P 超高刷新率" },
    { nb: "05", title: "4.2ms", desc: "超低延迟响应" },
    { nb: "06", title: "PC Gaming", desc: "电竞级体验" },
  ];
  q30Steps.forEach((s, i) => {
    const x = 0.6 + i * 3.1;
    slide.addShape(pptx.shapes.LINE, { x, y: 4.85, w: 2.8, h: 0, line: { color: INK, width: 0.5, transparency: 60 } });
    slide.addText(s.nb, { x, y: 5.0, w: 2.8, h: 0.2, fontSize: 9, color: TEXT_SEC, fontFace: FONT_EN, italic: true, transparency: 30 });
    slide.addText(s.title, { x, y: 5.25, w: 2.8, h: 0.3, fontSize: 13, color: INK, fontFace: FONT_ZH, bold: true });
    slide.addText(s.desc, { x, y: 5.6, w: 2.8, h: 0.25, fontSize: 9, color: TEXT_SEC, fontFace: FONT_ZH });
  });

  addFoot(slide, "游戏性能对比", "Gaming", false);
})();

// ============================================================
// PAGE 13 · 三款选购指南
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "选购建议 · Purchase Guide", "Act III · 13 / 16", false);

  slide.addText("Who Should Buy · 谁该买什么", { x: 0.6, y: 0.9, w: 8.8, h: 0.25, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("三款三种人", { x: 0.6, y: 1.2, w: 8.8, h: 0.6, fontSize: 30, color: INK, fontFace: FONT_ZH, bold: true });

  const buyers = [
    { label: "坚果 J10S", title: "好用 · 省心 · 色彩准", items: ["追求综合体验", "颜值控", "PS5 / Xbox 主机玩家", "不想折腾的人"] },
    { label: "大眼橙 X30", title: "便宜 · 大碗 · 亮度高", items: ["预算相对敏感", "特别看重亮度", "环境光较复杂", "对色彩细腻度要求不苛刻"] },
    { label: "优派 Q30", title: "原生画质 · 高对比 · 硬核", items: ["影音发烧友", "追求极致对比度", "能接受外接电视盒子", "PC 高刷游戏玩家"] },
  ];

  buyers.forEach((b, i) => {
    const x = 0.6 + i * 3.1;
    slide.addShape(pptx.shapes.LINE, { x, y: 2.1, w: 2.8, h: 0, line: { color: INK, width: 1.5 } });
    slide.addText(b.label, { x, y: 2.25, w: 2.8, h: 0.25, fontSize: 8, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });
    slide.addText(b.title, { x, y: 2.6, w: 2.8, h: 0.4, fontSize: 15, color: INK, fontFace: FONT_ZH, bold: true });
    const bulletText = b.items.map(it => "• " + it).join("\n");
    slide.addText(bulletText, { x, y: 3.2, w: 2.8, h: 2.2, fontSize: 10, color: INK, fontFace: FONT_ZH, lineSpacingMultiple: 1.6, transparency: 15 });
  });

  addFoot(slide, "三款三种人", "Purchase Guide", false);
})();

// ============================================================
// PAGE 14 · 同价位扩展机型
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "扩展机型 · Alternatives", "Act III · 14 / 16", true);

  slide.addText("Also Consider · 值得一看", { x: 0.6, y: 0.9, w: 5.5, h: 0.25, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 3, transparency: 20 });
  slide.addText("同价位扩展", { x: 0.6, y: 1.3, w: 5.5, h: 0.6, fontSize: 30, color: PAPER, fontFace: FONT_ZH, bold: true });

  slide.addText("同价位 3000–5000 元区间，还有几款不容忽视的 4LED 机型。", { x: 0.6, y: 2.0, w: 5.5, h: 0.4, fontSize: 12, color: PAPER, fontFace: FONT_ZH, transparency: 15 });

  const alts = [
    { k: "明基 TH690SX", v: "短焦王 · 0.69 投射比 · 1.5 米投 100 寸 · 小户型唯一解" },
    { k: "明基 W1130X", v: "CinematicColor · 出厂色准极高 · 镜头位移 · 画质守门员" },
    { k: "极米 H5", v: "Super 全色 LED · 无散斑 · 观看舒适度最高 · 退烧之选" },
    { k: "极米 H6 4K", v: "4K 分辨率 · 光学变焦 · 降维打击 1080P" },
  ];

  alts.forEach((a, i) => {
    const y = 2.6 + i * 0.75;
    slide.addShape(pptx.shapes.LINE, { x: 0.6, y, w: 5.5, h: 0, line: { color: PAPER, width: 0.5, transparency: 65 } });
    slide.addText(a.k, { x: 0.6, y: y + 0.08, w: 1.8, h: 0.3, fontSize: 12, color: PAPER, fontFace: FONT_ZH, bold: true });
    slide.addText(a.v, { x: 2.5, y: y + 0.08, w: 3.6, h: 0.3, fontSize: 9, color: PAPER, fontFace: FONT_ZH, transparency: 20 });
  });

  // Right side info box
  slide.addShape(pptx.shapes.RECTANGLE, { x: 6.4, y: 1.0, w: 0.04, h: 3.0, fill: { color: PAPER } });
  slide.addText("4LED vs 三色激光", { x: 6.6, y: 1.0, w: 2.8, h: 0.25, fontSize: 8, color: PAPER, fontFace: FONT_EN, letterSpacing: 2 });
  slide.addText("4LED 优势：画面纯净、无散斑、无彩边，看着不累眼。\n\n激光优势：亮度更高、色域更广，但部分人眼会看到散斑。", { x: 6.6, y: 1.4, w: 2.8, h: 2.0, fontSize: 9, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.5, transparency: 20 });

  addFoot(slide, "同价位扩展机型", "Alternatives", true);
})();

// ============================================================
// PAGE 15 · 大引用：一句话总结
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: PAPER };
  addChrome(slide, "核心结论 · Takeaway", "15 / 16", false);

  slide.addText("Bottom Line · 一句话总结", { x: 0.6, y: 1.2, w: 8.8, h: 0.35, fontSize: 10, color: INK, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });

  const quotes = [
    "好用、省心、色彩准——选坚果。",
    "便宜、大碗、亮度高——选大眼橙。",
    "原生画质、高对比度、硬核——选优派。",
  ];
  quotes.forEach((q, i) => {
    slide.addText(q, { x: 0.6, y: 2.0 + i * 1.0, w: 8, h: 0.7, fontSize: 26, color: INK, fontFace: FONT_ZH, bold: true });
  });

  slide.addText("Projector Comparison 2026  ·  三强对决", { x: 0.6, y: 5.2, w: 8.8, h: 0.3, fontSize: 8.5, color: TEXT_SEC, fontFace: FONT_EN, letterSpacing: 2 });

  addFoot(slide, "核心结论", "— · —", false);
})();

// ============================================================
// PAGE 16 · 结尾封面
// ============================================================
(() => {
  const slide = pptx.addSlide();
  slide.background = { color: INK };
  addChrome(slide, "Deep Comparison · 2026", "16 / 16", true);

  slide.addText("End · 购买前必看", { x: 0.6, y: 1.5, w: 8.8, h: 0.35, fontSize: 10, color: PAPER, fontFace: FONT_EN, letterSpacing: 4, transparency: 40 });
  slide.addText("选你所爱", { x: 0.6, y: 2.1, w: 8.8, h: 1.2, fontSize: 52, color: PAPER, fontFace: FONT_ZH, bold: true });
  slide.addText("参数是参考，眼睛才是裁判", { x: 0.6, y: 3.4, w: 8.8, h: 0.5, fontSize: 18, color: PAPER, fontFace: FONT_ZH, transparency: 30 });
  slide.addText("建议到线下门店实机对比。亮度、色彩、系统流畅度，纸面参数无法替代亲眼所见。", { x: 0.6, y: 4.2, w: 6.5, h: 0.6, fontSize: 13, color: PAPER, fontFace: FONT_ZH, lineSpacingMultiple: 1.4, transparency: 15 });
  slide.addText("坚果 J10S  ·  大眼橙 X30  ·  优派 Q30", { x: 0.6, y: 5.2, w: 8.8, h: 0.3, fontSize: 8.5, color: PAPER, fontFace: FONT_EN, letterSpacing: 2, transparency: 40 });

  addFoot(slide, "家用投影仪深度对比", "— 2026 —", true);
})();

// ============ 生成文件 ============
const outPath = "D:\\DMT_cloud\\营销\\projector-ppt\\projector-comparison.pptx";
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log("✅ PPTX generated: " + outPath);
}).catch(err => {
  console.error("❌ Error:", err);
});
