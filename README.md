English Diary (Next.js)

英語日記を記録・閲覧できる Next.js アプリケーションです。App Router ベースで、MUI と Jotai を用いた UI/状態管理、Firebase（Auth/Firestore）を利用したデータ永続化を採用しています。

現在、全体のリファクタリングおよび段階的なリプレイスを進行中です。

■ 技術スタック

- Next.js（App Router）
- React
- TypeScript（strict）
- MUI (@mui/material) + Emotion
- Jotai
- React Hook Form + Yup
- Firebase (Auth / Firestore)

■ ディレクトリ構成（要点）

- `app/`: App Router のエントリ（`page.tsx` 等）、グローバル `layout.tsx`、UI 用 `Provider.tsx`。
- `features/`: 機能単位の UI/ロジック（例: `features/signup/SignupForm.tsx`）。
- `shared/`: 再利用コンポーネント、状態、定数、型。公開 API は `shared/index.ts` に集約。
- `public/`: 静的アセット。
- 設定: `eslint.config.mjs`, `next.config.ts`, `tsconfig.json`

■ パスエイリアス

- `@/*` を使用（例: `@/shared`, `@/features`）。`tsconfig.json` の `paths` で定義。
- ルール: `shared` 配下では `@/shared` 禁止、`features` 配下では `@/features` 禁止（相対パスを使用）。詳細は `eslint.config.mjs` を参照。

■ セットアップ

1. Node.js LTS を用意し、パッケージマネージャは PNPM を推奨します。
2. 依存関係をインストールします。
   `pnpm install`
3. 環境変数を設定します。
   - `.env.local.example` を参考に `.env.local` を作成
   - クライアントへ公開する値は `NEXT_PUBLIC_*` のみ

■ 開発サーバー

- `pnpm dev` で起動（デフォルト: http://localhost:3000）

■ ビルド/起動

- 本番ビルド: `pnpm build`
- 本番起動: `pnpm start`

■ Lint / フォーマット / 型チェック

- 一括実行: `pnpm fix`（`eslint --fix` + `prettier --write` + `tsc --noEmit`）
- 個別実行: `pnpm run _lint` / `pnpm run _format`

■ Firebase について

- 認証・ストレージに Firebase を使用しています。ローカル開発ではプロジェクト設定やエミュレータを各自で整備してください。
- ルールや設定ファイル: `firestore.rules`, `firebase.json` など。

■ 既知の状態 / リファクタリングとリプレイスの影響範囲

- ディレクトリ/モジュールの移動・命名整理を段階的に実施中です。
- UI コンポーネントとフォーム周り（MUI / RHF）の抽象化を見直しています。
- Firebase アクセス層（`shared/firebase/*`）の API 形状を変更する可能性があります。
- 一時的に未使用コードやプレースホルダーが残る場合があります。不要物は段階的に削除します。
