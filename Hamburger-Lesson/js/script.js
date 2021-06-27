$(function () {
  $('.menu-trigger').on('click', function (event) {
    $(this).toggleClass('active');
    // トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
    // $(this)は、7章で学習しましたね。クリックされた要素自身を表します
    $('#sp-menu').fadeToggle();
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。
    event.preventDefault();
  });
});