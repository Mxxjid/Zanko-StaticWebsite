import sharp from "sharp";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const imgDir = path.join(rootDir, "public", "img");
const quality = 85; // کیفیت بالا، کاهش زیاد حجم

// پیدا کردن همه فایل‌های jpg/png به صورت بازگشتی
function findImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(full));
    } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const files = findImages(imgDir);
let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let errors = [];

console.log(`📁 یافت شد ${files.length} فایل تصویر برای تبدیل به WebP\n`);

for (const file of files) {
  const webpPath = file.replace(/\.(jpe?g|png)$/i, ".webp");

  try {
    const before = fs.statSync(file).size;
    await sharp(file)
      .webp({ quality, effort: 6 }) // effort=6 = حداکثری فشرده‌سازی
      .toFile(webpPath);
    const after = fs.statSync(webpPath).size;

    totalBefore += before;
    totalAfter += after;
    converted++;

    const pct = ((1 - after / before) * 100).toFixed(1);
    console.log(
      `✅ ${path.relative(rootDir, file)} → ${path.relative(rootDir, webpPath)} (${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB, ${pct}% کاهش)`
    );
  } catch (err) {
    errors.push({ file, error: err.message });
    console.error(`❌ خطا در ${file}: ${err.message}`);
  }
}

console.log(`\n─────────────────────────────`);
console.log(`📊 تبدیل شد: ${converted}/${files.length} فایل`);
console.log(`💾 حجم قبل: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`💾 حجم بعد: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
console.log(`📉 کاهش کل حجم: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);

if (errors.length > 0) {
  console.log(`\n⚠️  ${errors.length} خطا رخ داد:`);
  errors.forEach((e) => console.error(`   - ${e.file}: ${e.error}`));
  process.exit(1);
}
