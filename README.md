# login-client-view

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
---
---
### Методы

#### onLogin - Войти
При нажатии кнопки Войти может дать 2 варианта ответа в console:

- При `Чек - e` тип будет `type: 'check'`, данные - `check` в console.
   ##### Пример:
```
{"type":"check","check":"123"}
```

- При `Логин - e` тип будет `type: 'login'`, данные -  `login, password` в console.
   ##### Пример:
```
{"type":"login","login":"userlogin","password":"userpassword"}
```
---
#### switchOff - Завершение работы
`type: 'switchOff'`
   ##### Пример:
```
{"type":"switchOff"}
```
---
#### reload - Перезагрузка
`type: 'reboot'`
   ##### Пример:
```
{"type":"reboot"}
```
---
#### changeLang - Смена языка
`{"type":"langChange"}`

Варианты `rus, eng`
   ##### Пример:
```
{"type":"langChange","data":{"lang":"rus"}}
{"type":"langChange","data":{"lang":"eng"}}
```
---
#### clearFields - Очистка полей
---
#### createCheck - Создание чека `type` `createCheck`
---
#### createLogin - Создание логина `type` `createLogin`

---
### Переменные
`title` - номер компьютера,
      
`login` - переменная для чека или логина,
      
`password` - пароль логина,
      
 `online` - переменная для отображения статуса подключения к интернету, тип `Boolean` , default `true`
 
`language` - переменая для языка,

`currentStatus` - переманная статуса компьюетра, варианты:
 - `0` - 'Свободен'
 - `1` - 'Занят'
 - `2` - 'Не в сети'
 - `3` - 'В обслуживании'
 
 `buttonLoading` - переменная активации спиннера в кнопке Войти, тип `Boolean`, default `false`
