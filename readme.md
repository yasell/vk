## сайтик ВК (ваша кровля)

здесь рабочее, билда нет и не будет.

установка:
- как обычно: `npm i`, затем `npm start` и понеслась..

### Ньюансы
- каждому блоку соответствует свой файлик в папке `sass`.
- ИСКЛЮЧЕНИЯ: `.title`, `.back-top` описаны в общем `base.scss`, стили аккордеона в файле `sidebar.scss` (потому что он только там используется).
- общие стили: есть у абзацев, заголовков, таблиц..
- на весь проект один слайдер (swiper) в карточке товара (и горстка стилей в `product.scss`).
- всплывашки: в галерее - fancybox, заказ звонка - самописный модал.
