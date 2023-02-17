# 轱辘 -自制 UI 框架

## Vue 3 + TypeScript + Vite

## 介绍

这是在学习 Vue 过程中做的一个 UI 框架

## 开始使用

1. 添加 CSS 样式

    使用本框架，请在 CSS 中开启 border-box
    
    ```css
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }
    ```
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```css
    :root {
      --font-size: 14px;
      --color: #333;
      --border-radius: 4px;
      --border-color: #999;
      --border-color-hover: #666;
      --button-height: 32px;
      --button-bg: #fff;
      --button-active-bg: #eee;
    }
    ```
2. 安装 gulu

    ```bash
    npm i --save gulu
    ```

3. 引入 gulu

    ```javascript
    import GButton from './components/Button.vue';
    import GButtonGroup from './components/ButtonGroup.vue';
    import {ref} from 'vue';
    
    const loading1 = ref(true);
    const loading2 = ref(true);
    const loading3 = ref(false);
    ```

4. 引入 svg symbols

    ```html
    <script src="//at.alicdn.com/t/c/font_3899220_advnrbrm4uj.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



