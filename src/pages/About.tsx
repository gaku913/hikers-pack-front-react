import AppFrame from "@/components/frame/AppFrame"

export default function About() {
  return (
    <AppFrame>
      <h1>Hiker's Pack</h1>

      <p>
        Hiker's Packは、ハイキング好きのための持ち物管理アプリです。
        このアプリには以下の特長があります。
      </p>

      <h2>1. レコード機能</h2>
      <p>
        ハイキングの日付、メモ、そして持ち物の一覧を簡単に記録できます。
        現地でのコンディションやアイテムの使い勝手を記録し、次回の活動に役立てましょう。
      </p>

      <h2>2. 重量計算</h2>
      <p>
        持ち物の一覧に重さを入力すると、自動的に総重量を計算します。
        ギアの機能と重量のバランス確認に活用してください。
      </p>

      <h2>3. チェックリスト表示</h2>
      <p>
        持ち物一覧をチェックリストにして表示します。
        出発の前にチェックを入れ、忘れ物がないか確認しましょう。
      </p>


      <h2>4. テンプレート登録</h2>
      <p>
        持ち物のリストをテンプレートとして登録できます。
        毎回使う道具はテンプレートに登録しておき、久しぶりのハイキングでも忘れないようにしましょう。
      </p>

      <h2>まとめ</h2>
      <p>何を持っていくべきで、何を持っていかないべきか。</p>
      <p>それは、あなたが何を楽しいと感じるか、何を快適と感じるか次第です。</p>
      <ul>
        <li>とにかく軽くして遠くまで行きたい</li>
        <li>寒いのは勘弁だからしっかり防寒したい</li>
        <li>写真のためなら重い機材を背負ってもいい</li>
      </ul>
      <p>その人毎にいろいろなスタイルがあるはずです。</p>
      <p>自分の楽しみ方に合わせて持ち物を最適化して、外遊びライフを満喫してください！</p>
    </AppFrame>
  );
}