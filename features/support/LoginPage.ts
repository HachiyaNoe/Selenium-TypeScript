import { By, WebDriver, WebElement , WebElementPromise } from 'selenium-webdriver'
import { driver } from '../step_definitions/login_steps';

//==============================
//  ログイン画面： 要素の取得＆操作
//==============================

export class LoginPage {

    driver: WebDriver;

    constructor (driver: WebDriver) {
        this.driver = driver;
    }

    //タイトル
    get h1():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.css('h1')); }
    get h2():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.css('h2')); }

    //ナビバー 
    get a_home():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="navbarNav"]/ul/li[1]/a')); } 
    get a_reserve():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="navbarNav"]/ul/li[2]/a')); }
    get a_signUp():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="navbarNav"]/ul/li[3]/a')); }
    get a_login():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="navbarNav"]/ul/li[4]/a')); }

    //フォーム
    get formTextEmail():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="login-form"]/div[1]/label')); }
    get formTextPassword():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.xpath('//*[@id="login-form"]/div[2]/label')); }
    get email():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.id('#email')); }
    get password():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.id('#password')); }
    get loginButton():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.id('#login-button')); }
    get passwordMessage():WebElementPromise | Promise<WebElement> { return this.driver.findElement(By.id('#password-message')); }
    // open： ログイン画面を開く
    async open() {
        await this.driver.get("https://hotel.testplanisphere.dev/ja/login.html");
    }

    // clickNav： ナビバーのリンクをクリック
    async clickNav(a: WebElementPromise) {
        await (await a).click();
    }
    
    // submit： ログインボタンをクリック
    async submit() {
        await (await this.loginButton).click();
    }

}

// Export
const loginPage = new LoginPage(driver);
export default loginPage;