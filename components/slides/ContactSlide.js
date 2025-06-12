export default function ContactSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <div className="glass text-left space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🚀 พร้อมเริ่มต้นการเดินทางแล้วหรือยัง?</h2>
        <p className="text-lg md:text-2xl">ติดต่อตามช่องทางเหล่านี้:</p>
        <ul className="list-disc list-inside text-lg md:text-2xl">
          <li>เว็บไซต์: <a href="https://com.kku.ac.th" className="text-accent underline">com.kku.ac.th</a></li>
          <li>Facebook: <a href="https://facebook.com/KKUCom" className="text-accent underline">KKU Computing</a></li>
        </ul>
      </div>
    </div>
  );
}
