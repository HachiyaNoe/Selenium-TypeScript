module.exports = {
    default: [
        './features/*.feature', // 実行対象のfeatureファイルを指定。ここは先頭じゃないとダメ
        '--require-module ts-node/register', // ts-nodeを使うように指定
        '--require ./features/**/*.ts', // 実行対象のtsファイルを指定
    ].join(' '),
  };