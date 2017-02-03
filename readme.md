## Мой босяцкий стартовый template с Gulp

ВНИМАНИЕ! Этот проект в разработке, я добавляю и меняю в нем довольно много всего. Это даже не альфа. Периодически может выглядеть странно и не менее странно работать.

Установка:
- выполнить в папке проекта: `npm i`.

Использование:
- `npm start` (дабы не ставить глобально 4-ю версию gulp).

Минифицированная итоговая сборка:
- `npm run build` (сгенерит папочку `build`)


### Парадигма

- Используется именование классов и файлов по БЭМ.
- Все файлики по папкам: css, js, шрифты, картинки, sass-файлы (переменные, глобальная стилизация, базовые блоки...).
- Диспетчер подключений стилей - `sass/style.scss`. Если в нем импортирован sass-файл какого-либо блока, этот блок используем.


## Назначение папок

```
/           Исходные файлы и здесь работает сервер автообновлений.
build/      Сюда собирается проект
fonts/      Шрифты проекта (никак не обрабатываются)
img/        Глобальные картинки (обрабатываются из корня этой папки плюс подпапки)
js/         Глобальные js-файлы (обработается только если существует и не пустой), фреймворки (только копируются, могут быть подключены вручную)
sass/       Диспетчер подключений, глобальные стили и стили блоков
index.html  Главная страница проекта
```


## Выгрузка на gh-pages

Содержимое проекта можно быстро «выгрузить» на [gh-pages](https://help.github.com/articles/user-organization-and-project-pages/#project-pages) (запушить содержимое папки `build/` в ветку `gh-pages` репозитория проекта). Адрес для просмотра будет таким: http://USERNAME.github.io/PROJECTNAME/ (полное повторений файловой структуры папки `build/`).