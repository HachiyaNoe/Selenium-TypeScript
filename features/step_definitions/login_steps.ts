import * as selenium from 'selenium-webdriver'
const { When, Then , Given , AfterAll , BeforeAll , expect } = require('@cucumber/cucumber')
import { LoginPage } from '../support/LoginPage'

export let driver: selenium.WebDriver;
let loginPage: LoginPage; 

BeforeAll( async () => {
  // ドライバーを起動  ※複数ブラウザにて一度に実行できるように後程対応追加※
    driver = await new selenium.Builder()
        .forBrowser("chrome")
        .build();

  // // LoginPageのドライバー に 起動したドライバー を代入 → 不要
  //   LoginPage.driver = driver;

  //
  
  
  // ウィンドウ最大化
    return driver.manage().window().maximize(); 
});

AfterAll(async () => driver.quit());

// ログイン： 一般会員のメールアドレス＆パスワード
Given ('ログイン画面に遷移 - 未ログイン状態', async function () {
  // 遷移
    //ログイン画面
    loginPage = new LoginPage(driver);
    await loginPage.open();
});

When('フォーム（メールアドレス＆パスワード） にて 一般会員の情報を入力 + ログインボタンをクリック した時', 
async function () {

  // 操作
    // 入力：フォーム（メールアドレス＆パスワード）
    const generalEmail: string = 'sakura@example.com';
    const generalPassWord: string = 'pass1234'; 
    
    await (await loginPage.email).sendKeys(generalEmail);
    await (await loginPage.password).sendKeys(generalPassWord);

  // クリック：ボタン（ログイン）
    await loginPage.submit();

});

Then('ログインに成功すること = 遷移先のURLが正しいこと', async function () {
  // 取得
    // URL
    const url = await driver.getCurrentUrl();

  //比較検証 
    // 遷移先のURLはマイページのURLであること
    expect(url).toBe("https://hotel.testplanisphere.dev/ja/mypage.html")
});

// ------------------------------------------------------------------------------

// // 
// Given ('ログイン画面に遷移 - 未ログイン状態 - 2', async function () {
//   // 遷移
//     //ログイン画面
//     await LoginPage.open()
// });

// When('フォーム（メールアドレス＆パスワード） にて プレミアム会員の情報を入力 + ログインボタンをクリック した時', 
// async function () {

//   // 操作
//     // 入力：フォーム（メールアドレス＆パスワード）
//     const premiumEmail: string = 'ichiro@example.com';
//     const premiumPassWord: string = 'password'; 
    
//     await LoginPage.email.setValue(premiumEmail);
//     await LoginPage.password.setValue(premiumPassWord);

//   // クリック：ボタン（ログイン）
//     await LoginPage.button.submit();

// });

// Then('ログインに成功すること', async function () {
//   // 取得
//     // URL
//     const url = await driver.getCurrentUrl()

//   //比較検証 
//     // 遷移先のURLはマイページのURLであること
//     expect(url).toBe("https://hotel.testplanisphere.dev/ja/mypage.html")
// });