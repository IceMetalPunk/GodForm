import './style.css';
import TypeScriptLogo from './assets/textures/typescript.svg';
import BGM from './assets/audio/BGM/Balloon Game.mp3';
import { Application as PixiApp, Sprite } from 'pixi.js';
import TextureManager from './managers/TexureManager.js';
import { sound as PixiSound } from '@pixi/sound';
import { I18nManager } from './managers/I18nManager';

const i18n: I18nManager = new I18nManager();
const main = async () => {
  const app: PixiApp = new PixiApp();

  const textureManager: TextureManager = new TextureManager();
  textureManager.load('logoSpr', TypeScriptLogo);
  PixiSound.add('mainBGM', BGM);
  PixiSound.play('mainBGM', {
    loop: true
  });
  const logoSpr: Sprite = new Sprite(textureManager.get('logoSpr'));
  logoSpr.x = 10;
  logoSpr.y = 10;
  logoSpr.anchor.set(0);

  app.stage.addChild(logoSpr);

  app.ticker.add(() => {
    logoSpr.x += 1;
  });
  const container: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;
  container.innerHTML = '';
  container?.appendChild(app.view as HTMLCanvasElement);
};
const setup = async () => {
  i18n.addEventListener('change', () => {
    console.log(`Lang: ${i18n.currentLanguage}`);
    document.querySelector<HTMLDivElement>('#app')!.textContent = i18n.translate('external.click_to_start');
  });
  await i18n.setLanguage('en-us');
  document.addEventListener('click', main, { once: true });
};
setup();