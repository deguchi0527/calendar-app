$(function() {
  // 日付をクリックするとイベントが表示される
  $('.calendar-day').on('click', function() {

    // クリックした日付を西暦表記にする
    const day = $(this).text();
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const set = year + "-" + ("0"+month).slice(-2) + "-" + ("0"+day).slice(-2);
    const $class = "." + set;

    // クリックした日付を表示する
    const eventDay = month + "/" + day + "の予定"
    
    // 現在表示されているイベントを削除する
    $('.active').removeClass('active');
    // 現在表示されているイベント日を空にする
    $('.event-lists-day').text('');
    // クリックされた日付を表示する
    $('.event-lists-day').prepend(eventDay);
    // クリックさてたイベントを表示する
    $($class).addClass('active');
  });
});