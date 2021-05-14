# アプリ名

### calendar-app(開発環境)
### calendar-app-0527(本番環境)

# 概要

### カレンダーアプリ。<br>予定をカレンダーで管理する事ができる。

# 本番環境

### https://calendar-app-0527.herokuapp.com/
<br>

### Basic認証のIDとパスワード

- ID:&ensp;test
- パスワード:&ensp;0000

### ログイン情報（テスト用）

- Eメール:&ensp;test@test.com
- パスワード:&ensp;test00


# 制作背景(意図)
### Ruby on Railsでカレンダーアプリを作成したいと思った。(simple_calendarのGemを使用したかった)<br>カレンダーアプリで画像を保存できるアプリがなかった。

# DEMO
### トップページ
[![Image from Gyazo](https://i.gyazo.com/47c17e301fdef72204c39d2d7bba5330.jpg)](https://gyazo.com/47c17e301fdef72204c39d2d7bba5330)
- UserアイコンをクリックするとUser情報が表示される。
- ログインしているUserは作成をクリックすると登録ページに遷移する。
- 予定を入力するとカレンダー内とToDoリストに予定が表示される。

# 利用方法
- 予定を入力するために新規登録を行う。
- ログインしたUserは予定を投稿する事ができる。<br>予定は編集/削除する事ができる。
- 予定を登録するとカレンダー内とToDOリストに表示される。
- タイトル名をクリックすると詳細ページに遷移する。
# 工夫したポイント
- 予定がある日に背景色をつけた。
- カレンダーやエラー文を日本語表示にした。

# 使用技術(開発環境)

## バックエンド
- Ruby, Ruby on Rails

## フロントエンド
- HTML, CSS, Bootstrap, FontAwesome

## データベース
- MySQL
## インフラ
- Heroku
## ソース管理
- GitHub, GitHubDesktop
## テスト
- RSpec
## エディタ
- VSCode
# 課題や今度実装したい機能
- カレンダーを週表示や日にち表示に切り替える機能をつける。
- フォロー機能をつけ、家族や友人とカレンダーを共有する機能をつける。
# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| -------------------| ------ | ------------------------- |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |
| nickname           | string | null: false               |

### Association

- has_many :memos


## memos テーブル

| Column                 | Type       | Options                        |
| ---------------------- | ---------- | ------------------------------ |
| title                  | string     | null: false                    |
| content                | text       |                                |
| start_time             | datetime   | null: false                    |
| user                   | references | null: false, foreign_key: true |

### Association

- belongs_to :user