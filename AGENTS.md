# リポジトリガイドライン

- 回答は日本語で

## プロジェクト構成 / モジュール構成
- `app/`: Next.js App Router のエントリ（`page.tsx` 等）、グローバル `layout.tsx`、UI 用 `Provider.tsx`（MUI + Jotai）。
- `features/`: 機能単位の UI/ロジック（例: `features/signup/SignupForm.tsx`）。
- `shared/`: 再利用コンポーネント、状態、定数、型。公開 API は `shared/index.ts` に集約。
- `public/`: 静的アセット。設定は `eslint.config.mjs`、`next.config.ts`、`tsconfig.json` に配置。
- TS パスエイリアス: `@/*` を使用（例: `@/shared`, `@/features`）。

## ビルド・テスト・開発コマンド
- `pnpm dev`: 開発サーバーを起動（`http://localhost:3000`）。
- `pnpm build`: 本番ビルドを作成（`.next/`）。
- `pnpm start`: 本番ビルドを起動。
- `pnpm fix`: Lint の自動修正とフォーマット（`eslint --fix` + `prettier --write`）。
- 任意: `pnpm run _lint` / `pnpm run _format` で個別実行。

## コーディング規約 / 命名
- TypeScript strict。React コンポーネントは `*.tsx` を推奨。
- Prettier: 2 スペース、セミコロンあり、ダブルクォート。コミット前に `pnpm fix` を実行。
- ESLint: `eslint-config-next`（TS/Next ルール）。修正は最小限・スコープ限定で。
- コンポーネント: フォルダは小文字、ファイルは PascalCase（例: `shared/components/button/PlaneLargeButton.tsx`）。named export と `memo` を適宜使用。クライアントコンポーネントは先頭に `"use client"`。
- インポート: 相対パスよりエイリアス（`@/shared`, `@/features`）を優先。

## テスト指針
- 現時点でテストランナーは未設定。追加する場合は近接配置（例: `features/<area>/__tests__/...`、`shared/**/__tests__/...`）。
- 推奨: Vitest または Jest + React Testing Library。`test` スクリプトを追加し、マージ前に CI で実行可能にする。

## コミット / プルリクエスト指針
- コミット: 命令形・簡潔なサブジェクト（例: `signup: add form validation`, `shared/button: refactor styles`）。本文で Issue をリンク（`Closes #123`）。
- PR: 目的・背景・スコープを明記。UI はスクリーンショット/GIF、再現・テスト手順を添付。差分は焦点を絞る。`pnpm fix` とローカルビルドを通す。

## セキュリティ / 設定の注意
- 秘密情報はコミットしない。環境変数は `.env.local` を使用。クライアントへ公開するのは `NEXT_PUBLIC_*` のみ。
- Node.js は LTS、パッケージマネージャは PNPM を前提。`.next/` やロックファイルの手動編集は避ける。
