export default function PrepareSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <div className="glass text-left space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🎯 เตรียมตัวยังไง?</h2>
        <ul className="list-disc list-inside text-lg md:text-2xl">
          <li>ทำความเข้าใจพื้นฐานคณิตและตรรกะ</li>
          <li>ฝึกเขียนโปรแกรมเบื้องต้น</li>
          <li>ติดตามข่าวสารเทคโนโลยี</li>
        </ul>
      </div>
    </div>
  );
}
