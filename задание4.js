let M = ['https://cdn.webshopapp.com/shops/36856/files/391742066/syrische-hamster-goudhamster.png',
'https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-hamsters-23__880.jpg',
'https://i.pinimg.com/originals/d2/26/40/d22640c8070eb8c546499bbcd4d75b2f.jpg',
'https://i.pinimg.com/originals/5e/f5/51/5ef55136544dc52da15ba0964333b08e.jpg']
var arr = document.getElementsByClassName("catalog-product__image-link");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<picture data-gtm-vis-has-fired-32166084_1461="1"><source type="image/webp" media="(min-width: 768px)" data-srcset="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg.webp" data-gtm-vis-has-fired-32166084_1461="1" srcset="${M[i]}"><source type="image/webp" media="(max-width: 767px)" data-srcset="https://c.dns-shop.ru/thumb/st4/fit/120/120/8cc4a5fcd6cc490fd2e941e5f4ec8ddb/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg.webp" data-gtm-vis-has-fired-32166084_1461="1" srcset="${M[i]}"><img alt="Фен Goodhelper HD-F082 черный/красный" data-src="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg" data-gtm-vis-has-fired-32166084_1461="1" class="loaded" src="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg"
GIF3 МБ
data-was-processed="true"></picture>`;
}
const N = ['Хомячок', 'Милый хомячок', 'Клёвый хомячок', 'Забавный хомячок'];
var arr = document.getElementsByClassName("catalog-product__name ui-link ui-link_black");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<span data-gtm-vis-has-fired-32166084_1461="1">${N[i]}</span>`;
}
const X = ['1000$','1000$','1000$','1000$'];
var arr = document.getElementsByClassName("product-buy__price");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `${X[i]}`;
}