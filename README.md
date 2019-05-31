# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groupテーブル

|Column|Type|Options|
|-----|----|-------|
|group_name|string|null:false|
|user_id|integer|null: false, foreign_key: true|
|massage_id|integer|null: false, foreign_key: true|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages

## userテーブル
|Column|Type|Options|
|-----|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false, unique: true|
|group_id|integer|null: false, foreign_key:true|
|massage_id|integer|null: false, foreign_key: true|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :messages

## messageテーブル
|Column|Type|Options|
|-----|----|-------|
|message_id|integer|null: false|
|text|text|
|image|text|
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false, foreign_key:true|

### Association
- belongs_to :group
- belongs_to :user

## users_groupsテーブル
|Column|Type|Options|
|-----|----|-------|
|users_groups_id|integer|null: false|
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false, foreign_key:true|

### Association
- belongs_to :group
- belongs_to :user